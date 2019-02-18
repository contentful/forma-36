import React from 'react';
import { render } from 'react-dom';
import NotificationManager, {
  ShowAction,
  CloseAction,
  CloseAllAction,
  SetPositionAction,
  SetDurationAction,
  Intent,
} from './NotificationsManager';

interface NotificationsAPI {
  success: ShowAction;
  error: ShowAction;
  close: CloseAction;
  closeAll: CloseAllAction;
  setPosition: SetPositionAction;
  setDuration: SetDurationAction;
}

let initiated = false;
const internalAPI: Partial<
  NotificationsAPI & {
    show: ShowAction;
  }
> = {};

function registerAPI(fnName, fn) {
  internalAPI[fnName] = fn;
}

function createRoot() {
  const container = document.createElement('div');
  document.body.appendChild(container);

  render(<NotificationManager register={registerAPI} />, container);
}

const afterInit = fn => (...args) => {
  if (!initiated) {
    initiated = true;
    createRoot();
    return fn(...args);
  } else {
    return fn(...args);
  }
};

const show = (intent: Intent) => (
  text: string,
  settings?: {
    duration?: number;
    canClose?: boolean;
  },
) =>
  internalAPI.show(text, {
    ...(settings || {}),
    intent,
  });

const API: NotificationsAPI = {
  success: afterInit(show('success')),
  error: afterInit(show('error')),
  close: afterInit(id => internalAPI.close(id)),
  closeAll: afterInit(() => internalAPI.closeAll()),
  setPosition: afterInit((position, params) =>
    internalAPI.setPosition(position, params),
  ),
  setDuration: afterInit(duration => internalAPI.setDuration(duration)),
};

export default API;
