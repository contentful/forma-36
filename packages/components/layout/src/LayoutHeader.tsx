import React, { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { cx } from 'emotion';
import { Flex, type CommonProps } from '@contentful/f36-core';
import { useLayoutContext } from './LayoutContext';
import { getLayoutHeaderStyles } from './Layout.styles';

export type LayoutHeaderProps = {
  children: React.ReactNode;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

const _LayoutHeader = (props: LayoutHeaderProps, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    className,
    testId = 'cf-layout-header',
    ...otherProps
  } = props;
  const { variant, withLeftSidebar, withRightSidebar } = useLayoutContext();
  const styles = getLayoutHeaderStyles({
    variant,
    withLeftSidebar,
    withRightSidebar,
  });

  return (
    <Flex
      {...otherProps}
      as="header"
      ref={ref}
      className={cx(styles.layoutHeader, className)}
      testId={testId}
      alignItems="center"
      justifyContent="center"
    >
      <div className={styles.layoutHeaderInner}>{children}</div>
    </Flex>
  );
};

export const LayoutHeader = forwardRef(_LayoutHeader);
