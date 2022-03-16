## f36-codemod

This repository contains a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift) that help update Forma-36 usage.

### Usage

Run this command to start an interactive wizard and then run the specified transform:

`npx @contentful/f36-codemod <transform> <path> [...options]`

- `transform` - name of transform, see available transforms below, separate multiple transforms with a `,`.
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

#### `v4-asset-card`

Migrate AssetCard components from v3 to v4

#### `v4-badge`

Converts Tag component from Forma v3 to Badge component from v4

#### `v4-button`

Converts Button component from Forma v3 to v4

#### `v4-card`

Converts Card component from Forma v3 to v4

#### `v4-checkbox`

Converts CheckboxField component from Forma v3 to v4 Checkbox

#### `v4-clean-css`

Removes the imports for v3 css files

#### `v4-entity-list`

Converts EntityList components from Forma v3 to v4

#### `v4-entry-card`

Migrate Entry components from v3 to v4

#### `v4-flex`

Converts Flex component from Forma v3 to v4

#### `v4-form`

Converts Form component from Forma v3 to v4

#### `v4-grid`

Converts Grid components from Forma v3 to v4

#### `v4-helptext`

Migrates HelpText components outside form from v3 to v4

#### `v4-icon`

Converts Icon component from Forma v3 to v4

#### `v4-icon-button`

Converts IconButton component from Forma v3 to v4

#### `v4-inline-entry-card`

Converts InlineEntryCard from Forma v3 to v4

#### `v4-list`

Converts List component from Forma v3 to v4

#### `v4-modal`

Converts Modal, ModalConfirm and ModalLauncher components from Forma v3 to v4

#### `v4-note`

Converts Note component from Forma v3 to v4

#### `v4-notification`

Migrate Notification component from v3 to v4

#### `v4-pill`

Converts Pill component from Forma v3 to v4

#### `v4-radio`

Converts RadioButton and RadioButtonField components from Forma v3 to v4

#### `v4-select`

Converts Select components from Forma v3 to v4

#### `v4-skeleton`

Converts Skeleton components from Forma v3 to v4

#### `v4-spinner`

Converts Spinner component from Forma v3 to v4

#### `v4-table`

Converts Table components from Forma v3 to v4

#### `v4-text-field`

Converts TextField components from Forma v3 to v4

#### `v4-text-inputs`

Converts TextInput and Textarea components from Forma v3 to v4

#### `v4-text-link`

Converts TextLink component from Forma v3 to v4

#### `v4-tooltip`

Converts Tooltip component from Forma v3 to v4

#### `v4-typography`

Converts all typography components from Forma v3 to v4
