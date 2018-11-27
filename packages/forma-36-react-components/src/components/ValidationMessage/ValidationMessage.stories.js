import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import ValidationMessage from './ValidationMessage';

storiesOf('Components|ValidationMessage', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <ValidationMessage extraClassNames={text('Extra Class Names', '')}>
        {text('Message', 'This field is required')}
      </ValidationMessage>
    )),
  );
