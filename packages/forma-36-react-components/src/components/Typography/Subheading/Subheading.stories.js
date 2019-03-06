import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Subheading from './Subheading';

storiesOf('Components|Typography/Subheading', module).add('default', () => (
  <Subheading
    extraClassNames={text('Extra Class Names', '')}
    element={select('Element', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'], 'h1')}
  >
    {text('Content', 'Subheading')}
  </Subheading>
));
