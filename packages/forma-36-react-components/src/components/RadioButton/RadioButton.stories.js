import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';
import RadioButtonNotes from './RadioButton.md';

storiesOf('Blueprints|[TBA] RadioButton', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withNotes(RadioButtonNotes)(() => (
      <div>
        <img
          src="https://projects.invisionapp.com/static-signed/live-embed/118156364/217188055/1/latest/mcZDLinwhLAsHkic1FwxWQRwsPclEW1hbVp8dBr44OJ1wzXOoJPHjH9SilESFSl7NdFLltuKatfDa3gs4zXEbWrAlE/Radio-button.png"
          alt="RadioButton"
        />
      </div>
    )),
  );
