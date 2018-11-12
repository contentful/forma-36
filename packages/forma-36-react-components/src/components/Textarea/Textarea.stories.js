import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, selectV2, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import Textarea from './Textarea';

storiesOf('Components|TextArea', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <Textarea
        extraClassNames={text('Extra Class Names', '')}
        name="someInput"
        id="someInput"
        error={boolean('Error', false)}
        maxLength={number('Max Length Characters', 50)}
        required={boolean('Required', false)}
        width={selectV2(
          'Width',
          {
            'Full (default)': 'full',
            large: 'large',
            medium: 'medium',
            small: 'small',
          },
          'full',
        )}
        onChange={action('onChange')}
        onBlur={action('onBlur')}
        disabled={boolean('Disabled', false)}
        value={text('Value', '123456')}
        rows={number('Rows', 2)}
      />
    )),
  );
