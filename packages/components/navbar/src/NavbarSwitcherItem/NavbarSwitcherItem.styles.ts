import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { mqs } from '../utils.styles';

const mobileIcon = {
  display: 'none',
  '&:first-child': {
    display: 'block',
  },

  [mqs.medium]: {
    display: 'block',
    '&:first-child': {
      display: 'none',
    },
  },
};

export const getNavbarSwitcherItemStyles = () => ({
  breadcrumbsItem: css({
    fontFamily: tokens.fontStackMonospace,
    fontSize: tokens.fontSizeS,
    color: tokens.gray600,
  }),
  breadcrumbsItemEnvMaster: css({
    color: tokens.green600,
    ' svg': {
      ...mobileIcon,
      fill: tokens.green600,
    },
  }),
  breadcrumbsItemEnvNonMaster: css({
    color: tokens.orange500,
    svg: {
      ...mobileIcon,
      fill: tokens.orange500,
    },
  }),
});
