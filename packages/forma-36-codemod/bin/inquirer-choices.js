const PARSER_CHOICES = [
  {
    name: 'JavaScript',
    value: 'babel',
  },
  {
    name: 'TypeScript',
    value: 'tsx',
  },
];

const TRANSFORMS_CHOICES = [
  {
    name:
      'color-tokens-to-new-tokens: Converts deprecated color tokens to the new ones',
    value: 'color-tokens-to-new-tokens',
  },
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
    name:
      'v4-badge: Converts Tag component from Forma v3 to Badge component from v4',
    value: 'v4-badge',
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
    name:
      'v4-modal: Converts Modal, ModalConfirm and ModalLauncher components from Forma v3 to v4',
    value: 'v4-modal',
  },
  {
    name: 'v4-select: Converts Select components from Forma v3 to v4',
    value: 'v4-select',
  },
  {
    name:
      'v4-typography: Converts all typography components from Forma v3 to v4',
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
    name:
      'v4-text-inputs: Converts TextInput and Textarea components from Forma v3 to v4',
    value: 'v4-text-inputs',
  },
];

module.exports = {
  PARSER_CHOICES,
  TRANSFORMS_CHOICES,
};
