## f36-codemod

This repository contains a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift) that help update Forma-36 usage.

### Usage

Run this command to start an interactive wizard and then run the specified transform:

`npx @contentful/f36-codemod <transform> <path> [...options]`

- `transform` - name of transform, see available transforms below.
- `path` - files or directory to transform
- use the `--dry` option for a dry-run and use `--print` to print the output for comparison

#### Using environment variables

We have some environment variables that can be used:

- `FORMA_IMPORT`: It should be used when you don't import forma components directly from '@contentful/forma-36-react-components';
- `FORMA_SKIP_UPDATE_IMPORT`: It should be used when you don't want to update the import statement.

Example usage with the environment variables:

```sh
# In this example it would search for: import { Pill } from "custom-import"
# and would not update the import statement, only the props of the Pill component itself
FORMA_IMPORT=custom-import FORMA_SKIP_UPDATE_IMPORT=true npx @contentful/f36-codemod v4-pill
```

### Running locally

To run the codemod directly without publishing it needs some additional steps due to some issues resolving the dependencies when running locally.  
You need to first install all dependencies on the codemod directory.

```sh
# Inside the forma-36-codemod directory
npm install --legacy-peer-deps
npm link
```

After this you can run the codemod in your project.  
If using `nvm` or similar make sure to be on the same version that you used to link the codemod.

```sh
f36-codemod <transform> <path> [...options]
```

### Included Transforms

#### `color-tokens-to-new-tokens`

Converts usage of deprecated color tokens with the correct new token.
eg. `tokens.colorElementMid` to `tokens.gray300`.

#### `v4-text-link`

Migrates `TextLink` component from Forma@v3 to Forma@v4

#### `v4-badge`

Migrates `Tag` component from Forma@v3 to `Badge` component from Forma@v4

#### `v4-note`

Migrates `Note` component from Forma@v3 to Forma@v4

#### `v4-flex`

Migrates `Flex` component from Forma@v3 to Forma@v4

#### `v4-list`

Migrates `List` component from Forma@v3 to Forma@v4

#### `v4-pill`

Migrates `Pill` component from Forma@v3 to Forma@v4

#### `v4-button`

Migrates `Button` component from Forma@v3 to Forma@v4

#### `v4-tooltip`

Migrates `Tooltip` component from Forma@v3 to Forma@v4

#### `v4-entity-list`

Converts EntityList components from Forma v3 to v4

#### `v4-text-field`

Migrates `TextField` component from Forma@v3 to Forma@v4

#### `v4-notification`

Migrate Notification component from v3 to v4
