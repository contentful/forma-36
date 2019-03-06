import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Textarea from './Textarea';

storiesOf('Components|TextArea', module)
  .addParameters({
    propTypes: Textarea['__docgenInfo'],
  })
  .add('default', () => (
    <Textarea
      extraClassNames={text('Extra Class Names', '')}
      name="someInput"
      id="someInput"
      error={boolean('Error', false)}
      maxLength={number('Max Length Characters', 50)}
      required={boolean('Required', false)}
      width={select(
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
  ));
