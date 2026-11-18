## f36-codemod

This repository contains a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift) that help update Forma-36 usage.

### Usage

Run this command to start an interactive wizard and then run the specified transform:

`npx @contentful/f36-codemod <path> [...options]`

Node.js 22 or newer is required.

- use the `--dry` option for a dry-run and use `--print` to print the output for comparison

### Running locally

To run the codemod directly without publishing it needs some additional steps due to some issues resolving the dependencies when running locally.
You need to first install all dependencies on the codemod directory.

```sh
# Inside the forma-36-codemod directory
pnpm install
pnpm link --global
```

After this you can run the codemod in your project.
If using `nvm` or similar make sure to be on the same version that you used to link the codemod.

```sh
f36-codemod <path> [...options]
```

## Included Transforms

### v7

codemods for migration from version 6 to version 7

#### `v7/modal`

Migrates `Modal` to the `header` and `controls` slots:

- `title`, `subtitle` and `modalHeaderProps` move into `header={<Modal.Header … />}`
- render functions that only return `Modal.Header`, `Modal.Content` and `Modal.Controls` become slots, the `Modal.Content` children become the `Modal` children and its props move to `modalContentProps`
- `onClose` on `Modal.Header` is removed when it is the same as the `onClose` of the `Modal`

Every usage that cannot be migrated safely is left unchanged and printed as a warning with file and line, see the [Modal migration guide](../components/modal/src/README.mdx#migrating-to-slots). Run your formatter afterwards.

### v6

codemods for migration from version 5 to version 6

#### `v6/menu`

Migrates removed type value for `placement` and migrates changed type for property `offset`.
Migrates deprecated `Menu.Submenu` component

#### `v6/popover`

Migrates removed type value for `placement` and migrates changed type for property `offset`

#### `v6/skeleton`

Migrates removed types

### v5

codemods for migration from version 4 to version 5

#### `v5/icons`

Updates dependency and usage of icons to the v5-alpha icons
