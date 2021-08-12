import React from 'react';

import type { PrimitiveProps } from '@contentful/f36-core';
import { Flex } from '@contentful/f36-core';
import { ButtonGroup } from '@contentful/f36-button';

export interface ModalControlsProps extends PrimitiveProps<'div'> {
  as?: 'div';
  children: React.ReactElement[] | React.ReactElement;
}

export function ModalControls({
  testId = 'cf-ui-modal-controls',
  className,
  children,
  ...otherProps
}: ModalControlsProps): React.ReactElement {
  return (
    <Flex
      {...otherProps}
      className={className}
      testId={testId}
      flexDirection="row"
      justifyContent="flex-end"
      margin="spacingL"
      marginTop="none"
    >
      <ButtonGroup variant="spaced" spacing="spacingXs">
        {children}
      </ButtonGroup>
    </Flex>
  );
}
