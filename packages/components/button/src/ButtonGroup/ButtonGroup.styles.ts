import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { GetStyleArguments } from './types';
import { CSSObject } from '@storybook/theming';

const getGroupContentStyle = ({
  variant,
  withDivider,
  spacing,
}: GetStyleArguments) => {
  if (variant === 'separate') {
    return {
      marginLeft: tokens[spacing],
      marginRight: tokens[spacing],
      '&:first-child': {
        marginLeft: 0,
      },
      '&:last-child': {
        marginRight: 0,
      },
    };
  }

  const dividerStyle = getDividerStyle(withDivider);

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
    ...dividerStyle,
  };
};

const getDividerStyle = (withDivider: boolean): CSSObject => {
  if (!withDivider) return {};
  return {
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
  };
};

export default ({
  variant,
  withDivider,
  spacing = 'spacingS',
}: GetStyleArguments) => ({
  buttonGroup: css({
    display: 'inline-flex',
  }),
  groupContent: css(getGroupContentStyle({ variant, withDivider, spacing })),
});
