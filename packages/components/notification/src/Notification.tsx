/* global Promise */
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import {
  NotificationsManager,
  ShowAction,
  CloseAction,
  CloseAllAction,
  SetPlacementAction,
  SetDurationAction,
  NotificationProps,
  Placement,
  registerClosePromise,
} from './NotificationsManager';
import type { NotificationVariant, NotificationCta } from './types';

export interface NotificationsAPI {
  success: ShowAction<NotificationProps>;
  error: ShowAction<NotificationProps>;
  show: ShowAction<NotificationProps>;
  close: CloseAction<void>;
  closeAll: CloseAllAction<void>;
  setPlacement: SetPlacementAction<void>;
  setDuration: SetDurationAction<void>;
  cleanup: () => void;
  getNotificationIds: () => Array<string | number>;
}

let initiated = false;
let root: Root | null = null;
const internalAPI: Partial<NotificationsAPI> = {};

function registerAPI<K extends keyof NotificationsAPI>(
  FnName: K,
  fn: NotificationsAPI[K],
) {
  internalAPI[FnName] = fn;
}

function initNotificationsRoot(onMounted: () => void) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  root = createRoot(container);
  root.render(
    <NotificationsManager register={registerAPI} onReady={onMounted} />,
  );
}

function afterInit<PromiseValueType>(
  fn: (...args: unknown[]) => PromiseValueType | Promise<PromiseValueType>,
) {
  return (...args: unknown[]): Promise<PromiseValueType> => {
    if (!initiated) {
      initiated = true;
      return new Promise<PromiseValueType>((resolve, reject) => {
        initNotificationsRoot(() => {
          try {
            const result = fn(...args);
            Promise.resolve(result).then(resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      });
    }

    try {
      const result = fn(...args);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

const show =
  (variant: NotificationVariant) =>
  (
    text: string,
    settings?: {
      duration?: number;
      withClose?: boolean;
      id?: string;
      title?: string;
      cta?: Partial<NotificationCta>;
    },
  ): NotificationProps => {
    if (internalAPI.show) {
      return internalAPI.show(text, {
        ...(settings || {}),
        variant,
      });
    }
  };

type ExternalShowAction<T> = (
  text: string,
  settings?: {
    duration?: number;
    withClose?: boolean;
    id?: string;
    title?: string;
    cta?: Partial<NotificationCta>;
  },
) => T;

export const Notification: {
  success: ExternalShowAction<Promise<NotificationProps>>;
  error: ExternalShowAction<Promise<NotificationProps>>;
  warning: ExternalShowAction<Promise<NotificationProps>>;
  info: ExternalShowAction<Promise<NotificationProps>>;
  close: CloseAction<Promise<void>>;
  closeAll: CloseAllAction<Promise<void>>;
  setPlacement: SetPlacementAction<Promise<void>>;
  setDuration: SetDurationAction<Promise<void>>;
  cleanup: () => Promise<void>;
} = {
  success: afterInit<NotificationProps>(show('positive')),
  error: afterInit<NotificationProps>(show('negative')),
  warning: afterInit<NotificationProps>(show('warning')),
  info: afterInit<NotificationProps>(show('primary')),
  close: afterInit<void>((id: string | number) => {
    if (internalAPI.close) {
      // Create a promise that resolves when the close animation completes
      return new Promise<void>((resolve) => {
        registerClosePromise(id, resolve);
        internalAPI.close(id);
      });
    }
  }),
  closeAll: afterInit<void>(() => {
    if (internalAPI.closeAll && internalAPI.getNotificationIds) {
      const ids = internalAPI.getNotificationIds();
      if (ids.length === 0) {
        return Promise.resolve();
      }
      const closePromises = ids.map(
        (id) =>
          new Promise<void>((resolve) => {
            registerClosePromise(id, resolve);
          }),
      );
      internalAPI.closeAll();
      return Promise.all(closePromises).then(() => undefined);
    }
  }),
  setPlacement: afterInit<void>(
    (placement: Placement, params?: { offset: number }) => {
      if (internalAPI.setPlacement) {
        return internalAPI.setPlacement(placement, params);
      }
    },
  ),
  setDuration: afterInit<void>((duration: number) => {
    if (internalAPI.setDuration) {
      return internalAPI.setDuration(duration);
    }
  }),
  cleanup: () => {
    if (root) {
      root.unmount();
    }
    initiated = false;
    root = null;
    return Promise.resolve();
  },
};
