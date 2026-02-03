import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getBreadcrumbStyles = () => ({
  button: css({
    color: tokens.gray500,
    fontSize: tokens.fontSizeL,
    fontWeight: tokens.fontWeightNormal,
    maxWidth: 'none',
    paddingLeft: tokens.spacingXs,
    paddingRight: tokens.spacingXs,
  }),
});
