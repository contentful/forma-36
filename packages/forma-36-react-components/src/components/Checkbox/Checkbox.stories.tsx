import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

storiesOf('Components/Checkbox', module)
  .addParameters({
    propTypes: Checkbox['__docgenInfo'],
    component: Checkbox,
  })
  .add('default', () => (
    <Checkbox
      className={text('className', '')}
      id="Checkbox"
      checked={boolean('checked', false)}
      labelText={(text('labelText'), 'some label text')}
      disabled={boolean('disabled', false)}
      required={boolean('required', false)}
      name={text('name', 'some-name')}
      onChange={action('onChange')}
      willBlurOnEsc={boolean('willBlurOnEsc', true)}
    />
  ));
