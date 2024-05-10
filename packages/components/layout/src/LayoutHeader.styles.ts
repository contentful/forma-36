import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { LayoutContextType } from './LayoutContext';
import { getLayoutMaxWidthStyles } from './Layout.styles';

export const getLayoutHeaderStyles = (
  variant: LayoutContextType['variant'],
) => ({
  root: css({
    borderBottom: `1px solid ${tokens.gray200}`,
    width: '100%',
    justifyContent: 'center',
  }),
  maxWidthContainer: getLayoutMaxWidthStyles(variant),
});
