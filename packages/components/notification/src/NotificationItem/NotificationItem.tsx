import React from 'react';
import { cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import {
  CheckCircleIcon,
  WarningOctagonIcon,
  WarningIcon,
  XIcon,
  InfoIcon,
} from '@contentful/f36-icons';
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

export interface NotificationItemProps extends CommonProps {
  /**
   * Defines the styling of notification
   * @default positive
   */
  variant?: NotificationVariant;
  /**
   * @deprecated This prop no longer has any effect as Notifications must always have a close button. The prop will be removed in the next major release.
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
  onClose?: () => void;
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
    withCloseButton: _withCloseButton,
    closeButtonAriaLabel = 'Dismiss',
    variant = 'positive',
    onClose,
    testId = 'cf-ui-notification',
    title,
    ...otherProps
  } = props;

  const styles = getStyles({ variant });

  const iconSize = title ? 'medium' : 'small';
  const iconVariants: Record<NotificationVariant, React.ReactElement> = {
    positive: <CheckCircleIcon color={tokens.colorPositive} size={iconSize} />,
    warning: <WarningIcon color={tokens.colorWarning} size={iconSize} />,
    negative: (
      <WarningOctagonIcon color={tokens.colorNegative} size={iconSize} />
    ),
    primary: <InfoIcon color={tokens.colorPrimary} size={iconSize} />,
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
      alignItems="flex-start"
      {...otherProps}
      ref={ref}
    >
      <Flex className={cx(styles.icon)}>{iconVariants[variant]}</Flex>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        className={cx(styles.notification)}
      >
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
      </Flex>

      <Box>
        <Button
          className={cx(styles.closeButton)}
          variant="transparent"
          startIcon={<XIcon />}
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
          testId="cf-ui-notification-close"
          aria-label={closeButtonAriaLabel}
        />
      </Box>
    </Flex>
  );
};

export const NotificationItem = React.forwardRef(_NotificationItem);
