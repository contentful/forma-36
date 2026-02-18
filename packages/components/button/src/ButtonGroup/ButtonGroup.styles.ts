import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import type { GetStyleArguments } from './types';

export default ({ withDivider }: GetStyleArguments) => {
  const dividerStyle = getDividerStyle(withDivider);

  return {
    buttonGroup: css({
      display: 'inline-flex',
      position: 'relative',
    }),
    groupContent: css({
      borderRadius: '0 !important',
      '& > *': {
        borderRadius: '0 !important',
      },
      marginRight: '-1px',
      '&:first-child, &:first-child > *': {
        borderBottomLeftRadius: `${tokens.borderRadiusMedium} !important`,
        borderTopLeftRadius: `${tokens.borderRadiusMedium} !important`,
      },
      '&:last-child, &:last-child > *': {
        borderBottomRightRadius: `${tokens.borderRadiusMedium} !important`,
        borderTopRightRadius: `${tokens.borderRadiusMedium} !important`,
        marginRight: 0,
      },
      '&:focus': {
        zIndex: tokens.zIndexDefault,
      },
      ...dividerStyle,
    }),
  };
};

const getDividerStyle = (withDivider: boolean) => {
  if (!withDivider) return {};

  const divider = `1px solid ${hexToRGBA(tokens.colorWhite, 0.2)}`;

  return {
    borderTop: 'none',
    borderBottom: 'none',
    '&:not(:first-child,:focus-visible)': {
      borderLeft: divider,
    },
    '&:not(:last-child,:focus-visible)': {
      borderRight: divider,
    },
  };
};
