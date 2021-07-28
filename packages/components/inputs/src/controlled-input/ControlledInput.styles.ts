import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  container: css({
    position: 'relative',
    textOverflow: 'ellipsis',
    lineHeight: tokens.lineHeightL,
    margin: '0',
    width: tokens.spacingM,
    height: tokens.spacingM,
    minHeight: tokens.spacingM,
    overflow: 'visible',
  }),
  input: css({
    display: 'inline-block',
    fontSize: tokens.fontSizeM,
    opacity: '0',
    position: 'absolute',
    margin: '0',
    width: tokens.spacingM,
    height: tokens.spacingM,
    zIndex: tokens.zIndexDefault,
    cursor: 'pointer',
    '&:focus + label': {
      outline: 'none',
      boxShadow: tokens.glowPrimary,
    },
    '&:checked + label': {
      borderColor: tokens.blue600,
      background: tokens.blue600,
    },
    '&:disabled + label': {
      borderColor: tokens.gray300,
      background: tokens.gray300,
    },
  }),
  inputDisabled: css({
    cursor: 'not-allowed',
  }),
  inputRadioButton: css({
    '&:checked': {
      '& + label::before': {
        background: tokens.colorWhite,
      },
      '&:disabled + label::before': {
        background: tokens.gray600,
      },
    },
    '&:disabled + label::before': {
      background: tokens.gray300,
    },
  }),
  inputCheckbox: css({
    '&:checked, &:indeterminate': {
      '& + label': {
        borderColor: tokens.blue600,
        background: tokens.blue600,
      },
      '&:disabled + label svg': {
        fill: tokens.gray600,
      },
    },
    '&:disabled': {
      '& + label': {
        borderColor: tokens.gray300,
        background: tokens.gray300,
        '& svg': {
          fill: tokens.gray300,
        },
      },
    },
  }),
  ghost: css({
    background: tokens.colorWhite,
    width: tokens.spacingM,
    height: tokens.spacingM,
    border: `2px solid ${tokens.gray300}`,
    fill: tokens.colorWhite,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  }),
  ghostRadioButton: css({
    borderRadius: '50%',
    '&:before': {
      content: '""',
      borderRadius: '50%',
      backgroundColor: tokens.colorWhite,
      width: tokens.borderRadiusMedium,
      height: tokens.borderRadiusMedium,
    },
  }),
  ghostCheckbox: css({
    borderRadius: '20%',
    svg: {
      width: tokens.spacingS,
      minWidth: tokens.spacingS,
      minHeight: tokens.spacingS,
      height: tokens.spacingS,
    },
  }),
};
