import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { button, text, boolean, selectV2 } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import Button from '../Button';
import Notification from './index';
import NotificationNotes from './Notification.md';
import NotificationItem from './NotificationItem';

let index = 0;
const getUniqueNumber = () => {
  index += 1;
  return index;
};

storiesOf('Components|Notification', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withNotes(NotificationNotes)(() => {
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
        </div>
      );
    }),
  )
  .add('items', () => (
    <div>
      <NotificationItem
        hasCloseButton={boolean('hasCloseButton', true)}
        intent={selectV2('intent', ['success', 'error'], 'success')}
      >
        {text('text', 'Text for the notification')}
      </NotificationItem>
    </div>
  ));
