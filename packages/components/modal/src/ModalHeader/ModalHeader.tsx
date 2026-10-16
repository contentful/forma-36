import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import { cx } from '@emotion/css';
import { XIcon } from '@contentful/f36-icons';
import {
  Flex,
  useId,
  type PropsWithHTMLElement,
  type CommonProps,
} from '@contentful/f36-core';
import { IconButton } from '@contentful/f36-button';
import { Text, Subheading } from '@contentful/f36-typography';

import { getModalHeaderStyles } from './ModalHeader.styles';

interface ModalHeaderInternalProps extends CommonProps {
  title: string;
  subtitle?: string;
  setTitleId?: (titleId: string) => void;
  setSubtitleId?: (subtitleId: string) => void;
  onClose?: ReactModal.Props['onRequestClose'];
  children?: React.ReactNode;
  aria?: {
    closeIconLabel?: string;
  };
}

export type ModalHeaderProps = PropsWithHTMLElement<
  ModalHeaderInternalProps,
  'div'
>;

export const ModalHeader = ({
  onClose,
  title,
  subtitle,
  setTitleId,
  setSubtitleId,
  testId = 'cf-ui-modal-header',
  className,
  children,
  aria = {
    closeIconLabel: 'Close',
  },
  ...otherProps
}: ModalHeaderProps): React.ReactElement => {
  const styles = getModalHeaderStyles();
  const titleId = useId(undefined, 'title');
  const subtitleId = useId(undefined, 'subtitle');

  useEffect(() => {
    setTitleId?.(titleId);
    return () => {
      setTitleId?.(undefined);
    };
  }, [titleId, setTitleId]);

  useEffect(() => {
    setSubtitleId?.(subtitle && subtitleId);
    return () => {
      setSubtitleId?.(undefined);
    };
  }, [subtitle, subtitleId, setSubtitleId]);

  return (
    <Flex
      {...otherProps}
      className={cx(styles.root, className)}
      testId={testId}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text as="hgroup" isTruncated>
        <Subheading
          as="h2"
          marginBottom="none"
          id={titleId}
          className={styles.title}
        >
          {title}
        </Subheading>
        {subtitle && (
          <Text
            marginLeft="spacingXs"
            fontColor="gray700"
            as="p"
            id={subtitleId}
            className={styles.title}
          >
            {subtitle}
          </Text>
        )}
      </Text>
      {children}
      {onClose && (
        <Flex alignItems="center" className={styles.buttonContainer}>
          <IconButton
            variant="transparent"
            aria-label={aria.closeIconLabel}
            size="small"
            icon={<XIcon size="small" />}
            onClick={onClose}
          />
        </Flex>
      )}
    </Flex>
  );
};

ModalHeader.displayName = 'ModalHeader';
