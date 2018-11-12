// eslint-disable-next-line import/prefer-default-export
export const colors = [
  // Semantic Colors
  {
    name: 'Primary',
    cssVar: '--color-primary',
    hex: '#3c80cf',
    group: 'semantic',
  },
  {
    name: 'Positive',
    cssVar: '--color-positive',
    hex: '#0eb87f',
    group: 'semantic',
  },
  {
    name: 'Negative',
    cssVar: '--color-negative',
    hex: '#d9453f',
    group: 'semantic',
  },
  {
    name: 'Warning',
    cssVar: '--color-warning',
    hex: '#ea9005',
    group: 'semantic',
  },

  // Text Colors
  {
    name: 'Text Dark',
    cssVar: '--color-text-dark',
    hex: '#2a3039',
    group: 'text',
  },
  {
    name: 'Text Mid',
    cssVar: '--color-text-mid',
    hex: '#536171',
    group: 'text',
  },
  {
    name: 'Text Light',
    cssVar: '--color-text-light',
    hex: '#8091a5',
    group: 'text',
  },
  {
    name: 'Text Lightest',
    cssVar: '--color-text-lightest',
    hex: '#a9b9c0',
    group: 'text',
  },

  // Element Colors
  {
    name: 'Element Darkest',
    cssVar: '--color-element-darkest',
    hex: '#b4c3ca',
    group: 'element',
  },
  {
    name: 'Element Dark',
    cssVar: '--color-element-dark',
    hex: '#c3cfd5',
    group: 'element',
  },
  {
    name: 'Element Mid',
    cssVar: '--color-element-mid',
    hex: '#d3dce0',
    group: 'element',
  },
  {
    name: 'Element Light',
    cssVar: '--color-element-light',
    hex: '#e5ebed',
    group: 'element',
  },
  {
    name: 'Element Lightest',
    cssVar: '--color-element-lightest',
    hex: '#f7f9fa',
    group: 'element',
  },

  // Contrast Colors
  {
    name: 'Contrast Dark',
    cssVar: '--color-contrast-dark',
    hex: '#0c141c',
    group: 'contrast',
  },
  {
    name: 'Contrast Mid',
    cssVar: '--color-contrast-mid',
    hex: '#192532',
    group: 'contrast',
  },
  {
    name: 'Contrast Light',
    cssVar: '--color-contrast-light',
    hex: '#263545',
    group: 'contrast',
  },

  // Blue Colors
  {
    name: 'Blue Dark',
    cssVar: '--color-blue-dark',
    hex: '#3072be',
    group: 'blue',
  },
  {
    name: 'Blue Base',
    cssVar: '--color-blue-base',
    hex: '#3c80cf',
    group: 'blue',
  },
  {
    name: 'Blue Mid',
    cssVar: '--color-blue-mid',
    hex: '#4a90e2',
    group: 'blue',
  },
  {
    name: 'Blue Light',
    cssVar: '--color-blue-light',
    hex: '#5b9fef',
    group: 'blue',
  },

  // Green Colors
  {
    name: 'Green Dark',
    cssVar: '--color-green-dark',
    hex: '#0baa75',
    group: 'green',
  },
  {
    name: 'Green Base',
    cssVar: '--color-green-base',
    hex: '#0eb87f',
    group: 'green',
  },
  {
    name: 'Green Mid',
    cssVar: '--color-green-mid',
    hex: '#19cd91',
    group: 'green',
  },
  {
    name: 'Green Light',
    cssVar: '--color-green-light',
    hex: '#14d997',
    group: 'green',
  },

  // Red Colors
  {
    name: 'Red Dark',
    cssVar: '--color-red-dark',
    hex: '#cd3f39',
    group: 'red',
  },
  {
    name: 'Red Base',
    cssVar: '--color-red-base',
    hex: '#d9453f',
    group: 'red',
  },
  {
    name: 'Red Mid',
    cssVar: '--color-red-mid',
    hex: '#e34e48',
    group: 'red',
  },
  {
    name: 'Red Light',
    cssVar: '--color-red-light',
    hex: '#f05751',
    group: 'red',
  },

  // Orange Colors
  {
    name: 'Orange Dark',
    cssVar: '--color-orange-dark',
    hex: '#db8500',
    group: 'orange',
  },
  {
    name: 'Orange Base',
    cssVar: '--color-orange-base',
    hex: '#ea9005',
    group: 'orange',
  },
  {
    name: 'Orange Mid',
    cssVar: '--color-orange-mid',
    hex: '#fba012',
    group: 'orange',
  },
  {
    name: 'Orange Light',
    cssVar: '--color-orange-light',
    hex: '#ffb239',
    group: 'orange',
  },

  // Coral Colors
  {
    name: 'Coral Dark',
    cssVar: '--color-coral-dark',
    hex: '#d0a2a0',
    group: 'coral',
  },
  {
    name: 'Coral Mid',
    cssVar: '--color-coral-mid',
    hex: '#fbe3e2',
    group: 'coral',
  },

  // Mint Colors
  {
    name: 'Mint Dark',
    cssVar: '--color-mint-dark',
    hex: '#b7ded0',
    group: 'mint',
  },
  {
    name: 'Mint Mid',
    cssVar: '--color-mint-mid',
    hex: '#f4fffb',
    group: 'mint',
  },

  // Ice Colors
  {
    name: 'Ice Dark',
    cssVar: '--color-ice-dark',
    hex: '#c5d2d8',
    group: 'ice',
  },
  {
    name: 'Ice Mid',
    cssVar: '--color-ice-mid',
    hex: '#e8f7ff',
    group: 'ice',
  },

  // Misc Colors
  {
    name: 'White',
    cssVar: '--color-white',
    hex: '#ffffff',
    group: 'misc',
  },
];

export const verticalSpacingUnits = [
  {
    name: '2XS',
    cssVar: '--vertical-spacing-2xs',
    px: '4px',
  },
  {
    name: 'XS',
    cssVar: '--vertical-spacing-xs',
    px: '8px',
  },
  {
    name: 'S',
    cssVar: '--vertical-spacing-s',
    px: '14px',
  },
  {
    name: 'M',
    cssVar: '--vertical-spacing-m',
    px: '20px',
  },
  {
    name: 'L',
    cssVar: '--vertical-spacing-l',
    px: '28px',
  },
  {
    name: 'XL',
    cssVar: '--vertical-spacing-xl',
    px: '40px',
  },
  {
    name: '2XL',
    cssVar: '--vertical-spacing-2xl',
    px: '60px',
  },
  {
    name: '3XL',
    cssVar: '--vertical-spacing-3xl',
    px: '80px',
  },
];
