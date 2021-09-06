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
      '&:focus': {
        outline: 'none',
        '& + span': {
          boxShadow: tokens.glowPrimary,
        },
      },
    },
    type === 'switch' && sizeToStyle(size),
  ]),
});

export default getStyles;
