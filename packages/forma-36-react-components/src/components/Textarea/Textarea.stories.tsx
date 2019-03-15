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
      extraClassNames={text('extraClassNames', '')}
      name="someInput"
      id="someInput"
      error={boolean('error', false)}
      maxLength={number('maxLength', 50)}
      required={boolean('required', false)}
      width={select(
        'width',
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
      disabled={boolean('disabled', false)}
      value={text('value', '123456')}
      rows={number('rows', 2)}
    />
  ));
