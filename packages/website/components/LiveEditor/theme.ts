import tokens from '@contentful/f36-tokens';

type PrismThemeEntry = {
  color?: string;
  backgroundColor?: string;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  opacity?: number;
  [styleKey: string]: string | number | void;
};

type PrismTheme = {
  plain: PrismThemeEntry;
  styles: Array<{
    types: string[];
    style: PrismThemeEntry;
  }>;
};

export const palette = {
  color: tokens.gray900,
  backgroundColor: tokens.gray200,
  comment: tokens.yellow800,
  attrValue: tokens.purple600,
  operator: tokens.gray800,
  selector: tokens.blue600,
  deleted: tokens.red700,
  functionVariable: tokens.purple600,
  tag: tokens.blue900,
  activeText: '#0041ab',
  inactiveText: '#e6ecf7',
  inputBackground: tokens.colorWhite,
  accent: '#0041ab',
  errorBackground: '#ffe0e0',
  keyword: '#0041ab',
};

export const theme: PrismTheme = {
  plain: {
    color: palette.color,
    backgroundColor: palette.backgroundColor,
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: palette.comment,
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: palette.attrValue,
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: palette.operator,
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#36acaa',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: palette.selector,
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: palette.deleted,
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: palette.functionVariable,
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: palette.tag,
      },
    },
  ],
};
