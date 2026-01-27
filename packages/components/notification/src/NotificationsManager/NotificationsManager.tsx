import React, { useCallback, useLayoutEffect, useState } from 'react';
import { cx } from '@emotion/css';

import { useAsyncState } from './useAsyncState';
import type { NotificationCta, NotificationVariant } from '../types';
import type { NotificationsAPI } from '../Notification';
import { NotificationItemContainer } from '../NotificationItem';
import { getStyles } from './NotificationsManager.styles';

export type Placement = 'top' | 'bottom';

export interface NotificationProps {
  id: string | number;
  text: string;
  onClose: () => void;
  duration?: number;
  withClose: boolean;
  isShown: boolean;
  variant: NotificationVariant;
  title?: string;
  cta?: Partial<NotificationCta>;
}

type ClosePromiseResolver = () => void;
const pendingClosePromises = new Map<string | number, ClosePromiseResolver[]>();

/**
 * Register a promise resolver for a notification close operation.
 * The resolver will be called when the notification is fully removed from the DOM.
 * @internal - Used by Notification.tsx to await close animations
 */
export function registerClosePromise(
  id: string | number,
  resolve: ClosePromiseResolver,
): void {
  const existing = pendingClosePromises.get(id) || [];
  pendingClosePromises.set(id, [...existing, resolve]);
}

/**
 * Resolve all pending close promises for a notification.
 * Called after the close animation completes.
 */
function resolveClosePromises(id: string | number): void {
  const resolvers = pendingClosePromises.get(id);
  if (resolvers) {
    resolvers.forEach((resolve) => resolve());
    pendingClosePromises.delete(id);
  }
}

export type ShowAction<T> = (
  text: string,
  setting?: {
    variant: NotificationVariant;
    id?: string;
    duration?: number;
    withClose?: boolean;
    title?: string;
    cta?: Partial<NotificationCta>;
  },
) => T;

export type CloseAction<T> = (id: string | number) => T;

export type CloseAllAction<T> = () => T;

export type SetDurationAction<T> = (duration: number) => T;

export type SetPlacementAction<T> = (
  placement: Placement,
  params?: { offset: number },
) => T;

export interface NotificationsManagerProps {
  register: <K extends keyof NotificationsAPI>(
    name: K,
    callback: NotificationsAPI[K],
  ) => void;
  onReady?: () => void;
}

let uniqueId = 0;

const getUniqueId = (): number => {
  uniqueId += 1;
  return uniqueId;
};

export const NotificationsManager = ({
  register,
  onReady,
}: NotificationsManagerProps): React.ReactElement => {
  const [items, setItems] = useAsyncState<NotificationProps[]>([]);
  const [placement, setPlacementState] = useState('bottom');
  const [placementOffset, setPlacementOffset] = useState(20);
  const [duration, setDuration] = useState(6000);
  const styles = getStyles(placement, placementOffset);

  const setPlacement: SetPlacementAction<void> = useCallback(
    (placement, params?: { offset: number }) => {
      if (placement === 'bottom' || placement === 'top') {
        const placementOffset = params && params.offset ? params.offset : 20;
        setPlacementState(placement);
        setPlacementOffset(placementOffset);
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
      resolveClosePromises(id);
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

  const show: ShowAction<NotificationProps> = useCallback(
    (text, settings) => {
      const itemDuration =
        settings && typeof settings.duration !== 'undefined' // Needed as 0 is falsy but 0 is valid to disable auto-closing a notification
          ? settings.duration
          : duration;
      const variant = settings?.variant ? settings.variant : 'positive';

      const withClose =
        settings && typeof settings.withClose !== 'undefined'
          ? settings.withClose
          : true;

      const notificationId = settings?.id ? settings.id : getUniqueId();

      const notification = {
        id: notificationId,
        text,
        onClose: () => closeAndDelete(notificationId),
        duration: itemDuration,
        withClose,
        isShown: true,
        variant,
        title: settings?.title,
        cta: settings?.cta,
      };

      const alreadyThere = items.current.find(
        (item) => item.id === notification.id,
      );

      if (alreadyThere) {
        return alreadyThere;
      }

      if (placement === 'top') {
        setItems([notification, ...items.current]);
      } else {
        setItems([...items.current, notification]);
      }

      return notification;
    },
    [closeAndDelete, duration, items, placement, setItems],
  );

  const getNotificationIds = useCallback(() => {
    return items.current.map((item) => item.id);
  }, [items]);

  useLayoutEffect(() => {
    register('close', close);
    register('show', show);
    register('closeAll', closeAll);
    register('setPlacement', setPlacement);
    register('setDuration', setDuration);
    register('getNotificationIds', getNotificationIds);
    onReady?.();
  }, [
    close,
    closeAll,
    getNotificationIds,
    onReady,
    register,
    setPlacement,
    show,
  ]);

  return (
    <div
      data-test-id="cf-notification-container"
      className={cx(styles.manager)}
    >
      <div className={cx(styles.container)}>
        {items.current.map((item) => (
          <NotificationItemContainer
            variant={item.variant}
            duration={item.duration}
            key={item.id}
            withCloseButton={item.withClose}
            // eslint-disable-next-line react/jsx-handler-names
            onClose={item.onClose}
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
};

NotificationsManager.displayName = 'NotificationsManager';
