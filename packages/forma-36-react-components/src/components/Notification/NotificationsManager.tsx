import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { NotificationIntent } from './NotificationItem';
import NotificationItemContainer from './NotificationItemContainer';

const styles = require('./NotificationsManager.css');

let uniqueId = 0;

const getUniqueId = (): number => {
  uniqueId += 1;
  return uniqueId;
};

export type Position = 'top' | 'bottom';

export interface Notification {
  id: string | number;
  text: string;
  close: Function;
  duration: number;
  canClose: boolean;
  isShown: boolean;
  intent: NotificationIntent;
}

export type ShowAction<T> = (
  text: string,
  setting?: {
    intent: NotificationIntent;
    id?: string;
    duration?: number;
    canClose?: boolean;
  },
) => T;

export type CloseAction<T> = (id: string | number) => T;

export type CloseAllAction<T> = () => T;

export type SetDurationAction<T> = (duration: number) => T;

export type SetPositionAction<T> = (
  position: Position,
  params?: { offset: number },
) => T;

export interface NotificationsManagerProps {
  register: (name: string, callback: Function) => void;
}

export interface NotificationsManagerState {
  position: Position;
  positionOffset: number;
  duration: number;
  items: Notification[];
}

export class NotificationsManager extends PureComponent<
  NotificationsManagerProps,
  NotificationsManagerState
> {
  constructor(props: NotificationsManagerProps) {
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

  closeAndDelete = (id: string | number) => {
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

  show: ShowAction<Notification> = (text, settings) => {
    const duration =
      settings && settings.duration ? settings.duration : this.state.duration;
    const intent = settings && settings.intent ? settings.intent : 'success';

    const canClose =
      settings && typeof settings.canClose !== 'undefined'
        ? settings.canClose
        : true;

    const notificationId =
      settings && settings.id ? settings.id : getUniqueId();

    let notification = {
      id: notificationId,
      text,
      close: () => this.closeAndDelete(notificationId),
      duration,
      canClose,
      isShown: true,
      intent,
    };

    const alreadyThere = this.state.items.find(
      item => item.id === notification.id,
    );

    if (alreadyThere) {
      return alreadyThere;
    }

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
