/* global Promise */

import React from 'react';
import { render } from 'react-dom';
import {
  NotificationsManager,
  ShowAction,
  CloseAction,
  CloseAllAction,
  SetPlacementAction,
  SetDurationAction,
  NotificationProps,
  Placement,
} from './NotificationsManager';
import { NotificationVariant, NotificationCta } from './types';

export interface NotificationsAPI {
  success: ShowAction<Notification>;
  error: ShowAction<Notification>;
  show: ShowAction<Notification>;
  close: CloseAction<void>;
  closeAll: CloseAllAction<void>;
  setPlacement: SetPlacementAction<void>;
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

  render(<NotificationsManager register={registerAPI} />, container, callback);
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

const show = (variant: NotificationVariant) => (
  text: string,
  settings?: {
    duration?: number;
    withClose?: boolean;
    id?: string;
    title?: string;
    cta?: Partial<NotificationCta>;
  },
) => {
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
  close: CloseAction<Promise<void>>;
  closeAll: CloseAllAction<Promise<void>>;
  setPlacement: SetPlacementAction<Promise<void>>;
  setDuration: SetDurationAction<Promise<void>>;
} = {
  success: afterInit<NotificationProps>(show('positive')),
  error: afterInit<NotificationProps>(show('negative')),
  warning: afterInit<NotificationProps>(show('warning')),
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
};
