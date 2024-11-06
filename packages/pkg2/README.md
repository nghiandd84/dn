# pkg2

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build pkg2` to build the library.

## Running unit tests

Run `nx test pkg2` to execute the unit tests via [Jest](https://jestjs.io).

// TODO
Jest requires 'moduleResolution' to be set to 'node' or 'node10' to work properly. It would need to be changed in the "tsconfig.base.json" file. It's not enough to override the compiler option in the project's tsconfig file.
Alternatively, you can use the environment variable `TS_NODE_COMPILER_OPTIONS='{"moduleResolution": "node10"}'` to override Jest's usage of ts-node.
