import f36Tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export const tokens = {
  black: {
    'color-black': f36Tokens.colorBlack,
  },
  blue: {
    'blue-100': f36Tokens.blue100,
    'blue-200': f36Tokens.blue200,
    'blue-300': f36Tokens.blue300,
    'blue-400': f36Tokens.blue400,
    'blue-500': f36Tokens.blue500,
    'blue-600': f36Tokens.blue600,
    'blue-700': f36Tokens.blue700,
    'blue-800': f36Tokens.blue800,
    'blue-900': f36Tokens.blue900,
    'color-blue-lightest': f36Tokens.colorBlueLightest,
    'color-blue-light': f36Tokens.colorBlueLight,
    'color-blue-mid': f36Tokens.colorBlueMid,
    'color-blue-base': f36Tokens.colorBlueBase,
    'color-blue-dark': f36Tokens.colorBlueDark,
  },
  gray: {
    'gray-100': f36Tokens.gray100,
    'gray-200': f36Tokens.gray200,
    'gray-300': f36Tokens.gray300,
    'gray-400': f36Tokens.gray400,
    'gray-500': f36Tokens.gray500,
    'gray-600': f36Tokens.gray600,
    'gray-700': f36Tokens.gray700,
    'gray-800': f36Tokens.gray800,
    'gray-900': f36Tokens.gray900,
    'color-element-darkest': f36Tokens.colorElementDarkest,
    'color-element-dark': f36Tokens.colorElementDark,
    'color-element-mid': f36Tokens.colorElementMid,
    'color-element-light': f36Tokens.colorElementLight,
    'color-element-lightest': f36Tokens.colorElementLightest,
  },
  green: {
    'green-100': f36Tokens.green100,
    'green-200': f36Tokens.green200,
    'green-300': f36Tokens.green300,
    'green-400': f36Tokens.green400,
    'green-500': f36Tokens.green500,
    'green-600': f36Tokens.green600,
    'green-700': f36Tokens.green700,
    'green-800': f36Tokens.green800,
    'green-900': f36Tokens.green900,
    'color-green-dark': f36Tokens.colorGreenDark,
    'color-green-base': f36Tokens.colorGreenBase,
    'color-green-mid': f36Tokens.colorGreenMid,
    'color-green-light': f36Tokens.colorGreenLight,
    'color-green-lightest': f36Tokens.colorGreenLightest,
  },
  orange: {
    'orange-100': f36Tokens.orange100,
    'orange-200': f36Tokens.orange200,
    'orange-300': f36Tokens.orange300,
    'orange-400': f36Tokens.orange400,
    'orange-500': f36Tokens.orange500,
    'orange-600': f36Tokens.orange600,
    'orange-700': f36Tokens.orange700,
    'orange-800': f36Tokens.orange800,
    'orange-900': f36Tokens.orange900,
    'color-orange-dark': f36Tokens.colorOrangeDark,
    'color-orange-base': f36Tokens.colorOrangeBase,
    'color-orange-mid': f36Tokens.colorOrangeMid,
    'color-orange-light': f36Tokens.colorOrangeLight,
    'color-orange-lightest': f36Tokens.colorOrangeLightest,
  },
  purple: {
    'purple-100': f36Tokens.purple100,
    'purple-200': f36Tokens.purple200,
    'purple-300': f36Tokens.purple300,
    'purple-400': f36Tokens.purple400,
    'purple-500': f36Tokens.purple500,
    'purple-600': f36Tokens.purple600,
    'purple-700': f36Tokens.purple700,
    'purple-800': f36Tokens.purple800,
    'purple-900': f36Tokens.purple900,
    'color-purple-dark': f36Tokens.colorPurpleDark,
    'color-purple-base': f36Tokens.colorPurpleBase,
    'color-purple-mid': f36Tokens.colorPurpleMid,
    'color-purple-light': f36Tokens.colorPurpleLight,
    'color-purple-lightest': f36Tokens.colorPurpleLightest,
  },
  red: {
    'red-100': f36Tokens.red100,
    'red-200': f36Tokens.red200,
    'red-300': f36Tokens.red300,
    'red-400': f36Tokens.red400,
    'red-500': f36Tokens.red500,
    'red-600': f36Tokens.red600,
    'red-700': f36Tokens.red700,
    'red-800': f36Tokens.red800,
    'red-900': f36Tokens.red900,
    'color-red-dark': f36Tokens.colorRedDark,
    'color-red-base': f36Tokens.colorRedBase,
    'color-red-mid': f36Tokens.colorRedMid,
    'color-red-light': f36Tokens.colorRedLight,
    'color-red-lightest': f36Tokens.colorRedLightest,
  },
  semantic: {
    'color-primary': f36Tokens.colorPrimary,
    'color-positive': f36Tokens.colorPositive,
    'color-negative': f36Tokens.colorNegative,
    'color-warning': f36Tokens.colorWarning,
    'color-text-dark': f36Tokens.colorTextDark,
    'color-text-base': f36Tokens.colorTextBase,
    'color-text-mid': f36Tokens.colorTextMid,
    'color-text-light': f36Tokens.colorTextLight,
    'color-text-lightest': f36Tokens.colorTextLightest,
  },
  white: {
    'color-white': f36Tokens.colorWhite,
  },
  yellow: {
    'yellow-100': f36Tokens.yellow100,
    'yellow-200': f36Tokens.yellow200,
    'yellow-300': f36Tokens.yellow300,
    'yellow-400': f36Tokens.yellow400,
    'yellow-500': f36Tokens.yellow500,
    'yellow-600': f36Tokens.yellow600,
    'yellow-700': f36Tokens.yellow700,
    'yellow-800': f36Tokens.yellow800,
    'yellow-900': f36Tokens.yellow900,
    'color-yellow-dark': f36Tokens.colorYellowDark,
    'color-yellow-base': f36Tokens.colorYellowBase,
    'color-yellow-mid': f36Tokens.colorYellowMid,
    'color-yellow-light': f36Tokens.colorYellowLight,
    'color-yellow-lightest': f36Tokens.colorYellowLightest,
  },
};

