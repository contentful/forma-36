import React, { Component } from 'react';
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
  intent: NotificationIntent;
  hasCloseButton?: boolean;
  onClose?: Function;
  testId?: string;
  children: React.ReactNode;
  title?: string;
  cta?: Partial<NotificationCtaProps>;
}

const defaultProps = {
  testId: 'cf-ui-notification',
  intent: 'success' as NotificationIntent,
  hasCloseButton: true,
};

export class NotificationItem extends Component<
  NotificationItemProps & typeof defaultProps
> {
  static defaultProps = defaultProps;

  renderTitle() {
    const { title, children } = this.props;

    return (
      <div className={styles.NotificationItem__title}>
        {title ? title : children}
      </div>
    );
  }

  renderBody() {
    const { title, children } = this.props;

    return (
      <div className={styles.NotificationItem__body}>{title && children}</div>
    );
  }

  renderCta() {
    const { cta } = this.props;

    if (cta && cta.label)
      return (
        <div>
          <TextLink {...cta.textLinkProps}>{cta.label}</TextLink>
        </div>
      );
  }

  renderIcon() {
    const { intent } = this.props;

    const iconClasses = classNames(styles.NotificationItem__icon, {
      [styles[`NotificationItem__icon--${intent}`]]: true,
    });

    let icon: IconType;

    switch (intent) {
      case 'success':
        icon = 'CheckCircle';
        break;

      case 'warning':
        icon = 'Warning';
        break;

      case 'error':
        icon = 'ErrorCircle';
        break;

      default:
        icon = 'ErrorCircle';
    }

    return (
      <div className={iconClasses} aria-hidden="true">
        <Icon icon={icon} color="white" />
      </div>
    );
  }

  render() {
    const { testId, intent, onClose, hasCloseButton } = this.props;

    return (
      <div
        className={styles.NotificationItem}
        data-test-id={testId}
        data-intent={intent}
        role="alert"
        aria-live={intent === 'success' ? 'polite' : 'assertive'}
      >
        <div className={styles.NotificationItem__intent}>{intent}</div>
        {this.renderIcon()}
        <div className={styles.NotificationItem__content}>
          <div className={styles.NotificationItem__text}>
            {this.renderTitle()}
            {this.renderBody()}
            {this.renderCta()}
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
}

export default NotificationItem;
