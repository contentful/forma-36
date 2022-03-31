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
  activeBackground: tokens.gray300,
  comment: tokens.gray600,
  attrValue: tokens.purple500,
  string: tokens.yellow800,
  operator: tokens.gray800,
  selector: tokens.blue700,
  deleted: tokens.red700,
  functionVariable: tokens.purple600,
  tag: tokens.blue700,
  activeText: tokens.blue700,
  inactiveText: tokens.gray300,
  inputBackground: tokens.colorWhite,
  accent: tokens.blue700,
  errorBackground: tokens.red200,
  keyword: tokens.red700,
  definition: tokens.green700,
};

export const theme: PrismTheme = {
  plain: {
    color: palette.color,
    backgroundColor: palette.backgroundColor,
  },
  styles: [
    {
      types: ['prolog'],
      style: {
        color: palette.selector,
      },
    },
    {
      types: ['comment'],
      style: {
        color: palette.comment,
      },
    },
    {
      types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
      style: {
        color: palette.keyword,
      },
    },
    {
      types: ['number', 'inserted'],
      style: {
        color: palette.attrValue,
      },
    },
    {
      types: ['constant'],
      style: {
        color: palette.color,
      },
    },
    {
      types: ['attr-name', 'variable'],
      style: {
        color: palette.tag,
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'attr-value', 'template-punctuation'],
      style: {
        color: palette.string,
      },
    },
    {
      types: ['deleted'],
      style: {
        color: palette.deleted,
      },
    },
    {
      types: ['selector'],
      style: {
        color: palette.selector,
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: palette.color,
      },
    },
    {
      types: ['function'],
      style: {
        color: palette.definition,
      },
    },
    {
      types: ['class-name'],
      style: {
        color: palette.tag,
      },
    },
  ],
};

export const paletteDark = {
  accent: tokens.blue300,
  activeBackground: tokens.gray600,
  activeText: tokens.blue300,
  attrName: tokens.purple300,
  attrValue: tokens.purple300,
  backgroundColor: tokens.gray800,
  color: tokens.gray300,
  comment: tokens.gray600,
  definition: tokens.blue400,
  deleted: tokens.red700,
  errorBackground: tokens.red200,
  functionVariable: tokens.blue200,
  inactiveText: tokens.gray300,
  inputBackground: tokens.gray800,
  keyword: tokens.purple300,
  operator: tokens.gray800,
  selector: tokens.blue200,
  string: tokens.green300,
  tag: tokens.yellow500,
};

export const themeDark: PrismTheme = {
  plain: {
    color: paletteDark.color,
    backgroundColor: paletteDark.backgroundColor,
  },
  styles: [
    {
      types: ['prolog'],
      style: {
        color: paletteDark.selector,
      },
    },
    {
      types: ['comment'],
      style: {
        color: paletteDark.comment,
      },
    },
    {
      types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
      style: {
        color: paletteDark.keyword,
      },
    },
    {
      types: ['number', 'inserted'],
      style: {
        color: paletteDark.attrValue,
      },
    },
    {
      types: ['constant'],
      style: {
        color: paletteDark.color,
      },
    },
    {
      types: ['variable'],
      style: {
        color: paletteDark.tag,
        fontStyle: 'italic',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: paletteDark.attrName,
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'attr-value', 'template-punctuation'],
      style: {
        color: paletteDark.string,
      },
    },
    {
      types: ['deleted'],
      style: {
        color: paletteDark.deleted,
      },
    },
    {
      types: ['selector'],
      style: {
        color: paletteDark.selector,
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: paletteDark.color,
      },
    },
    {
      types: ['function'],
      style: {
        color: paletteDark.definition,
      },
    },
    {
      types: ['class-name'],
      style: {
        color: paletteDark.tag,
      },
    },
  ],
};
