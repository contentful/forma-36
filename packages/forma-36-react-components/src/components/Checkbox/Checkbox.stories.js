import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';
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
        id="checkbox"
        labelText="checkbox"
        disabled={boolean('Disabled', false)}
        required={boolean('Required', false)}
      />
    )),
  );
