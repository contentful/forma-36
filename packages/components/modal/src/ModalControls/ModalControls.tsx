import React from 'react';

import {
  Flex,
  type PropsWithHTMLElement,
  type CommonProps,
} from '@contentful/f36-core';
import { ButtonGroup } from '@contentful/f36-button';
import { getModalControlStyles } from './ModalControls.styles';
import { cx } from '@emotion/css';
import type * as CSS from 'csstype';

interface ModalControlsInternalProps extends CommonProps {
  children: React.ReactElement[] | React.ReactElement;
  justifyContent?: CSS.Property.JustifyContent;
}

export type ModalControlsProps = PropsWithHTMLElement<
  ModalControlsInternalProps,
  'div'
>;

export const ModalControls = ({
  testId = 'cf-ui-modal-controls',
  className,
  children,
  justifyContent = 'flex-end',
  ...otherProps
}: ModalControlsProps): React.ReactElement => {
  const styles = getModalControlStyles();

  return (
    <Flex
      {...otherProps}
      className={cx(styles.root, className)}
      testId={testId}
      flexDirection="row"
      justifyContent={justifyContent}
    >
      <ButtonGroup variant="spaced" spacing="spacingS">
        {children}
      </ButtonGroup>
    </Flex>
  );
};

ModalControls.displayName = 'ModalControls';