const colorTokenToSvgFilter = {
  white:
    'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(345deg) brightness(102%) contrast(103%)',
  blue600:
    'brightness(0) saturate(100%) invert(30%) sepia(88%) saturate(7488%) hue-rotate(205deg) brightness(91%) contrast(101%)',
  blue700:
    'brightness(0) saturate(100%) invert(15%) sepia(98%) saturate(2531%) hue-rotate(211deg) brightness(96%) contrast(104%)',
  gray600:
    'brightness(0) saturate(100%) invert(37%) sepia(25%) saturate(427%) hue-rotate(182deg) brightness(96%) contrast(87%)',
  gray700:
    'brightness(0) saturate(100%) invert(25%) sepia(9%) saturate(1954%) hue-rotate(181deg) brightness(98%) contrast(80%)',
  gray900:
    'brightness(0) saturate(100%) invert(9%) sepia(5%) saturate(6679%) hue-rotate(180deg) brightness(90%) contrast(95%)',
};

export const svgStyles = {
  white: css({
    img: {
      filter: colorTokenToSvgFilter.white,
    },
  }),
  blue600: css({
    img: {
      filter: colorTokenToSvgFilter.blue600,
    },
    '&:hover': {
      img: {
        filter: colorTokenToSvgFilter.blue700,
      },
    },
  }),
  gray600: css({
    img: {
      filter: colorTokenToSvgFilter.gray600,
    },
    '&:hover': {
      img: {
        filter: colorTokenToSvgFilter.gray700,
      },
    },
  }),
  gray900: css({
    img: {
      filter: colorTokenToSvgFilter.gray900,
    },
  }),
};
