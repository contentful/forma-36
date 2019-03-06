import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import FormLabel from './FormLabel';

storiesOf('Components|FormLabel', module).add('default', () => (
  <FormLabel
    required={boolean('Required', false)}
    requiredText={text('Required Text', 'required')}
    htmlFor="someInput"
  >
    {text('Text', 'Input label')}
  </FormLabel>
));
