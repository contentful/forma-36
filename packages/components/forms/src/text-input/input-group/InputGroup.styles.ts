import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { GetStyleArguments } from './types';

const getInputGroupStyle = ({ spacing }) => {
  if (spacing !== 'none') {
    return {};
  }

  return {
    '& *': {
      borderRadius: '0 !important',
    },
    '& > *': {
      marginRight: '-1px !important',
      zIndex: tokens.zIndexDefault,
      '&:not(: focus)': {
        boxShadow: 'none !important',
      },
      '&:first-child, &:first-child > input': {
        borderBottomLeftRadius: `${tokens.borderRadiusMedium} !important`,
        borderTopLeftRadius: `${tokens.borderRadiusMedium} !important`,
      },
      '&:last-child, &:last-child > input': {
        borderBottomRightRadius: `${tokens.borderRadiusMedium} !important`,
        borderTopRightRadius: `${tokens.borderRadiusMedium} !important`,
        marginRight: '0 !important',
      },
      '&:focus, &:focus-within': {
        zIndex: tokens.zIndexDefault + 1,
      },
    },
  };
};

export default ({ spacing }: GetStyleArguments) => ({
  inputGroup: css(getInputGroupStyle({ spacing })),
});
