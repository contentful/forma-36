import React from 'react';
import { storiesOf } from '@storybook/react';
import { button, text, boolean, select } from '@storybook/addon-knobs';

import Button from '../Button';
import Notification from './index';
import notes from './Notification.md';
import NotificationItem from './NotificationItem';

let index = 0;
const getUniqueNumber = () => {
  index += 1;
  return index;
};

storiesOf('Components|Notification', module)
  .add(
    'default',
    () => {
      button('set position: top', () => {
        Notification.setPosition('top');
      });

      button('set position: bottom', () => {
        Notification.setPosition('bottom');
      });

      button('close all', () => {
        Notification.closeAll();
      });

      text('text', 'Hello world');

      return (
        <div>
          <Button
            buttonType="positive"
            onClick={() =>
              Notification.success(
                `${text('text', 'Hello world')} ${getUniqueNumber()}`,
              )
            }
          >
            show success
          </Button>
          <Button
            style={{ marginLeft: 20 }}
            buttonType="negative"
            onClick={() =>
              Notification.error(
                `${text('text', 'Hello world')} ${getUniqueNumber()}`,
              )
            }
          >
            show error
          </Button>
          <Button
            style={{ marginLeft: 20 }}
            buttonType="muted"
            onClick={() =>
              Notification.warning(
                `${text('text', 'Hello world')} ${getUniqueNumber()}`,
              )
            }
          >
            show warning
          </Button>
        </div>
      );
    },
    { notes },
  )
  .add(
    'items',
    () => (
      <div>
        <NotificationItem
          hasCloseButton={boolean('hasCloseButton', true)}
          intent={select('intent', ['success', 'error', 'warning'], 'success')}
        >
          {text('text', 'Text for the notification')}
        </NotificationItem>
      </div>
    ),
    { notes },
  );
