/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface ErrorListenerCallback {
  (error: any): void;
}

export interface ErrorListenerUnbind {
  (): void;
}

// Avoid circular dependency on EventEmitter by implementing a subset of the interface.
export class ErrorHandler {
  private unexpectedErrorHandler: (e: any) => void;
  private listeners: ErrorListenerCallback[];

  constructor() {
    this.listeners = [];

    this.unexpectedErrorHandler = function(e: any) {
      setTimeout(() => {
        if (e.stack) {
          throw new Error(e.message + '\n\n' + e.stack);
        }

        throw e;
      }, 0);
    };
  }

  public addListener(listener: ErrorListenerCallback): ErrorListenerUnbind {
    this.listeners.push(listener);

    return () => {
      this._removeListener(listener);
    };
  }

  private emit(e: any): void {
    this.listeners.forEach(listener => {
      listener(e);
    });
  }

  private _removeListener(listener: ErrorListenerCallback): void {
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  }

  public setUnexpectedErrorHandler(newUnexpectedErrorHandler: (e: any) => void): void {
    this.unexpectedErrorHandler = newUnexpectedErrorHandler;
  }

  public getUnexpectedErrorHandler(): (e: any) => void {
    return this.unexpectedErrorHandler;
  }

  public onUnexpectedError(e: any): void {
    this.unexpectedErrorHandler(e);
    this.emit(e);
  }

  // For external errors, we don't want the listeners to be called
  public onUnexpectedExternalError(e: any): void {
    this.unexpectedErrorHandler(e);
  }
}

export const errorHandler = new ErrorHandler();

export function setUnexpectedErrorHandler(newUnexpectedErrorHandler: (e: any) => void): void {
  errorHandler.setUnexpectedErrorHandler(newUnexpectedErrorHandler);
}

export function onUnexpectedError(e: any): undefined {
  // ignore errors from cancelled promises
  if (!isPromiseCanceledError(e)) {
    errorHandler.onUnexpectedError(e);
  }
  return undefined;
}

export function onUnexpectedExternalError(e: any): undefined {
  // ignore errors from cancelled promises
  if (!isPromiseCanceledError(e)) {
    errorHandler.onUnexpectedExternalError(e);
  }
  return undefined;
}

// see https://github.com/v8/v8/wiki/Stack%20Trace%20API#basic-stack-traces
export interface V8CallSite {
  getThis(): any;
  getTypeName(): string;
  getFunction(): string;
  getFunctionName(): string;
  getMethodName(): string;
  getFileName(): string;
  getLineNumber(): number;
  getColumnNumber(): number;
  getEvalOrigin(): string;
  isToplevel(): boolean;
  isEval(): boolean;
  isNative(): boolean;
  isConstructor(): boolean;
  toString(): string;
}

export class ExtendableError extends Error {
  constructor(message: string) {
    super(message);

    this.name = this.constructor.name;

    if (typeof (Error as any).captureStackTrace === 'function') {
      (Error as any).captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

export class CanceledError extends ExtendableError {}

/**
 * Checks if the given error is a promise in canceled state
 */
export function isPromiseCanceledError(error: any): error is CanceledError {
  return error instanceof CanceledError;
}

/**
 * Returns an error that signals cancellation.
 */
export function canceled(message: string = 'Canceled'): Error {
  return new CanceledError(message);
}

export function getErrorMessage(err: any): string {
  if (!err) {
    return 'Error';
  }

  if (err.message) {
    return err.message;
  }

  if (err.stack) {
    return err.stack.split('\n')[0];
  }

  return String(err);
}
