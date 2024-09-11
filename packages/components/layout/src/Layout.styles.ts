import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import type { LayoutProps } from './Layout';
import type { LayoutContextType } from './LayoutContext';
import { HEADER_HEIGHT } from '@contentful/f36-header';
import { NAVBAR_HEIGHT } from '@contentful/f36-navbar-alpha';

export const SIDEBAR_WIDTH = '340px';

const getMainOffset = (withHeader: boolean) =>
  withHeader ? HEADER_HEIGHT + NAVBAR_HEIGHT + 'px' : NAVBAR_HEIGHT + 'px';

export const getLayoutMaxWidthStyles = ({
  variant,
  withBoxShadow,
}: {
  variant: LayoutProps['variant'];
  withBoxShadow?: boolean;
}) => {
  if (variant === 'fullscreen') {
    return css({
      maxWidth: '100%',
    });
  }

  return css({
    maxWidth: '1920px',
    boxShadow: withBoxShadow
      ? '0px 6px 16px -2px rgba(25, 37, 50, 0.1), 0px 3px 6px -3px rgba(25, 37, 50, 0.15)'
      : 'unset',
    borderRadius: '10px 10px 0 0',
    margin: '0 auto',
  });
};

const getContentContainerGridTemplateColumns = ({
  variant,
  withLeftSidebar,
  withRightSidebar,
}: {
  variant: LayoutContextType['variant'];
  withLeftSidebar?: boolean;
  withRightSidebar?: boolean;
}) => {
  let gridTemplateColumns = 'auto';

  if (withLeftSidebar) {
    gridTemplateColumns = `${SIDEBAR_WIDTH} auto`;
  }

  if (withRightSidebar) {
    gridTemplateColumns = `auto ${SIDEBAR_WIDTH}`;
  }

  if (variant !== 'narrow' && withLeftSidebar && withRightSidebar) {
    gridTemplateColumns = `${SIDEBAR_WIDTH} auto ${SIDEBAR_WIDTH}`;
  }

  return css({
    gridTemplateColumns: gridTemplateColumns,
  });
};

export const getLayoutStyles = ({
  variant,
  withBoxShadow,
  withLeftSidebar,
  withRightSidebar,
}: {
  variant: LayoutProps['variant'];
  withBoxShadow?: boolean;
  withLeftSidebar?: boolean;
  withRightSidebar?: boolean;
}) => ({
  layoutMainContainer: css(
    getLayoutMaxWidthStyles({ variant, withBoxShadow }),
    {
      width: '100%',
      backgroundColor: tokens.colorWhite,
      minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
    },
  ),
  layoutContentContainer: css(
    getContentContainerGridTemplateColumns({
      variant,
      withLeftSidebar,
      withRightSidebar,
    }),
    {
      width: '100%',
      display: 'grid',
    },
  ),
});

export const getLayoutBodyStyles = (withHeader: boolean) => ({
  layoutBodyContainer: css({
    width: '100%',
    padding: `${tokens.spacingL} ${tokens.spacingL} 0`,
    overflowY: 'auto',
    height: `calc(100vh - ${getMainOffset(withHeader)})`,
  }),
  layoutBodyInner: css({
    maxWidth: '900px',
    margin: '0 auto',
  }),
});

export const getLayoutSidebarStyles = (withHeader: boolean) => ({
  layoutSidebar: css({
    padding: `${tokens.spacingL} ${tokens.spacingS} 0`,
    width: SIDEBAR_WIDTH,
    overflowY: 'auto',
    height: `calc(100vh - ${getMainOffset(withHeader)})`,
    '&:first-child': {
      borderRight: `1px solid ${tokens.gray200}`,
    },
    '&:last-child': {
      borderLeft: `1px solid ${tokens.gray200}`,
    },
  }),
});

export const getLayoutHeaderStyles = (
  variant: LayoutContextType['variant'],
) => ({
  layoutHeader: css({
    borderBottom: `1px solid ${tokens.gray200}`,
    padding: `0 ${tokens.spacingL}`,
    width: '100%',
    maxWidth: variant === 'fullscreen' ? '100%' : '1920px',
  }),
  layoutHeaderInner: css({ width: '100%' }),
});
