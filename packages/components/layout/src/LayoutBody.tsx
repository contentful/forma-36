import React, { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { cx } from 'emotion';
import { type CommonProps, Box, Flex } from '@contentful/f36-core';
import { getLayoutBodyStyles } from './LayoutBody.styles';
import { useLayoutContext } from './LayoutContext';

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
  const { variant } = useLayoutContext();
  const styles = getLayoutBodyStyles(variant);

  return (
    <Flex className={styles.root} justifyContent="center">
      <Box
        {...otherProps}
        as="div"
        ref={ref}
        className={cx(styles.mainContainer, className)}
        testId={testId}
      >
        {children}
      </Box>
    </Flex>
  );
};

export const LayoutBody = forwardRef(_LayoutBody);
