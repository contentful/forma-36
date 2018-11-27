import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import Checkbox from './Checkbox';

storiesOf('Components|Checkbox', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <Checkbox
        extraClassNames={text('Extra Class Names', '')}
        id="Checkbox"
        checked={boolean('Checked', false)}
        labelText={(text('Aria label text'), 'some label text')}
        disabled={boolean('Disabled', false)}
        required={boolean('Required', false)}
        name={text('Name', 'some-name')}
      />
    )),
  );
