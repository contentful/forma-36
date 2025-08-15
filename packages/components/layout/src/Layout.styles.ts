import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import { HEADER_HEIGHT } from '@contentful/f36-header';
import type { LayoutProps, LayoutSidebarVariant } from './Layout';

const SIDEBAR_WIDTHS: Record<LayoutSidebarVariant, `${number}px`> = {
  narrow: '280px',
  wide: '340px',
};

//header + offsetTop + 1px border or offsetTop
const getMainOffset = (withHeader: boolean, offsetTop: number) =>
  withHeader ? HEADER_HEIGHT + 1 + offsetTop + 'px' : offsetTop + 'px';

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
      width: '100%',
    });
  }

  return css({
    maxWidth: '1920px',
    boxShadow: withBoxShadow
      ? '0px 6px 16px -2px rgba(25, 37, 50, 0.1), 0px 3px 6px -3px rgba(25, 37, 50, 0.15)'
      : 'unset',
    borderRadius: '10px 10px 0 0',
    margin: `0 auto`,
    width: `calc(100% - ${tokens.spacingM} * 2)`, // 100% - desired space to the browser border
  });
};

const getContentContainerGridTemplateColumns = ({
  variant,
  withLeftSidebar,
  leftSidebarVariant,
  withRightSidebar,
  rightSidebarVariant,
}: {
  variant: LayoutProps['variant'];
  withLeftSidebar?: boolean;
  leftSidebarVariant?: LayoutSidebarVariant;
  withRightSidebar?: boolean;
  rightSidebarVariant?: LayoutSidebarVariant;
}) => {
  let gridTemplateColumns = 'auto';

  if (withLeftSidebar) {
    gridTemplateColumns = `${SIDEBAR_WIDTHS[leftSidebarVariant]} auto`;
  }

  if (withRightSidebar) {
    gridTemplateColumns = `auto ${SIDEBAR_WIDTHS[rightSidebarVariant]}`;
  }

  if (variant !== 'narrow' && withLeftSidebar && withRightSidebar) {
    gridTemplateColumns = `${SIDEBAR_WIDTHS[leftSidebarVariant]} auto ${SIDEBAR_WIDTHS[rightSidebarVariant]}`;
  }

  return css({
    gridTemplateColumns: gridTemplateColumns,
  });
};

export const getLayoutStyles = ({
  variant,
  withBoxShadow,
  withLeftSidebar,
  leftSidebarVariant,
  withRightSidebar,
  rightSidebarVariant,
  offsetTop,
}: {
  variant: LayoutProps['variant'];
  withBoxShadow?: boolean;
  withLeftSidebar?: boolean;
  leftSidebarVariant?: LayoutSidebarVariant;
  withRightSidebar?: boolean;
  rightSidebarVariant?: LayoutSidebarVariant;
  offsetTop: number;
}) => ({
  layoutMainContainer: css(
    getLayoutMaxWidthStyles({ variant, withBoxShadow }),
    {
      backgroundColor: tokens.colorWhite,
      minHeight: `calc(100vh - ${offsetTop}px)`,
    },
  ),
  layoutContentContainer: css(
    getContentContainerGridTemplateColumns({
      variant,
      withLeftSidebar,
      leftSidebarVariant,
      withRightSidebar,
      rightSidebarVariant,
    }),
    {
      width: '100%',
      display: 'grid',
    },
  ),
});

export const getLayoutBodyStyles = (
  withHeader: boolean,
  offsetTop: number,
) => ({
  layoutBodyContainer: css({
    width: '100%',
    padding: `${tokens.spacingL} ${tokens.spacingL} 0`,
    overflowY: 'auto',
    height: `calc(100vh - ${getMainOffset(withHeader, offsetTop)})`,
  }),
  layoutBodyInner: css({
    maxWidth: '900px',
    margin: '0 auto',
  }),
});

export const getLayoutSidebarStyles = (
  withHeader: boolean,
  offsetTop: number,
) => ({
  layoutSidebar: css({
    padding: `${tokens.spacingL} ${tokens.spacingS} 0`,
    overflowY: 'auto',
    height: `calc(100vh - ${getMainOffset(withHeader, offsetTop)})`,
    '&:first-child': {
      borderRight: `1px solid ${tokens.gray200}`,
    },
    '&:last-child': {
      borderLeft: `1px solid ${tokens.gray200}`,
    },
  }),
});

export const getLayoutHeaderStyles = ({
  variant,
  withLeftSidebar,
  withRightSidebar,
}: {
  variant: LayoutProps['variant'];
  withLeftSidebar?: boolean;
  withRightSidebar?: boolean;
}) => ({
  layoutHeader: css({
    padding: `${tokens.spacing2Xs}  ${tokens.spacingL} 0 ${tokens.spacingL} `,
    width: '100%',
    maxWidth: variant === 'fullscreen' ? '100%' : '1920px',
    borderBottom:
      withLeftSidebar || withRightSidebar
        ? `1px solid ${tokens.gray200}`
        : `none`,
  }),
  layoutHeaderInner: css({ width: '100%' }),
});
