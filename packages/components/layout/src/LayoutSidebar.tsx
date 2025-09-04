import React, { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { cx } from '@emotion/css';
import { type CommonProps, Box } from '@contentful/f36-core';
import { getLayoutSidebarStyles } from './Layout.styles';
import { useLayoutContext } from './LayoutContext';

export type LayoutSidebarProps = {
  children: React.ReactNode;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

export const _LayoutSidebar = (
  props: LayoutSidebarProps,
  ref: Ref<HTMLDivElement>,
) => {
  const {
    children,
    className,
    testId = 'cf-layout-sidebar',
    ...otherProps
  } = props;
  const { withHeader, offsetTop } = useLayoutContext();
  const styles = getLayoutSidebarStyles(withHeader, offsetTop);

  return (
    <Box
      {...otherProps}
      as="aside"
      ref={ref}
      className={cx(styles.layoutSidebar, className)}
      testId={testId}
    >
      {children}
    </Box>
  );
};

export const LayoutSidebar = forwardRef(_LayoutSidebar);
