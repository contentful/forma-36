/* global Promise */

import React from 'react';
import { render } from 'react-dom';
import NotificationManager, {
  ShowAction,
  CloseAction,
  CloseAllAction,
  SetPositionAction,
  SetDurationAction,
  Notification as NotificationType,
  Position,
} from './NotificationsManager';
import { NotificationIntent, NotificationCtaProps } from './NotificationItem';

export interface NotificationsAPI {
  success: ShowAction<Notification>;
  error: ShowAction<Notification>;
  show: ShowAction<Notification>;
  close: CloseAction<void>;
  closeAll: CloseAllAction<void>;
  setPosition: SetPositionAction<void>;
  setDuration: SetDurationAction<void>;
}

let initiated = false;
const internalAPI: Partial<NotificationsAPI> = {};

function registerAPI(fnName: string, fn: Function) {
  internalAPI[fnName] = fn;
}

function createRoot(callback: () => void) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  render(<NotificationManager register={registerAPI} />, container, callback);
}

function afterInit<PromiseValueType>(fn: Function) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    if (!initiated) {
      initiated = true;
      return new Promise<PromiseValueType>((resolve) => {
        createRoot(() => {
          resolve(fn(...args));
        });
      });
    } else {
      return Promise.resolve<PromiseValueType>(fn(...args));
    }
  };
}

const show = (intent: NotificationIntent) => (
  text: string,
  settings?: {
    duration?: number;
    canClose?: boolean;
    id?: string;
    title?: string;
    cta?: Partial<NotificationCtaProps>;
  },
) => {
  if (internalAPI.show) {
    return internalAPI.show(text, {
      ...(settings || {}),
      intent,
    });
  }
};

type ExternalShowAction<T> = (
  text: string,
  settings?: {
    duration?: number;
    canClose?: boolean;
    id?: string;
    title?: string;
    cta?: Partial<NotificationCtaProps>;
  },
) => T;

export const Notification: {
  success: ExternalShowAction<Promise<NotificationType>>;
  error: ExternalShowAction<Promise<NotificationType>>;
  warning: ExternalShowAction<Promise<NotificationType>>;
  close: CloseAction<Promise<void>>;
  closeAll: CloseAllAction<Promise<void>>;
  setPosition: SetPositionAction<Promise<void>>;
  setDuration: SetDurationAction<Promise<void>>;
} = {
  success: afterInit<NotificationType>(show('success')),
  error: afterInit<NotificationType>(show('error')),
  warning: afterInit<NotificationType>(show('warning')),
  close: afterInit<void>((id: string | number) => {
    if (internalAPI.close) {
      return internalAPI.close(id);
    }
  }),
  closeAll: afterInit<void>(() => {
    if (internalAPI.closeAll) {
      return internalAPI.closeAll();
    }
  }),
  setPosition: afterInit<void>(
    (position: Position, params?: { offset: number }) => {
      if (internalAPI.setPosition) {
        return internalAPI.setPosition(position, params);
      }
    },
  ),
  setDuration: afterInit<void>((duration: number) => {
    if (internalAPI.setDuration) {
      return internalAPI.setDuration(duration);
    }
  }),
};

export default Notification;
