import React, { useCallback } from 'react';
import classNames from 'classnames';

import IconButton from '../IconButton';
import Icon, { IconType } from '../Icon';
import TextLink, { TextLinkProps } from '../TextLink';
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
    return <p className={styles.NotificationItem__body}>{title && children}</p>;
  }, [children, title]);

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

    let icon: IconType;
    let color;

    switch (intent) {
      case 'success':
        icon = 'CheckCircle';
        color = 'positive';
        break;

      case 'warning':
        icon = 'Warning';
        color = 'warning';
        break;

      case 'error':
        icon = 'ErrorCircle';
        color = 'negative';
        break;

      default:
        icon = 'ErrorCircle';
    }

    return (
      <div className={iconClasses} aria-hidden="true">
        <Icon icon={icon} color={color} />
      </div>
    );
  }, [intent]);

  return (
    <div
      className={styles.NotificationItem}
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
            iconProps={{ icon: 'Close' }}
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

export default NotificationItem;
