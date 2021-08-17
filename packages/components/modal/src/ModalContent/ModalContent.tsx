import React from 'react';
import { cx } from 'emotion';
import type { PrimitiveProps } from '@contentful/f36-core';
import { Box } from '@contentful/f36-core';
import { getModalContentStyles } from './ModalContent.styles';

export interface ModalContentProps extends PrimitiveProps<'div'> {
  children: React.ReactNode;
  as?: 'div';
}

export function ModalContent({
  testId = 'cf-ui-modal-content',
  className,
  children,
  ...otherProps
}: ModalContentProps) {
  const styles = getModalContentStyles();
  return (
    <Box
      {...otherProps}
      as="div"
      className={cx(styles.root, className)}
      testId={testId}
    >
      {children}
    </Box>
  );
}
