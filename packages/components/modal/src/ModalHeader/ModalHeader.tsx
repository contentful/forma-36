import React from 'react';
import { cx } from 'emotion';
import { CloseIcon } from '@contentful/f36-icons';
import { Flex } from '@contentful/f36-core';
import type { PropsWithHTMLElement, CommonProps } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { Subheading } from '@contentful/f36-typography';

import { getModalHeaderStyles } from './ModalHeader.styles';

interface ModalHeaderInternalProps extends CommonProps {
  title: string;
  onClose?: Function;
}

export type ModalHeaderProps = PropsWithHTMLElement<
  ModalHeaderInternalProps,
  'div'
>;

export const ModalHeader = ({
  onClose,
  title,
  testId = 'cf-ui-modal-header',
  className,
  ...otherProps
}: ModalHeaderProps): React.ReactElement => {
  const styles = getModalHeaderStyles();

  return (
    <Flex
      {...otherProps}
      className={cx(styles.root, className)}
      testId={testId}
      alignItems="center"
      justifyContent="space-between"
    >
      <Subheading as="h1" isTruncated marginBottom="none">
        {title}
      </Subheading>
      {onClose && (
        <Flex alignItems="center" className={styles.buttonContainer}>
          <Button
            variant="transparent"
            aria-label="Close"
            startIcon={<CloseIcon size="small" />}
            onClick={() => {
              onClose();
            }}
            size="small"
          />
        </Flex>
      )}
    </Flex>
  );
};

ModalHeader.displayName = 'ModalHeader';
