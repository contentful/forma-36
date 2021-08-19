## f36-codemod

This repository contains a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift) that help update Forma-36 usage.

### Usage

Run this command to start an interactive wizard and then run the specified transform:

`npx @contentful/f36-codemod <transform> <path> [...options]`

- `transform` - name of transform, see available transforms below.
- `path` - files or directory to transform
- use the `--dry` option for a dry-run and use `--print` to print the output for comparison

### Included Transforms

#### `color-tokens-to-new-tokens`

Converts usage of deprecated color tokens with the correct new token.
eg. `tokens.colorElementMid` to `tokens.gray300`.

#### `v4-text-link`

Migrates `TextLink` component from Forma@v3 to Forma@v4

#### `v4-badge`

Migrates `Tag` component from Forma@v3 to `Badge` component from Forma@v4
