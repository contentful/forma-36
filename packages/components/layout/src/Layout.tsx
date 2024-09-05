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
    contentTestId = 'cf-layout-main-container',
    contentClassName,
    ...otherProps
  } = props;

  const styles = getLayoutStyles({ variant, withBoxShadow });

  const contextValue: LayoutContextType = useMemo(
    () => ({
      variant,
      withSidebars: Boolean(leftSidebar || rightSidebar),
      withHeader: Boolean(header),
    }),
    [variant, leftSidebar, rightSidebar, header],
  );

  return (
    <LayoutContextProvider value={contextValue}>
      <Box
        ref={ref}
        testId={testId}
        className={cx(styles.layoutWrapper, className)}
        as="section"
      >
        <Flex
          {...otherProps}
          className={styles.layoutMainContainer}
          flexDirection="column"
          justifyContent="flex-start"
        >
          {header}

          <Flex
            className={cx(styles.layoutContentContainer, contentClassName)}
            testId={contentTestId}
            justifyContent="center"
          >
            {leftSidebar}
            {children}
            {rightSidebar}
          </Flex>
        </Flex>
      </Box>
    </LayoutContextProvider>
  );
};

export const Layout = forwardRef(_Layout);
