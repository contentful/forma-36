import { create } from '@storybook/theming/create';
import tokens from '@contentful/f36-tokens';

import logo from './public/forma-logo.png';

export default create({
  base: 'light',

  // Branding information
  brandTitle: 'Forma 36',
  brandUrl: '/',
  brandImage: logo,

  // Color palette
  colorPrimary: tokens.colorPrimary,

  // UI
  appBg: tokens.colorElementLightest,
  appContentBg: tokens.colorWhite,
  appBorderColor: tokens.colorElementLight,
  appBorderRadius: 4,

  // Fonts
  fontBase: tokens.fontStackPrimary,
  fontCode: tokens.fontStackMonospace,

  // Text colors
  textColor: tokens.colorTextDark,
  textInverseColor: tokens.colorWhite,

  // Toolbar default and active colors
  barTextColor: tokens.colorTextLightest,
  barSelectedColor: tokens.colorPrimary,
  barBg: tokens.colorWhite,
  // Form colors
  inputBg: tokens.colorWhite,
  inputBorder: tokens.colorElementMid,
  inputTextColor: tokens.colorTextDark,
  inputBorderRadius: 2,
});
