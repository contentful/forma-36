import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import RadioButton from './RadioButton';

storiesOf('Components/RadioButton', module)
  .addParameters({
    propTypes: RadioButton['__docgenInfo'],
    component: RadioButton,
  })
  .add('default', () => (
    <RadioButton
      className={text('className', '')}
      id="Checkbox"
      checked={boolean('Checked', false)}
      labelText={(text('Aria label text'), 'some label text')}
      disabled={boolean('Disabled', false)}
      required={boolean('Required', false)}
      name={text('Name', 'some-name')}
      willBlurOnEsc={boolean('willBlurOnEsc', true)}
    />
  ));
