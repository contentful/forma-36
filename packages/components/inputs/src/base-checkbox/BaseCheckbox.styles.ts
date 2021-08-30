import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { BaseCheckboxProps } from './types';

const getStyles = ({
  isDisabled,
  type,
}: Pick<BaseCheckboxProps, 'isDisabled' | 'type'>) => ({
  wrapper: css({
    alignItems: 'center',
    display: 'inline-flex',
    position: 'relative',
    margin: '0',
  }),
  input: css({
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    height: tokens.spacingM,
    margin: 0,
    opacity: 0,
    position: 'absolute',
    width: type === 'switch' ? tokens.spacingXl : tokens.spacingM,
    zIndex: tokens.zIndexDefault,
    '&:focus': {
      outline: 'none',
      '& + span': {
        boxShadow: tokens.glowPrimary,
      },
    },
  }),
});

export default getStyles;
