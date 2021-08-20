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
];

module.exports = {
  PARSER_CHOICES,
  TRANSFORMS_CHOICES,
};
