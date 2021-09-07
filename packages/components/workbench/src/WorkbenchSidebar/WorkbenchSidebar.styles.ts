import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getWorkbenchSidebarStyles = (position = 'left') => {
  const borderStyleKey = position === 'left' ? 'borderRight' : 'borderLeft';

  return {
    workbenchSidebar: css({
      backgroundColor: tokens.gray100,
      [borderStyleKey]: `1px solid ${tokens.gray200}`,
      width: '280px',
      padding: tokens.spacingL,
      overflowY: 'auto',
      overflowX: 'hidden',
    }),
  };
};
