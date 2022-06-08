import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { GetStyleArguments } from './types';
import type { CSSObject } from '@emotion/serialize';

const getGroupContentStyle = ({ withDivider }: GetStyleArguments) => {
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
      left: '0',
      position: 'absolute',
    },
    '&:first-child, &:focus': {
      '&:before': {
        display: 'none',
      },
    },
    '&:hover, &:hover + &': {
      '&:before': {
        display: 'none',
      },
    },
  };
};

export default ({ withDivider }: GetStyleArguments) => ({
  buttonGroup: css({
    display: 'inline-flex',
    position: 'relative',
  }),
  groupContent: css(getGroupContentStyle({ withDivider })),
});
