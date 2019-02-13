import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import FormLabel from './FormLabel';

storiesOf('Components|FormLabel', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <FormLabel
        required={boolean('Required', false)}
        requiredText={text('Required Text', 'required')}
        htmlFor="someInput"
      >
        {text('Text', 'Input label')}
      </FormLabel>
    )),
  );
