import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

storiesOf('Components|Checkbox', module)
  .addParameters({
    propTypes: Checkbox['__docgenInfo'],
  })
  .add('default', () => (
    <Checkbox
      extraClassNames={text('Extra Class Names', '')}
      id="Checkbox"
      checked={boolean('Checked', false)}
      labelText={(text('Aria label text'), 'some label text')}
      disabled={boolean('Disabled', false)}
      required={boolean('Required', false)}
      name={text('Name', 'some-name')}
      onChange={action('onChange')}
    />
  ));
