import React from 'react';
import { cx } from 'emotion';
import { Button } from '@contentful/f36-button';
import { TextLink } from '@contentful/f36-text-link';
import {
  Flex,
  Box,
  type ExpandProps,
  type CommonProps,
} from '@contentful/f36-core';
import { Heading, Paragraph } from '@contentful/f36-typography';

import type { NotificationVariant, NotificationCta } from '../types';
import { getStyles } from './NotificationItem.styles';

import {
  CheckCircleIcon,
  XIcon,
  WarningOctagonIcon,
  InfoIcon,
  WarningIcon,
} from '@contentful/f36-icons-alpha';

import tokens from '@contentful/f36-tokens';

export interface NotificationItemProps extends CommonProps {
  /**
   * Defines the styling of notification
   * @default positive
   */
  variant?: NotificationVariant;
  /**
   * Defines if the close button should be rendered
   * @default true
   */
  withCloseButton?: boolean;
  /**
   * Aria label for close button
   * @default 'Dismiss'
   */
  closeButtonAriaLabel?: string;
  /**
   * Function that will be triggered when close button is clicked
   */
  onClose?: Function;
  /**
   * Title of the notification
   */
  title?: string;
  /**
   * Content of the notification
   */
  children: React.ReactNode;
  /**
   * Label and text-link props of the CTA
   */
  cta?: Partial<NotificationCta>;
}

const _NotificationItem = (props: ExpandProps<NotificationItemProps>, ref) => {
  const {
    className,
    children,
    cta,
    withCloseButton = true,
    closeButtonAriaLabel = 'Dismiss',
    variant = 'positive',
    onClose,
    testId = 'cf-ui-notification',
    title,
    ...otherProps
  } = props;

  const styles = getStyles({ variant });

  const iconSize = title ? 'medium' : 'small';
  const iconVariants = {
    positive: <CheckCircleIcon color={variant} size={iconSize} />,
    warning: <WarningIcon color={variant} size={iconSize} />,
    negative: <WarningOctagonIcon color={variant} size={iconSize} />,
    primary: <InfoIcon color={variant} size={iconSize} />,
  };

  const intents = {
    positive: 'success',
    warning: 'warning',
    negative: 'error',
    primary: 'info',
  };

  return (
    <Flex
      data-test-id={testId}
      role="alert"
      data-intent={intents[variant]}
      aria-live={variant === 'positive' ? 'polite' : 'assertive'}
      className={cx(styles.wrapper, className)}
      {...otherProps}
      ref={ref}
    >
      <Box className={cx(styles.icon)}>{iconVariants[variant]}</Box>
      <Box className={cx(styles.notification)}>
        {title && (
          <Heading
            as="h2"
            className={cx(styles.title)}
            marginBottom="spacingXs"
          >
            {title}
          </Heading>
        )}
        {children && (
          <Paragraph className={styles.content} marginBottom="spacingXs">
            {children}
          </Paragraph>
        )}
        {cta?.label && (
          <TextLink
            {...cta?.textLinkProps}
            as={cta?.textLinkProps?.as || 'button'}
          >
            {cta.label}
          </TextLink>
        )}
      </Box>
      {withCloseButton && (
        <Box>
          <Button
            className={cx(styles.closeButton)}
            variant="transparent"
            startIcon={<XIcon />}
            onClick={() => {
              onClose && onClose();
            }}
            testId="cf-ui-notification-close"
            aria-label={closeButtonAriaLabel}
          />
        </Box>
      )}
    </Flex>
  );
};

export const NotificationItem = React.forwardRef(_NotificationItem);
