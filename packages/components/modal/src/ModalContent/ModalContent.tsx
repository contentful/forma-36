import React from 'react';
import { cx } from 'emotion';
import type { PropsWithHTMLElement, CommonProps } from '@contentful/f36-core';
import { Box } from '@contentful/f36-core';
import { getModalContentStyles } from './ModalContent.styles';

interface ModalContentInternalProps extends CommonProps {
  children: React.ReactNode;
}

export type ModalContentProps = PropsWithHTMLElement<
  ModalContentInternalProps,
  'div'
>;

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

ModalContent.displayName = 'ModalContent';
