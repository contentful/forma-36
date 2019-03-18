import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ValidationMessage from './ValidationMessage';

storiesOf('Components|ValidationMessage', module)
  .addParameters({
    propTypes: ValidationMessage['__docgenInfo'],
  })
  .add('default', () => (
    <ValidationMessage className={text('className', '')}>
      {text('children', 'This field is required')}
    </ValidationMessage>
  ));
