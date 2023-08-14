import React, { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { cx } from 'emotion';
import { type CommonProps, Box } from '@contentful/f36-core';
import { getLayoutBodyStyles } from './LayoutBody.styles';

export type LayoutBodyProps = {
  children: React.ReactNode;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

const _LayoutBody = (props: LayoutBodyProps, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    className,
    testId = 'cf-layout-body',
    ...otherProps
  } = props;
  const styles = getLayoutBodyStyles();

  return (
    <Box
      {...otherProps}
      as="div"
      ref={ref}
      className={cx(styles.root, className)}
      testId={testId}
    >
      {children}
    </Box>
  );
};

export const LayoutBody = forwardRef(_LayoutBody);
