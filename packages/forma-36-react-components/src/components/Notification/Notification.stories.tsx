import React from 'react';
import { storiesOf } from '@storybook/react';
import { button, text, number, boolean, select } from '@storybook/addon-knobs';

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
                {
                  duration: number('duration', 6000),
                },
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
                {
                  duration: number('duration', 6000),
                },
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
                {
                  duration: number('duration', 6000),
                },
              )
            }
          >
            show warning
          </Button>
          <Button
            style={{ marginLeft: 20 }}
            buttonType="muted"
            onClick={() =>
              Notification.warning('Notification that should not be repeated', {
                duration: number('duration', 6000),
                id: 'some-concrete-notification',
              })
            }
          >
            show notification with the same id
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
