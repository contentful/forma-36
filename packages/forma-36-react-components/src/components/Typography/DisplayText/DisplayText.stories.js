import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import DisplayText from './DisplayText';

storiesOf('Components|Typography/DisplayText', module)
  .addDecorator(withInfo)
  .add('default', () => (
    <DisplayText
      extraClassNames={text('Extra Class Names', '')}
      element={select(
        'Element',
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
        'h1',
      )}
      size={select('Size', ['default', 'large'], 'default')}
    >
      {text('Content', 'Display text')}
    </DisplayText>
  ));
