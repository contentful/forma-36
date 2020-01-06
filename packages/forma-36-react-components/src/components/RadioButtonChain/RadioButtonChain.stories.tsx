import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RadioButtonChain from './RadioButtonChain';
import RadioButtonField from '../RadioButtonField/RadioButtonField';

function DefaultStory() {
  const options = {
    Option1: 'option1',
    Option2: 'option2',
    Option3: 'option3',
  };

  const [option, setOption] = useState('option3');
  return (
    <RadioButtonChain>
      <RadioButtonField
        id={options.Option1}
        labelText={options.Option1}
        onChange={() => setOption(options.Option1)}
        checked={option === options.Option1}
        inputProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFocus'),
        }}
      />
      <RadioButtonField
        id={options.Option2}
        labelText={options.Option2}
        onChange={() => setOption(options.Option2)}
        checked={option === options.Option2}
        inputProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFocus'),
        }}
      />
      <RadioButtonField
        id={options.Option3}
        labelText={options.Option3}
        onChange={() => setOption(options.Option3)}
        checked={option === options.Option3}
        inputProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFocus'),
        }}
      />
    </RadioButtonChain>
  );
}

storiesOf('Components|RadioButtonChain', module)
  .addParameters({
    propTypes: RadioButtonChain['__docgenInfo'],
  })
  .add('default', () => <DefaultStory />);
