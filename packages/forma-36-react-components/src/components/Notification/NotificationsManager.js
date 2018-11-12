import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NotificationItemContainer from './NotificationItemContainer';
import styles from './NotificationsManager.css';

let uniqueId = 0;

const getUniqueId = () => {
  uniqueId += 1;
  return uniqueId;
};

export default class NotificationsManager extends PureComponent {
  static propTypes = {
    register: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      position: 'bottom',
      positionOffset: 20,
      duration: 6000,
    };
    this.props.register('close', this.close);
    this.props.register('show', this.show);
    this.props.register('closeAll', this.closeAll);
    this.props.register('setPosition', this.setPosition);
    this.props.register('setDuration', this.setDuration);
  }

  setPosition = (position, params = {}) => {
    if (position === 'bottom' || position === 'top') {
      const positionOffset = params.offset || 20;
      this.setState({ position, positionOffset });
    }
  };

  setDuration = duration => {
    this.setState({ duration });
  };

  close = id => {
    this.setState(state => ({
      items: state.items.map(item => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          isShown: false,
        };
      }),
    }));
  };

  closeAndDelete = id => {
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id),
    }));
  };

  closeAll = () => {
    this.setState(state => ({
      items: state.items.map(item => ({
        ...item,
        isShown: false,
      })),
    }));
  };

  show = (text, { duration, intent, canClose }) => {
    const notificationId = getUniqueId();
    const notification = {
      id: notificationId,
      text,
      close: () => this.closeAndDelete(notificationId),
      duration: duration || this.state.duration,
      canClose: canClose && true,
      isShown: true,
      intent,
    };
    this.setState(state => {
      if (this.state.position === 'top') {
        return {
          items: [notification, ...state.items],
        };
      }
      return {
        items: [...state.items, notification],
      };
    });
    return notification;
  };

  render() {
    return (
      <div
        data-test-id="cf-notification-container"
        className={classNames(styles.NotificationsManager, {
          [styles[`NotificationsManager--top`]]: this.state.position === 'top',
        })}
        style={{ [this.state.position]: this.state.positionOffset }}
      >
        <div className={styles.NotificationsManager__container}>
          {this.state.items.map(item => (
            <NotificationItemContainer
              intent={item.intent}
              duration={item.duration}
              key={item.id}
              hasCloseButton={item.canClose}
              onClose={item.close}
              isShown={item.isShown}
            >
              {item.text}
            </NotificationItemContainer>
          ))}
        </div>
      </div>
    );
  }
}
