import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getBreadcrumbStyles = () => ({
  button: css({
    color: tokens.gray500,
    fontSize: tokens.fontSizeL,
    fontWeight: tokens.fontWeightNormal,
    paddingLeft: tokens.spacingXs,
    paddingRight: tokens.spacingXs,
  }),
});
