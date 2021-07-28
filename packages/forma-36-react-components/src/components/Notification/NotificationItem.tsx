import React, { useCallback } from 'react';
import classNames from 'classnames';
import { CheckCircle, ErrorCircle, Warning } from '@contentful/f36-icons';
import { Close } from '@contentful/f36-icons';

import { IconButton } from '../IconButton';
import { TextLink, TextLinkProps } from '@contentful/f36-text-link';
import styles from './NotificationItem.css';

export type NotificationIntent = 'success' | 'error' | 'warning';

export interface NotificationCtaProps {
  label: string;
  textLinkProps: Partial<TextLinkProps>;
}

export interface NotificationItemProps {
  intent?: NotificationIntent;
  hasCloseButton?: boolean;
  onClose?: Function;
  testId?: string;
  children: React.ReactNode;
  title?: string;
  cta?: Partial<NotificationCtaProps>;
}

export function NotificationItem({
  children,
  cta,
  hasCloseButton = true,
  intent = 'success' as NotificationIntent,
  onClose,
  testId = 'cf-ui-notification',
  title,
}: NotificationItemProps) {
  const renderTitle = useCallback(() => {
    return (
      <h2 className={styles.NotificationItem__title}>
        {title ? title : children}
      </h2>
    );
  }, [children, title]);

  const renderBody = useCallback(() => {
    const bodyClasses = classNames(styles.NotificationItem__body, {
      [styles[`NotificationItem__body--naked`]]: !title && !cta,
    });

    return <p className={bodyClasses}>{title && children}</p>;
  }, [children, title, cta]);

  const renderCta = useCallback(() => {
    if (cta && cta.label)
      return (
        <div>
          <TextLink {...cta.textLinkProps}>{cta.label}</TextLink>
        </div>
      );
  }, [cta]);

  const renderIcon = useCallback(() => {
    const iconClasses = classNames(styles.NotificationItem__icon, {
      [styles[`NotificationItem__icon--${intent}`]]: true,
    });

    let Icon: typeof CheckCircle;
    let variant;

    switch (intent) {
      case 'success':
        Icon = CheckCircle;
        variant = 'positive';
        break;

      case 'warning':
        Icon = Warning;
        variant = 'warning';
        break;

      case 'error':
        Icon = ErrorCircle;
        variant = 'negative';
        break;

      default:
        Icon = ErrorCircle;
    }

    return (
      <div className={iconClasses} aria-hidden="true">
        <Icon variant={variant} />
      </div>
    );
  }, [intent]);

  const NotificationClassName = classNames(styles.NotificationItem, {
    [styles[`NotificationItem--${intent}`]]: intent,
  });

  return (
    <div
      className={NotificationClassName}
      data-test-id={testId}
      data-intent={intent}
      role="alert"
      aria-live={intent === 'success' ? 'polite' : 'assertive'}
    >
      <div className={styles.NotificationItem__intent}>{intent}</div>
      {renderIcon()}
      <div className={styles.NotificationItem__content}>
        <div className={styles.NotificationItem__text}>
          {renderTitle()}
          {renderBody()}
          {renderCta()}
        </div>
        {hasCloseButton && (
          <IconButton
            buttonType="secondary"
            iconProps={{ as: Close }}
            onClick={() => {
              if (onClose) {
                onClose();
              }
            }}
            testId="cf-ui-notification-close"
            label="Dismiss"
            className={styles.NotificationItem__dismiss}
          />
        )}
      </div>
    </div>
  );
}
