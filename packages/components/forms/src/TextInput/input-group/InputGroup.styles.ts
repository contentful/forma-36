import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { GetStyleArguments } from './types';

const getInputGroupStyle = ({ spacing, density }) => {
  if (spacing !== 'none') {
    return css({
      '& button, & input': {
        maxHeight: density === 'high' ? tokens.spacingL : tokens.spacingXl,
      },
    });
  }

  const densityBorderRadius =
    density === 'high' ? tokens.borderRadiusSmall : tokens.borderRadiusMedium;

  return css({
    position: 'relative',

    '& button, & input': {
      borderRadius: '0 !important',
      maxHeight: density === 'high' ? tokens.spacingL : tokens.spacingXl,
    },
    '& > *': {
      marginRight: '-1px !important',
      '&:not(:focus), & button:not(:focus)': {
        boxShadow: 'none !important',
      },
      '&:first-child, &:first-child > input, &:first-child button': {
        borderBottomLeftRadius: `${densityBorderRadius} !important`,
        borderTopLeftRadius: `${densityBorderRadius} !important`,
      },
      '&:last-child, &:last-child > input, &:last-child button': {
        borderBottomRightRadius: `${densityBorderRadius} !important`,
        borderTopRightRadius: `${densityBorderRadius} !important`,
        marginRight: '0 !important',
      },
      '&:focus, &:focus-within': {
        zIndex: tokens.zIndexDefault + 1,
      },
    },
  });
};

export default ({ spacing, density }: GetStyleArguments) => ({
  inputGroup: getInputGroupStyle({ spacing, density }),
});
