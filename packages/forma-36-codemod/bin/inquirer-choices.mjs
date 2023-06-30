import inquirer from 'inquirer';

export const PARSER_CHOICES = [
  {
    name: 'JavaScript',
    value: 'babel',
  },
  {
    name: 'TypeScript',
    value: 'tsx',
  },
];

export const SETUP_CHOICES = [
  {
    name: 'run-all-v4: Update package json with new packages and remove old ones, remove v3 CSS imports and run all possible codemods for components.',
    value: 'run-all-v4',
  },
  {
    name: 'update-package-json: Updates package.json file with correct packages, and remove v3 CSS imports',
    value: 'update-package-json',
  },
  {
    name: 'migrate-all-components-to-v4: Run all existing codemods',
    value: 'migrate-all-components-to-v4',
  },
  {
    name: 'migrate-specific-component-to-v4: Select which v4 codemod you want to apply',
    value: 'migrate-specific-component-to-v4',
  },
];

const V4_CODEMODS = [
  {
    name: 'v4-text-link: Converts TextLink component from Forma v3 to v4',
    value: 'v4-text-link',
  },
  {
    name: 'v4-button: Converts Button component from Forma v3 to v4',
    value: 'v4-button',
  },
  {
    name: 'v4-icon-button: Converts IconButton component from Forma v3 to v4',
    value: 'v4-icon-button',
  },
  {
    name: 'v4-badge: Converts Tag component from Forma v3 to Badge component from v4',
    value: 'v4-badge',
  },
  {
    name: 'v4-card: Converts Card component from Forma v3 to v4',
    value: 'v4-card',
  },
  {
    name: 'v4-pill: Converts Pill component from Forma v3 to v4',
    value: 'v4-pill',
  },
  {
    name: 'v4-list: Converts List component from Forma v3 to v4',
    value: 'v4-list',
  },
  {
    name: 'v4-flex: Converts Flex component from Forma v3 to v4',
    value: 'v4-flex',
  },
  {
    name: 'v4-note: Converts Note component from Forma v3 to v4',
    value: 'v4-note',
  },
  {
    name: 'v4-spinner: Converts Spinner component from Forma v3 to v4',
    value: 'v4-spinner',
  },
  {
    name: 'v4-modal: Converts Modal, ModalConfirm and ModalLauncher components from Forma v3 to v4',
    value: 'v4-modal',
  },
  {
    name: 'v4-select: Converts Select components from Forma v3 to v4',
    value: 'v4-select',
  },
  {
    name: 'v4-typography: Converts all typography components from Forma v3 to v4',
    value: 'v4-typography',
  },
  {
    name: 'v4-table: Converts Table components from Forma v3 to v4',
    value: 'v4-table',
  },
  {
    name: 'v4-grid: Converts Grid components from Forma v3 to v4',
    value: 'v4-grid',
  },
  {
    name: 'v4-skeleton: Converts Skeleton components from Forma v3 to v4',
    value: 'v4-skeleton',
  },
  {
    name: 'v4-tooltip: Converts Tooltip component from Forma v3 to v4',
    value: 'v4-tooltip',
  },
  {
    name: 'v4-icon: Converts Icon component from Forma v3 to v4',
    value: 'v4-icon',
  },
  {
    name: 'v4-text-inputs: Converts TextInput and Textarea components from Forma v3 to v4',
    value: 'v4-text-inputs',
  },
  {
    name: 'v4-checkbox: Converts CheckboxField component from Forma v3 to v4 Checkbox',
    value: 'v4-checkbox',
  },
  {
    name: 'v4-form: Converts Form component from Forma v3 to v4',
    value: 'v4-form',
  },
  {
    name: 'v4-radio: Converts RadioButton and RadioButtonField components from Forma v3 to v4',
    value: 'v4-radio',
  },
  {
    name: 'v4-entity-list: Converts EntityList components from Forma v3 to v4',
    value: 'v4-entity-list',
  },
  {
    name: 'v4-text-field: Converts TextField components from Forma v3 to v4',
    value: 'v4-text-field',
  },
  {
    name: 'v4-notification: Migrate Notification component from v3 to v4',
    value: 'v4-notification',
  },
  {
    name: 'v4-asset-card: Migrate AssetCard components from v3 to v4',
    value: 'v4-asset-card',
  },
  {
    name: 'v4-entry-card: Migrate Entry components from v3 to v4',
    value: 'v4-entry-card',
  },
  {
    name: 'v4-helptext: Migrates HelpText components outside form from v3 to v4',
    value: 'v4-helptext',
  },
  {
    name: 'v4-inline-entry-card: Converts InlineEntryCard from Forma v3 to v4',
    value: 'v4-inline-entry-card',
  },
  {
    name: 'v4-clean-css: Removes the imports for v3 css files',
    value: 'v4-clean-css',
  },
  // Add extra codemods - do not remove
].sort((a, b) => (a.value < b.value ? -1 : 1));

export const TRANSFORMS_CHOICES = [
  {
    name: 'color-tokens-to-new-tokens: Converts deprecated color tokens to the new ones',
    value: 'color-tokens-to-new-tokens',
  },
  new inquirer.Separator(),
  ...V4_CODEMODS,
];
