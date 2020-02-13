# Useful TypeScript primitives

This codebase produces an npm module that is an automatic derivation of some useful concepts from the [Microsoft/vscode](https://github.com/Microsoft/vscode) repo's [vs/base/common](https://github.com/Microsoft/vscode/tree/master/src/vs/base/common) directory.

## Documentation

[API Documentation](./docs)

## Development

### Rebuild from source

Read code from the upstream `vscode` repo at the `UPSTREAM_GIT_HASHISH` (or `master` if not specified) and:

1. Generate a tree-shaken module from `cancellation.ts`, `event.ts` and `lifecycle.ts`.
2. Produces `tsdoc` documents in `./docs`.

```sh
npm run build [UPSTREAM_GIT_HASHISH]
```
