## f36-codemod

This repository contains a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift) that help update Forma-36 usage.

### Usage

Run this command to start an interactive wizard and then run the specified transform:

`npx @contentful/f36-codemod <path> [...options]`

- use the `--dry` option for a dry-run and use `--print` to print the output for comparison

### Running locally

To run the codemod directly without publishing it needs some additional steps due to some issues resolving the dependencies when running locally.
You need to first install all dependencies on the codemod directory.

```sh
# Inside the forma-36-codemod directory
npm install
npm link
```

After this you can run the codemod in your project.
If using `nvm` or similar make sure to be on the same version that you used to link the codemod.

```sh
f36-codemod <path> [...options]
```

## Included Transforms

### v6

codemods for migration from version 5 to version 6

#### `v6/menu`

Migrates removed type value for `placement` and migrates changed type for property `offset`.
Migrates deprecated `Menu.Submenu` component

#### `v6/popover`

Migrates removed type value for `placement` and migrates changed type for propterty `offset`

#### `v6/skeleton`

Migrates removed types

### v5

codemods for migration from version 4 to version 5

#### `v5/icons`

Updates dependency and usage of icons to the v5-alpha icons
