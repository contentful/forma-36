import React, {
  forwardRef,
  useMemo,
  type Ref,
  type HTMLAttributes,
} from 'react';
import { cx } from 'emotion';
import { type CommonProps, Box, Flex } from '@contentful/f36-core';
import { LayoutContextProvider, LayoutContextType } from './LayoutContext';
import { getLayoutStyles } from './Layout.styles';

export type LayoutProps = {
  /**
   * The body of the layout.
   */
  children: React.ReactNode;
  header?: React.ReactNode;
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
  /**
   * Defines the width of the layout and its content.
   * @default 'wide'
   */
  variant?: 'narrow' | 'wide' | 'fullscreen';
  withBoxShadow?: boolean;
  /**
   * Classname that will be passed to the main content div,
   * which holds the sidebars and children div
   */
  contentClassName?: string;
  contentTestId?: string;
  /**
   * Offset for layout heights calculation.
   * Set to `0` for layout usage without navbar.
   * @default 60 (= navbar height)
   */
  offsetTop?: number;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

const _Layout = (props: LayoutProps, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    header,
    leftSidebar,
    rightSidebar,
    variant = 'wide',
    withBoxShadow = true,
    className,
    testId = 'cf-ui-layout',
    contentTestId = 'cf-layout-content-container',
    contentClassName,
    offsetTop = 60,
    ...otherProps
  } = props;

  const withLeftSidebar = Boolean(leftSidebar);
  const withRightSidebar = Boolean(rightSidebar);
  const styles = getLayoutStyles({
    offsetTop,
    variant,
    withBoxShadow,
    withLeftSidebar,
    withRightSidebar,
  });

  const contextValue: LayoutContextType = useMemo(
    () => ({
      variant,
      withHeader: Boolean(header),
      offsetTop,
    }),
    [variant, header, offsetTop],
  );

  return (
    <LayoutContextProvider value={contextValue}>
      <Flex
        ref={ref}
        testId={testId}
        as="section"
        {...otherProps}
        className={cx(styles.layoutMainContainer, className)}
        flexDirection="column"
      >
        {header}

        <Box
          className={cx(styles.layoutContentContainer, contentClassName)}
          testId={contentTestId}
        >
          {leftSidebar}
          {children}
          {rightSidebar}
        </Box>
      </Flex>
    </LayoutContextProvider>
  );
};

export const Layout = forwardRef(_Layout);
