import React from 'react';

import type { PropsWithHTMLElement, CommonProps } from '@contentful/f36-core';
import { Flex } from '@contentful/f36-core';
import { ButtonGroup } from '@contentful/f36-button';

interface ModalControlsInternalProps extends CommonProps {
  children: React.ReactElement[] | React.ReactElement;
}

export type ModalControlsProps = PropsWithHTMLElement<
  ModalControlsInternalProps,
  'div'
>;

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
      <ButtonGroup variant="spaced" spacing="spacingS">
        {children}
      </ButtonGroup>
    </Flex>
  );
}

ModalControls.displayName = 'ModalControls';
