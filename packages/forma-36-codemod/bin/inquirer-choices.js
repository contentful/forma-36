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
];

module.exports = {
  PARSER_CHOICES,
  TRANSFORMS_CHOICES,
};
