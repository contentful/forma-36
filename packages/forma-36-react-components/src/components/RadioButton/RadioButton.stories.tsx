import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import RadioButton from './RadioButton';

storiesOf('Components|RadioButton', module)
  .addParameters({
    propTypes: RadioButton['__docgenInfo'],
  })
  .add('default', () => (
    <RadioButton
      className={text('className', '')}
      id="Checkbox"
      checked={boolean('Checked', false)}
      labelText={(text('Aria label text'), 'some label text')}
      isDisabled={boolean('isDisabled', false)}
      isRequired={boolean('isRequired', false)}
      name={text('Name', 'some-name')}
    />
  ));
