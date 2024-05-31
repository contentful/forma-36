import React, { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { cx } from 'emotion';
import { type CommonProps, Box } from '@contentful/f36-core';
import { getLayoutSidebarStyles } from './LayoutSidebar.styles';

export type LayoutSidebarProps = {
  children: React.ReactNode;
  variant?: 'narrow' | 'wide';
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

export const _LayoutSidebar = (
  props: LayoutSidebarProps,
  ref: Ref<HTMLDivElement>,
) => {
  const {
    children,
    className,
    variant = 'wide',
    testId = 'cf-layout-sidebar',
    ...otherProps
  } = props;
  const styles = getLayoutSidebarStyles(variant);

  return (
    <Box
      {...otherProps}
      as="aside"
      ref={ref}
      className={cx(styles.root, className)}
      testId={testId}
    >
      {children}
    </Box>
  );
};

export const LayoutSidebar = forwardRef(_LayoutSidebar);
