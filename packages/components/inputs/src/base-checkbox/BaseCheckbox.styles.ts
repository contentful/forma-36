import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { BaseCheckboxProps } from './BaseCheckbox';

const getStyles = ({
  isDisabled,
  type,
}: Pick<BaseCheckboxProps, 'isDisabled' | 'type'>) => ({
  wrapper: css({
    display: 'inline-flex',
    position: 'relative',
    margin: '0',
  }),
  input: css({
    cursor: !isDisabled ? 'pointer' : 'initial',
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
  label: css({
    color: tokens.gray900,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
  }),
});

export default getStyles;
