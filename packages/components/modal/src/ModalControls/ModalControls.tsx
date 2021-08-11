import React from 'react';
import { cx } from 'emotion';

import type { PrimitiveProps } from '@contentful/f36-core';
import { Flex } from '@contentful/f36-core';
import { ButtonGroup } from '@contentful/f36-button';

import { getModalControlsStyles } from './ModalControls.styles';

export interface ModalControlsProps extends PrimitiveProps<'div'> {
  as?: 'div';
  children: React.ReactElement[];
}

export function ModalControls({
  testId = 'cf-ui-modal-controls',
  className,
  children,
  ...otherProps
}: ModalControlsProps): React.ReactElement {
  const styles = getModalControlsStyles();
  return (
    <Flex
      {...otherProps}
      className={cx(styles.root, className)}
      testId={testId}
      flexDirection="row"
      justifyContent="flex-end"
    >
      <ButtonGroup variant="spaced">{children}</ButtonGroup>
    </Flex>
  );
}
