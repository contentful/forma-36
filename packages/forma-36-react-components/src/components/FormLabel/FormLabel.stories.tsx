import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import FormLabel from './FormLabel';

storiesOf('Components/FormLabel', module)
  .addParameters({
    propTypes: FormLabel['__docgenInfo'],
    component: FormLabel,
  })
  .add('default', () => (
    <FormLabel
      required={boolean('required', false)}
      requiredText={text('requiredText', 'required')}
      htmlFor="someInput"
    >
      {text('children', 'Input label')}
    </FormLabel>
  ));
