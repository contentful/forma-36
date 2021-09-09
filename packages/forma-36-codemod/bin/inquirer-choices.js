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
];

module.exports = {
  PARSER_CHOICES,
  TRANSFORMS_CHOICES,
};
