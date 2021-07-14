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

```sh
npx @contentful/f36-codemod color-tokens-to-new-tokens <path>
```

Note: It will only work on tokens used on a code like the following one.

```js
import tokens from '@contentful/forma-36-tokens';

const color = tokens.colorElementMid;
```
