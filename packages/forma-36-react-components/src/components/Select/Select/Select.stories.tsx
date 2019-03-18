import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import Select from './Select';
import Option from '../Option';

storiesOf('Components|Select', module)
  .addParameters({
    propTypes: [Select['__docgenInfo'], Option['__docgenInfo']],
  })
  .add('default', () => (
    <Select
      extraClassNames={text('extraClassNames', '')}
      id="optionSelect"
      name="optionSelect"
      isDisabled={boolean('isDisabled', false)}
      hasError={boolean('hasError', false)}
      onChange={action('onChange')}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
      width={select(
        'width',
        {
          'Full (default)': 'full',
          large: 'large',
          medium: 'medium',
          small: 'small',
          auto: 'auto',
        },
        'full',
      )}
    >
      <Option value="optionOne">Option 1</Option>
      <Option value="optionTwo">Long Option 2</Option>
    </Select>
  ));
