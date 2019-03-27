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
      className={text('className', '')}
      name="someInput"
      id="someInput"
      hasError={boolean('hasError', false)}
      maxLength={number('maxLength', 50)}
      isRequired={boolean('isRequired', false)}
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
      isDisabled={boolean('isDisabled', false)}
      value={text('value', '123456')}
      rows={number('rows', 2)}
    />
  ));
