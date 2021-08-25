import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => ({
  textInput: css({
    display: 'flex',
  }),
  input: css({
    outline: 'none',
    boxShadow: tokens.boxShadowDefault,
    backgroundColor: tokens.colorWhite,
    border: `1px solid ${tokens.gray500}`,
    borderRadius: tokens.borderRadiusMedium,
    maxHeight: `calc(1rem * (40 / var(--font-base-default)))`,
    color: tokens.gray800,
    fontFamily: tokens.fontStackPrimary,
    fontSize: tokens.fontSizeM,
    padding: `calc(1rem * (10.5 / ${tokens.fontBaseDefault}))`,
    margin: 0,
  }),
  label: css({
    fontWeight: tokens.fontWeightMedium,
    marginBottom: 0,
  }),
});
