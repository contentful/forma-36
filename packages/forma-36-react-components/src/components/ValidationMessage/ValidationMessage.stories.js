import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ValidationMessage from './ValidationMessage';

storiesOf('Components|ValidationMessage', module).add('default', () => (
  <ValidationMessage extraClassNames={text('Extra Class Names', '')}>
    {text('Message', 'This field is required')}
  </ValidationMessage>
));
