import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Subheading from './Subheading';

storiesOf('Components/Typography/Subheading', module)
  .addParameters({
    propTypes: Subheading['__docgenInfo'],
  })
  .add('default', () => (
    <Subheading
      className={text('className', '')}
      element={select(
        'element',
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
        'h1',
      )}
    >
      {text('children', 'Subheading')}
    </Subheading>
  ));
