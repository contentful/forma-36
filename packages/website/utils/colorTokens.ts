import blackColors from '@contentful/f36-tokens';
import blueColors from '@contentful/f36-tokens';
import grayColors from '@contentful/f36-tokens';
import greenColors from '@contentful/f36-tokens';
import orangeColors from '@contentful/f36-tokens';
import purpleColors from '@contentful/f36-tokens';
import redColors from '@contentful/f36-tokens';
import semanticColors from '@contentful/f36-tokens';
import whiteColors from '@contentful/f36-tokens';
import yellowColors from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export const tokens = {
  black: blackColors,
  blue: blueColors,
  gray: grayColors,
  green: greenColors,
  orange: orangeColors,
  purple: purpleColors,
  red: redColors,
  semantic: semanticColors,
  white: whiteColors,
  yellow: yellowColors,
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
