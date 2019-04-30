/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as errors from './errors';
import { Emitter, Event } from './event';
import { IDisposable } from './lifecycle';
import { CancellationToken, CancellationTokenSource } from './cancellation';
import { Thenable } from './thenable';

export function isThenable<T>(obj: any): obj is Thenable<T> {
  return obj && typeof (<Thenable<any>>obj).then === 'function';
}
export interface CancelablePromise<T> extends Thenable<T> {
  cancel(): void;
}

export function createCancelablePromise<T>(callback: (token: CancellationToken) => Thenable<T>): CancelablePromise<T> {
  const source = new CancellationTokenSource();

  const thenable = callback(source.token);
  const promise = new Promise<T>((resolve, reject) => {
    source.token.onCancellationRequested(() => {
      reject(errors.canceled());
    });
    Promise.resolve(thenable).then(
      value => {
        source.dispose();
        resolve(value);
      },
      err => {
        source.dispose();
        reject(err);
      }
    );
  });

  return new class implements CancelablePromise<T> {
    cancel() {
      source.cancel();
    }
    then<TResult1 = T, TResult2 = never>(
      resolve?: ((value: T) => TResult1 | Thenable<TResult1>) | undefined | null,
      reject?: ((reason: any) => TResult2 | Thenable<TResult2>) | undefined | null
    ): Promise<TResult1 | TResult2> {
      return promise.then(resolve, reject);
    }
    catch<TResult = never>(
      reject?: ((reason: any) => TResult | Thenable<TResult>) | undefined | null
    ): Promise<T | TResult> {
      return this.then(undefined, reject);
    }
  }();
}

export function asThenable<T>(callback: () => T | Thenable<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    let item = callback();
    if (isThenable<T>(item)) {
      item.then(resolve, reject);
    } else {
      resolve(item);
    }
  });
}

export interface ITask<T> {
  (): T;
}

/**
 * A barrier that is initially closed and then becomes opened permanently.
 */
export class Barrier {
  private _isOpen: boolean;
  private _promise: Promise<boolean>;
  private _completePromise!: (v: boolean) => void;

  constructor() {
    this._isOpen = false;
    this._promise = new Promise<boolean>(resolve => {
      this._completePromise = resolve;
    });
  }

  isOpen(): boolean {
    return this._isOpen;
  }

  open(): void {
    this._isOpen = true;
    this._completePromise(true);
  }

  wait(): Promise<boolean> {
    return this._promise;
  }
}

export function timeout(millis: number): CancelablePromise<void>;
export function timeout(millis: number, token: CancellationToken): Thenable<void>;
export function timeout(millis: number, token?: CancellationToken): CancelablePromise<void> | Thenable<void> {
  if (!token) {
    return createCancelablePromise(token => timeout(millis, token));
  }

  return new Promise((resolve, reject) => {
    const handle = setTimeout(resolve, millis);
    token.onCancellationRequested(() => {
      clearTimeout(handle);
      reject(errors.canceled());
    });
  });
}

interface ILimitedTaskFactory<T> {
  factory: ITask<Thenable<T>>;
  c: (value?: T | Thenable<T>) => void;
  e: (error?: any) => void;
}

/**
 * A helper to queue N promises and run them all with a max degree of parallelism. The helper
 * ensures that at any time no more than M promises are running at the same time.
 */
export class Limiter<T> {
  private _size = 0;
  private runningPromises: number;
  private maxDegreeOfParalellism: number;
  private outstandingPromises: ILimitedTaskFactory<T>[];
  private readonly _onFinished: Emitter<void>;
  private readonly _onIdle: Emitter<void>;

  constructor(maxDegreeOfParalellism: number) {
    this.maxDegreeOfParalellism = maxDegreeOfParalellism;
    this.outstandingPromises = [];
    this.runningPromises = 0;
    this._onFinished = new Emitter<void>();
    this._onIdle = new Emitter<void>();
  }

  public get onFinished(): Event<void> {
    return this._onFinished.event;
  }

  public get onIdle(): Event<void> {
    return this._onIdle.event;
  }

  public get size(): number {
    return this._size;
    // return this.runningPromises + this.outstandingPromises.length;
  }

  queue(factory: ITask<Thenable<T>>): Thenable<T> {
    this._size++;

    return new Promise<T>((c, e) => {
      this.outstandingPromises.push({ factory, c, e });
      this.consume();
    });
  }

  private consume(): void {
    while (this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism) {
      const iLimitedTask = this.outstandingPromises.shift()!;
      this.runningPromises++;

      const promise = iLimitedTask.factory();
      promise.then(iLimitedTask.c, iLimitedTask.e);
      promise.then(() => this.consumed(), () => this.consumed());
    }
  }

  private consumed(): void {
    this._size--;
    this.runningPromises--;

    if (this.outstandingPromises.length > 0) {
      this.consume();
    } else {
      this._onFinished.fire();
    }

    if (!this.runningPromises) {
      this._onIdle.fire();
    }
  }

  public dispose(): void {
    this._onFinished.dispose();
  }
}

export interface IdleDeadline {
  readonly didTimeout: boolean;
  timeRemaining(): number;
}
/**
 * Execute the callback the next time the browser is idle
 */
export let runWhenIdle: (callback: (idle: IdleDeadline) => void, timeout?: number) => IDisposable;

declare function requestIdleCallback(callback: (args: IdleDeadline) => void, options?: { timeout: number }): number;
declare function cancelIdleCallback(handle: number): void;

(function() {
  if (typeof requestIdleCallback !== 'function' || typeof cancelIdleCallback !== 'function') {
    let dummyIdle: IdleDeadline = Object.freeze({
      didTimeout: true,
      timeRemaining() {
        return 15;
      },
    });
    runWhenIdle = (runner, timeout = 0) => {
      let handle = setTimeout(() => runner(dummyIdle), timeout);
      let disposed = false;
      return {
        dispose() {
          if (disposed) {
            return;
          }
          disposed = true;
          clearTimeout(handle);
        },
      };
    };
  } else {
    runWhenIdle = (runner, timeout?) => {
      let handle: number = requestIdleCallback(runner, typeof timeout === 'number' ? { timeout } : undefined);
      let disposed = false;
      return {
        dispose() {
          if (disposed) {
            return;
          }
          disposed = true;
          cancelIdleCallback(handle);
        },
      };
    };
  }
})();

/**
 * An implementation of the "idle-until-urgent"-strategy as introduced
 * here: https://philipwalton.com/articles/idle-until-urgent/
 */
export class IdleValue<T> {
  private readonly _executor: () => void;
  private readonly _handle: IDisposable;

  private _didRun: boolean = false;
  private _value: T | undefined;
  private _error: any;

  constructor(executor: () => T) {
    this._executor = () => {
      try {
        this._value = executor();
      } catch (err) {
        this._error = err;
      } finally {
        this._didRun = true;
      }
    };
    this._handle = runWhenIdle(() => this._executor());
  }

  dispose(): void {
    this._handle.dispose();
  }

  getValue(): T {
    if (!this._didRun) {
      this._handle.dispose();
      this._executor();
    }
    if (this._error) {
      throw this._error;
    }
    return this._value!;
  }
}

export class Deferred<T, E extends Error = Error> {
  private _promise: Promise<T>;
  private _resolve!: (result: T) => void;
  private _reject!: (error: E) => void;

  constructor() {
    this._promise = new Promise<T>((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  get promise() {
    return this._promise;
  }

  get reject() {
    return this._reject;
  }

  get resolve() {
    return this._resolve;
  }
}
