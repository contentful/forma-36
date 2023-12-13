import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { BaseCheckboxInternalProps } from './types';

const sizeToStyle = (size) => {
  if (size === 'small') {
    return {
      height: tokens.spacingM,
      width: tokens.spacingXl,
    };
  }

  return {
    height: '20px',
    width: '40px',
  };
};

const getSupplementalTextStyle = ({
  size,
  type,
  isValidationMessage = false,
}) => {
  let inputWidth = tokens.spacingM;
  if (type === 'switch') {
    inputWidth = sizeToStyle(size).width;
  }

  return {
    marginLeft: `calc(${inputWidth} + ${tokens.spacingXs})`,
    marginTop: isValidationMessage ? tokens.spacing2Xs : 0,
  };
};

const getStyles = ({
  isDisabled,
  type,
  size,
}: Pick<BaseCheckboxInternalProps, 'isDisabled' | 'type' | 'size'>) => ({
  wrapper: css({
    alignItems: 'center',
    display: 'inline-flex',
    position: 'relative',
    margin: '0',
    columnGap: tokens.spacingXs,
  }),
  input: css([
    {
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      height: tokens.spacingM,
      margin: 0,
      opacity: 0,
      position: 'absolute',
      width: tokens.spacingM,
      zIndex: tokens.zIndexDefault,
      '+ span': {
        minWidth: tokens.spacingM,
      },
      '&:focus': {
        outline: 'none',
        '& + span': {
          boxShadow: tokens.glowPrimary,
        },
      },
      '&:focus:not(:focus-visible) + span': {
        boxShadow: 'unset',
      },
      '&:focus-visible + span': {
        boxShadow: tokens.glowPrimary,
      },
    },
    type === 'switch' && sizeToStyle(size),
  ]),
  helpText: css(getSupplementalTextStyle({ size, type })),
  inlineValidationMessage: css(
    getSupplementalTextStyle({ size, type, isValidationMessage: true }),
  ),
});

export default getStyles;
