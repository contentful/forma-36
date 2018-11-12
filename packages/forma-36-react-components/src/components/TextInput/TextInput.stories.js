import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, selectV2, number } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import TextInput from './TextInput';

storiesOf('Components|TextInput', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <TextInput
        error={boolean('Error', false)}
        extraClassNames={text('Extra Class Names', '')}
        disabled={boolean('Disabled', false)}
        withCopyButton={boolean('With Copy Button', false)}
        value={text('Value', '123456')}
        maxLength={number('Max Length Characters', 50)}
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
        onCopy={action('onCopy')}
        name="emailInput"
        id="emailInput"
      />
    )),
  );
