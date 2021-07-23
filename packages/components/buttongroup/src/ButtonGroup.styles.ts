import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { ButtonGroupVariants } from './types';

const getGroupContentStyle = (variant: ButtonGroupVariants) => {
  switch (variant) {
    case 'separate':
      return {
        marginLeft: tokens.spacingS,
        marginRight: tokens.spacingS,
        '&:first-child': {
          marginLeft: 0,
        },
        '&:last-child': {
          marginRight: 0,
        },
      };
  }

  return {
    borderRadius: '0 !important',
    marginRight: '-1px',
    zIndex: tokens.zIndexDefault,
    '&:first-child': {
      borderBottomLeftRadius: `${tokens.borderRadiusMedium} !important`,
      borderTopLeftRadius: `${tokens.borderRadiusMedium} !important`,
    },
    '&:last-child': {
      borderBottomRightRadius: `${tokens.borderRadiusMedium} !important`,
      borderTopRightRadius: `${tokens.borderRadiusMedium} !important`,
      marginRight: 0,
    },
    '&:focus': {
      zIndex: tokens.zIndexDefault + 1,
    },
  };
};

const getDividerStyle = (withDivider: boolean) => {
  if (!withDivider) return {};
  return css({
    position: 'relative',
    '&:before': {
      content: '""',
      width: '1px',
      opacity: '20%',
      backgroundColor: tokens.colorWhite,
      height: '60%',
      left: '-1px',
      position: 'absolute',
    },
    '&:first-child, &:focus': {
      '&:before': {
        display: 'none',
      },
    },
    '&:hover, &:hover + &': {
      '&:before': {
        height: '100%',
      },
    },
  });
};

export default (variant: ButtonGroupVariants, withDivider: boolean) => ({
  buttonGroup: css({
    display: 'inline-flex',
  }),
  withDivider: css(getDividerStyle(withDivider)),
  groupContent: css(getGroupContentStyle(variant)),
});
