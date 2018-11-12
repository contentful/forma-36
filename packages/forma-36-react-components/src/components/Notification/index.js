import React from 'react';
import { render } from 'react-dom';
import NotificationManager from './NotificationsManager';

let initiated = false;
const internalAPI = {};

function registerAPI(fnName, fn) {
  internalAPI[fnName] = fn;
}

function createRoot(callback) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  render(<NotificationManager register={registerAPI} />, container, callback);
}

const afterInit = fn => (...args) => {
  if (!initiated) {
    initiated = true;
    createRoot(() => {
      fn(...args);
    });
  } else {
    fn(...args);
  }
};

const show = intent => (text, settings = {}) =>
  internalAPI.show(text, {
    ...settings,
    intent,
  });

export default {
  success: afterInit(show('success')),
  error: afterInit(show('error')),
  close: afterInit(id => internalAPI.close(id)),
  closeAll: afterInit(() => internalAPI.closeAll()),
  setPosition: afterInit((position, params) =>
    internalAPI.setPosition(position, params),
  ),
  setDuration: afterInit(duration => internalAPI.setDuration(duration)),
};
