import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

import { NotificationIntent, NotificationCtaProps } from './NotificationItem';
import NotificationItemContainer from './NotificationItemContainer';
import styles from './NotificationsManager.css';
import { useAsyncState } from '../../utils/useAsyncState';

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
  duration?: number;
  canClose: boolean;
  isShown: boolean;
  intent: NotificationIntent;
  title?: string;
  cta?: Partial<NotificationCtaProps>;
}

export type ShowAction<T> = (
  text: string,
  setting?: {
    intent: NotificationIntent;
    id?: string;
    duration?: number;
    canClose?: boolean;
    title?: string;
    cta?: Partial<NotificationCtaProps>;
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

export function NotificationsManager({
  register,
}: NotificationsManagerProps): React.ReactElement {
  const [items, setItems] = useAsyncState<Notification[]>([]);
  const [position, setPositionState] = useState('bottom');
  const [positionOffset, setPositionOffset] = useState(20);
  const [duration, setDuration] = useState(6000);

  const setPosition: SetPositionAction<void> = useCallback(
    (position, params?: { offset: number }) => {
      if (position === 'bottom' || position === 'top') {
        const positionOffset = params && params.offset ? params.offset : 20;
        setPositionState(position);
        setPositionOffset(positionOffset);
      }
    },
    [],
  );

  const close: CloseAction<void> = useCallback(
    (id) => {
      setItems(
        items.current.map((item) => {
          if (item.id !== id) {
            return item;
          }

          return {
            ...item,
            isShown: false,
          };
        }),
      );
    },
    [items, setItems],
  );

  const closeAndDelete = useCallback(
    (id: string | number) => {
      setItems(items.current.filter((item) => item.id !== id));
    },
    [items, setItems],
  );

  const closeAll: CloseAllAction<void> = useCallback(() => {
    setItems(
      items.current.map((item) => {
        return {
          ...item,
          isShown: false,
        };
      }),
    );
  }, [items, setItems]);

  const show: ShowAction<Notification> = useCallback(
    (text, settings) => {
      const itemDuration =
        settings && typeof settings.duration !== 'undefined' // Needed as 0 is falsy but 0 is valid to disable auto-closing a notification
          ? settings.duration
          : duration;
      const intent = settings && settings.intent ? settings.intent : 'success';

      const canClose =
        settings && typeof settings.canClose !== 'undefined'
          ? settings.canClose
          : true;

      const notificationId =
        settings && settings.id ? settings.id : getUniqueId();

      const notification = {
        id: notificationId,
        text,
        close: () => closeAndDelete(notificationId),
        duration: itemDuration,
        canClose,
        isShown: true,
        intent,
        title: settings && settings.title,
        cta: settings && settings.cta,
      };

      const alreadyThere = items.current.find(
        (item) => item.id === notification.id,
      );

      if (alreadyThere) {
        return alreadyThere;
      }

      if (position === 'top') {
        setItems([notification, ...items.current]);
      } else {
        setItems([...items.current, notification]);
      }

      return notification;
    },
    [closeAndDelete, duration, items, position, setItems],
  );

  register('close', close);
  register('show', show);
  register('closeAll', closeAll);
  register('setPosition', setPosition);
  register('setDuration', setDuration);

  return (
    <div
      data-test-id="cf-notification-container"
      className={classNames(styles.NotificationsManager, {
        [styles[`NotificationsManager--top`]]: position === 'top',
      })}
      style={{ [position]: positionOffset }}
    >
      <div className={styles.NotificationsManager__container}>
        {items.current.map((item) => (
          <NotificationItemContainer
            intent={item.intent}
            duration={item.duration}
            key={item.id}
            hasCloseButton={item.canClose}
            onClose={item.close}
            isShown={item.isShown}
            title={item.title}
            cta={item.cta}
          >
            {item.text}
          </NotificationItemContainer>
        ))}
      </div>
    </div>
  );
}

export default NotificationsManager;
