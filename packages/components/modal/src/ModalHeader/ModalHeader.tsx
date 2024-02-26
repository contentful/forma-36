import React from 'react';
import { cx } from 'emotion';
import { CloseIcon } from '@contentful/f36-icons';
import {
  Flex,
  type PropsWithHTMLElement,
  type CommonProps,
} from '@contentful/f36-core';
import { IconButton } from '@contentful/f36-button';
import { Text, Subheading } from '@contentful/f36-typography';

import { getModalHeaderStyles } from './ModalHeader.styles';

interface ModalHeaderInternalProps extends CommonProps {
  title: string;
  subtitle?: string;
  onClose?: Function;
}

export type ModalHeaderProps = PropsWithHTMLElement<
  ModalHeaderInternalProps,
  'div'
>;

export const ModalHeader = ({
  onClose,
  title,
  subtitle,
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
      <Subheading as="h2" isTruncated marginBottom="none">
        {title}
        {subtitle && (
          <Text marginLeft="spacingXs" fontColor="gray700">
            {subtitle}
          </Text>
        )}
      </Subheading>
      {onClose && (
        <Flex alignItems="center" className={styles.buttonContainer}>
          <IconButton
            variant="transparent"
            aria-label="Close"
            size="small"
            icon={<CloseIcon size="small" />}
            onClick={() => {
              onClose();
            }}
          />
        </Flex>
      )}
    </Flex>
  );
};

ModalHeader.displayName = 'ModalHeader';
