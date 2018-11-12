import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './NotificationItem.css';
import IconButton from '../IconButton';
import Icon from '../Icon';
import { iconName } from '../Icon/constants';

const Icons = {
  success: iconName.CheckCircle,
  error: iconName.Warning,
};

export const NotificationItemPropTypes = {
  intent: PropTypes.oneOf(['error', 'success']),
  onClose: PropTypes.func.isRequired,
  hasCloseButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
};

class NotificationItem extends React.Component {
  static propTypes = NotificationItemPropTypes;

  static defaultProps = {
    testId: 'cf-ui-notification',
    intent: 'success',
    hasCloseButton: true,
  };

  render() {
    const { children, testId, intent, onClose, hasCloseButton } = this.props;

    const icon = Icons[intent];
    if (!icon) {
      throw new Error(`Intent ${intent} is not supported in Note component.`);
    }
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
          <Icon icon={icon} color="white" />
        </div>
        <div className={styles.NotificationItem__text}>{children}</div>
        {hasCloseButton && (
          <IconButton
            iconProps={{ icon: 'Close' }}
            onClick={onClose}
            testId="cf-ui-notification-close"
            label="Dismiss"
            className={styles.NotificationItem__dismiss}
          />
        )}
      </div>
    );
  }
}

export default NotificationItem;
