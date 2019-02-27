import React, { Component } from 'react';
import classNames from 'classnames';
import IconButton from '../IconButton';
import Icon from '../Icon';

const styles = require('./NotificationItem.css');

export interface NotificationItemProps {
  intent: 'success' | 'error' | 'warning';
  hasCloseButton?: boolean;
  onClose?: Function;
  testId?: string;
  children: React.ReactNode;
}

export class NotificationItem extends Component<NotificationItemProps> {
  static defaultProps = {
    testId: 'cf-ui-notification',
    intent: 'success',
    hasCloseButton: true,
  };

  render() {
    const { children, testId, intent, onClose, hasCloseButton } = this.props;
    
    const classes = classNames(styles.NotificationItem, {
      [styles[`NotificationItem--${intent}`]]: true,
    });
    return (
      <div
        className={classes}
        data-test-id={testId}
        data-intent={intent}
        role="alert"
        aria-live={intent === 'success' ? 'polite' : 'assertive'}
      >
        <div className={styles.NotificationItem__intent}>{intent}</div>
        <div className={styles.NotificationItem__icon} aria-hidden="true">
          <Icon
            icon={intent === 'success' ? 'CheckCircle' : 'Warning'}
            color="white"
          />
        </div>
        <div className={styles.NotificationItem__text}>{children}</div>
        {hasCloseButton && (
          <IconButton
            buttonType="white"
            iconProps={{ icon: 'Close' }}
            onClick={() => {
              onClose();
            }}
            testId="cf-ui-notification-close"
            label="Dismiss"
            extraClassNames={styles.NotificationItem__dismiss}
          />
        )}
      </div>
    );
  }
}

export default NotificationItem;
