import { create } from 'storybook/theming';
import tokens from '@contentful/f36-tokens';

export default create({
  base: 'light',

  // Branding information
  brandTitle: 'Forma 36',
  brandUrl: '/',
  brandImage: './forma-logo.png',

  // Color palette
  colorPrimary: tokens.colorPrimary,

  // UI
  appBg: tokens.gray100,
  appContentBg: tokens.colorWhite,
  appBorderColor: tokens.gray200,
  appBorderRadius: 4,

  // Fonts
  fontBase: tokens.fontStackPrimary,
  fontCode: tokens.fontStackMonospace,

  // Text colors
  textColor: tokens.colorTextDark,
  textInverseColor: tokens.colorWhite,

  // Toolbar default and active colors
  barTextColor: tokens.gray500,
  barSelectedColor: tokens.colorPrimary,
  barBg: tokens.colorWhite,
  // Form colors
  inputBg: tokens.colorWhite,
  inputBorder: tokens.gray300,
  inputTextColor: tokens.gray900,
  inputBorderRadius: 2,
});
