import React from 'react';
import { cx } from 'emotion';
import { Close } from '@contentful/f36-icons';
import { Flex } from '@contentful/f36-core';
import type { PrimitiveProps } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { Heading } from '@contentful/f36-typography';

import { getModalHeaderStyles } from './ModalHeader.styles';

export interface ModalHeaderProps extends PrimitiveProps<'div'> {
  title: string;
  onClose?: Function;
  as?: 'div';
}

export function ModalHeader({
  onClose,
  title,
  testId = 'cf-ui-modal-header',
  className,
  ...otherProps
}: ModalHeaderProps): React.ReactElement {
  const styles = getModalHeaderStyles();

  return (
    <Flex
      {...otherProps}
      className={cx(styles.root, className)}
      testId={testId}
      alignItems="center"
      flexShrink={0}
    >
      <Heading as="h1" isTruncated>
        {title}
      </Heading>
      {onClose && (
        <Button variant="transparent" onClick={onClose}>
          <Close size="small" />
        </Button>
      )}
    </Flex>
  );
}
