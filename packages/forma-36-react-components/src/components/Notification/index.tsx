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
import { NotificationIntent } from './NotificationItem';

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
let internalAPI: Partial<NotificationsAPI> = {};

function registerAPI(fnName: string, fn: Function) {
  internalAPI[fnName] = fn;
}

function createRoot(callback: () => void) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  render(<NotificationManager register={registerAPI} />, container, callback);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const afterInit = (fn: Function) => (...args: any[]) => {
  if (!initiated) {
    initiated = true;
    return new Promise(resolve => {
      createRoot(() => {
        resolve(fn(...args));
      });
    });
  } else {
    return Promise.resolve(fn(...args));
  }
};

const show = (intent: NotificationIntent) => (
  text: string,
  settings?: {
    duration?: number;
    canClose?: boolean;
    id?: string;
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
  success: afterInit(show('success')),
  error: afterInit(show('error')),
  warning: afterInit(show('warning')),
  close: afterInit((id: string | number) => {
    if (internalAPI.close) {
      return internalAPI.close(id);
    }
  }),
  closeAll: afterInit(() => {
    if (internalAPI.closeAll) {
      return internalAPI.closeAll();
    }
  }),
  setPosition: afterInit((position: Position, params?: { offset: number }) => {
    if (internalAPI.setPosition) {
      return internalAPI.setPosition(position, params);
    }
  }),
  setDuration: afterInit((duration: number) => {
    if (internalAPI.setDuration) {
      return internalAPI.setDuration(duration);
    }
  }),
};

export default Notification;
