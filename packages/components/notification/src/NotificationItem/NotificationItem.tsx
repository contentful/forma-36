import React, { useCallback } from 'react';
import { cx } from 'emotion';
import {
  CheckCircleIcon,
  ErrorCircleIcon,
  WarningIcon,
  CloseIcon,
} from '@contentful/f36-icons';

import { Button } from '@contentful/f36-button';
import { TextLink } from '@contentful/f36-text-link';
import { CommonProps, Flex, Box } from '@contentful/f36-core';
import { Heading, Paragraph } from '@contentful/f36-typography';

import { NotificationVariant, NotificationCta } from '../types';
import { getStyles } from './NotificationItem.styles';

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
   * Function that will be triggered when close button is clicked
   */
  onClose?: Function;
  /**
   * Title of the notification
   */
  title?: string;
  /**
   * Content of the notificaiton
   */
  children: React.ReactNode;
  /**
   * Label and text-link props of the CTA
   */
  cta?: Partial<NotificationCta>;
}

const _NotificationItem = (props: NotificationItemProps, ref) => {
  const {
    className,
    children,
    cta,
    withCloseButton = true,
    variant = 'positive',
    onClose,
    testId = 'cf-ui-notification',
    title,
    ...otherProps
  } = props;

  const styles = getStyles({ variant });

  const renderIcon = useCallback(() => {
    const size = title ? 'medium' : 'small';
    const iconVariants = {
      positive: <CheckCircleIcon variant={variant} size={size} />,
      warning: <WarningIcon variant={variant} size={size} />,
      negative: <ErrorCircleIcon variant={variant} size={size} />,
    };

    return <Box className={cx(styles.icon)}>{iconVariants[variant]}</Box>;
  }, [variant, styles.icon, title]);

  const renderContent = () => (
    <>
      {title && (
        <Heading as="h2" className={cx(styles.title)} marginBottom="spacingXs">
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
    </>
  );

  const intents = {
    positive: 'success',
    warning: 'warning',
    negative: 'error',
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
      {renderIcon()}
      <Box className={cx(styles.notification)}>{renderContent()}</Box>
      {withCloseButton && (
        <Box>
          <Button
            className={cx(styles.closeButton)}
            variant="transparent"
            icon={<CloseIcon />}
            onClick={() => {
              onClose && onClose();
            }}
            testId="cf-ui-notification-close"
            aria-label="Dismiss"
          />
        </Box>
      )}
    </Flex>
  );
};

export const NotificationItem = React.forwardRef(_NotificationItem);
