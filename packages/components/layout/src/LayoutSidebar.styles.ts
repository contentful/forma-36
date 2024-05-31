import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { LayoutSidebarProps } from './LayoutSidebar';

export const getLayoutSidebarStyles = (
  variant: LayoutSidebarProps['variant'],
) => ({
  root: css({
    flexShrink: 0,
    padding: `${tokens.spacingL} ${tokens.spacingS} 0`,
    width: variant === 'narrow' ? '255px' : '320px',
    '&:first-child': {
      borderRight: `1px solid ${tokens.gray200}`,
    },
    '&:last-child': {
      borderLeft: `1px solid ${tokens.gray200}`,
    },
  }),
});
