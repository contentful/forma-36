import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import { getGlowOnFocusStyles, mqs } from '../utils.styles';

export const getNavbarSwitcherStyles = () => ({
  root: css(
    {
      // default button reset styles
      margin: 0,
      padding: 0,
      background: 'none',
      border: 'none',

      color: tokens.gray300,
      cursor: 'pointer',
      fontSize: tokens.fontSizeS,
      fontWeight: tokens.fontWeightMedium,
      position: 'relative',
      outline: 'none',
      borderRadius: tokens.borderRadiusMedium,

      '&:after': {
        content: '""',
        border: '1px solid #353A41',
        boxSizing: 'border-box',
        height: '16px',
        right: '-1px',
        position: 'absolute',
        width: 0,
      },
      '&:last-child:after': {
        display: 'none',
      },
      '&:hover li': {
        backgroundColor: hexToRGBA(tokens.colorWhite, 0.15),
      },
    },
    getGlowOnFocusStyles(
      `0px 0px 0px 2px ${tokens.colorBlack}, 0px 0px 0px 5px ${tokens.blue300}`,
    ),
  ),
  breadcrumbs: css({
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
  }),
  menuIcon: css({
    display: 'none',
    [mqs.medium]: {
      display: 'block',
    },
  }),
});
