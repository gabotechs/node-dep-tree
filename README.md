# node-dep-tree

Node wrapper for https://github.com/gabotechs/dep-tree.

## Install

Add `node-dep-tree` as a dev dependency.

```shell
yarn add -D node-dep-tree
```
or
```shell
npm install --save-dev node-dep-tree
```

## Usage

The `dep-tree` binary will be available for checking and rendering dependency trees in your project.

```json
{
  "name": "my-package",
  "scripts": {
    "deps": "dep-tree check"
  }
}
```
