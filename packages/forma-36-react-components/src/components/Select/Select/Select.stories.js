import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { host } from 'storybook-host';
import Select from './Select';
import Option from '../Option';

storiesOf('Components|Select', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <Select
        extraClassNames={text('Extra Class Names', '')}
        id="optionSelect"
        name="optionSelect"
        isDisabled={boolean('is disabled', false)}
        hasError={boolean('hasError', false)}
        onChange={action('onChange')}
        onBlur={action('onBlur')}
        onFocus={action('onFocus')}
        width={select(
          'Width',
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
    )),
  );
