import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Heading from './Heading';

storiesOf('Components|Typography/Heading', module)
  .addParameters({
    propTypes: Heading['__docgenInfo'],
  })
  .add('default', () => (
    <Heading
      extraClassNames={text('Extra Class Names', '')}
      element={select(
        'Element',
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
        'h1',
      )}
    >
      {text('Content', 'Heading')}
    </Heading>
  ));
