import React, { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { cx } from 'emotion';
import { Flex, type CommonProps } from '@contentful/f36-core';
import { useLayoutContext } from './LayoutContext';
import { getLayoutHeaderStyles } from './LayoutHeader.styles';

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
  const { variant } = useLayoutContext();
  const styles = getLayoutHeaderStyles(variant);

  return (
    <Flex
      {...otherProps}
      as="header"
      ref={ref}
      className={cx(styles.root, className)}
      testId={testId}
    >
      <div className={styles.maxWidthContainer}>{children}</div>
    </Flex>
  );
};

export const LayoutHeader = forwardRef(_LayoutHeader);
