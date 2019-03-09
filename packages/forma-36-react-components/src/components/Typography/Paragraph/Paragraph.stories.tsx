import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Paragraph from './Paragraph';

storiesOf('Components|Typography/Paragraph', module)
  .addParameters({
    propTypes: Paragraph['__docgenInfo'],
  })
  .add('default', () => (
    <Paragraph
      extraClassNames={text('Extra Class Names', '')}
      element={select(
        'Element',
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
        'p',
      )}
    >
      {text('Content', 'Paragraph')}
    </Paragraph>
  ));
