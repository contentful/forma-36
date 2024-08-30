import React, {
  forwardRef,
  useMemo,
  type Ref,
  type HTMLAttributes,
} from 'react';
import { cx } from 'emotion';
import { type CommonProps, Flex } from '@contentful/f36-core';
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
    }),
    [variant],
  );

  return (
    <LayoutContextProvider value={contextValue}>
      <Flex
        ref={ref}
        testId={testId}
        className={cx(styles.root, className)}
        as="section"
        justifyContent="center"
      >
        <Flex
          {...otherProps}
          className={styles.mainContainer}
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          {header}

          <Flex
            className={cx(styles.contentContainer, contentClassName)}
            flexGrow={1}
            testId={contentTestId}
          >
            {leftSidebar}
            {children}
            {rightSidebar}
          </Flex>
        </Flex>
      </Flex>
    </LayoutContextProvider>
  );
};

export const Layout = forwardRef(_Layout);
