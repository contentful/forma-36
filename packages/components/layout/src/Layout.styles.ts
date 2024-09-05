import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import type { LayoutProps } from './Layout';
import type { LayoutContextType } from './LayoutContext';

export const NAVBAR_HEIGHT = 60;
export const HEADER_HEIGHT = 56;

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

  const sidebarWidth = '340px';
  if (withLeftSidebar) {
    gridTemplateColumns = `${sidebarWidth} auto`;
  }

  if (withRightSidebar) {
    gridTemplateColumns = `auto ${sidebarWidth}`;
  }

  if (variant !== 'narrow' && withLeftSidebar && withRightSidebar) {
    gridTemplateColumns = 'auto auto auto';
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
  // this container will scroll if the content is too long and there is no sidebar
  layoutWrapper: css({
    width: '100%',
    height: '100vh',
    overflowY: 'auto',
  }),
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

export const getLayoutBodyStyles = (
  variant: LayoutContextType['variant'],
  withSidebars: boolean,
  withHeader: boolean,
) => ({
  layoutBodyContainer: css(
    {
      maxWidth: variant === 'narrow' ? '900px' : '100%',
      width: '100%',
      padding: `${tokens.spacingL} ${tokens.spacingL} 0`,
      margin: '0 auto',
    },
    withSidebars && {
      overflowY: 'auto',
      height: `calc(100vh - ${getMainOffset(withHeader)})`,
    },
  ),
});

export const getLayoutSidebarStyles = (withHeader: boolean) => ({
  layoutSidebar: css({
    flexShrink: 0,
    padding: `${tokens.spacingL} ${tokens.spacingS} 0`,
    width: '340px',
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
