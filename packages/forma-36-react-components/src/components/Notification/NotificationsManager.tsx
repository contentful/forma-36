import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NotificationItemContainer from './NotificationItemContainer';

const styles = require('./NotificationsManager.css');

let uniqueId = 0;

const getUniqueId = () => {
  uniqueId += 1;
  return uniqueId;
};

export type Intent = 'success' | 'error';
export type Position = 'top' | 'bottom';

export interface Notification {
  id: number;
  text: string;
  close: Function;
  duration: number;
  canClose: boolean;
  isShown: boolean;
  intent: Intent;
}

export type ShowAction<T> = (
  text: string,
  setting?: { duration?: number; intent: Intent; canClose?: boolean },
) => T;

export type CloseAction<T> = (id: number) => T;

export type CloseAllAction<T> = () => T;

export type SetDurationAction<T> = (duration: number) => T;

export type SetPositionAction<T> = (
  position: Position,
  params?: { offset: number },
) => T;

interface NotificationsManagerProps {
  register: (name: string, callback: Function) => void;
}

interface NotificationsManagerState {
  position: Position;
  positionOffset: number;
  duration: number;
  items: Notification[];
}

export class NotificationsManager extends PureComponent<
  NotificationsManagerProps,
  NotificationsManagerState
> {
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

  setPosition: SetPositionAction<void> = (
    position,
    params?: { offset: number },
  ) => {
    if (position === 'bottom' || position === 'top') {
      const positionOffset = params && params.offset ? params.offset : 20;
      this.setState({ position, positionOffset });
    }
  };

  setDuration: SetDurationAction<void> = duration => {
    this.setState({ duration });
  };

  close: CloseAction<void> = id => {
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

  closeAll: CloseAllAction<void> = () => {
    this.setState(state => ({
      items: state.items.map(item => ({
        ...item,
        isShown: false,
      })),
    }));
  };

  show: ShowAction<Notification> = (text, { duration, intent, canClose }) => {
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
      if (state.position === 'top') {
        return {
          ...state,
          items: [notification, ...state.items],
        };
      }
      return {
        ...state,
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

export default NotificationsManager;
