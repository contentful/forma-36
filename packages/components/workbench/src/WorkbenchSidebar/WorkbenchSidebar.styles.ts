import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getWorkbenchSidebarStyles = (position = 'left') => {
  const borderStyleKey = position === 'left' ? 'borderRight' : 'borderLeft';
  const width = position === 'left' ? '280px' : '360px';

  return {
    workbenchSidebar: css({
      position: 'relative',
      backgroundColor: tokens.gray100,
      [borderStyleKey]: `1px solid ${tokens.gray200}`,
      width,
      padding: tokens.spacingL,
      overflowY: 'auto',
      overflowX: 'hidden',
    }),
  };
};
