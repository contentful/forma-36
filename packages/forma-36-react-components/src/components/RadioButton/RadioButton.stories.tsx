import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import RadioButton from './RadioButton';

storiesOf('Components|RadioButton', module).add('default', () => (
  <RadioButton
    extraClassNames={text('Extra Class Names', '')}
    id="Checkbox"
    checked={boolean('Checked', false)}
    labelText={(text('Aria label text'), 'some label text')}
    disabled={boolean('Disabled', false)}
    required={boolean('Required', false)}
    name={text('Name', 'some-name')}
  />
));
