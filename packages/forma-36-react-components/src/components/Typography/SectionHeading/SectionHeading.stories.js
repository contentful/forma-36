import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2 } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import SectionHeading from './SectionHeading';

storiesOf('Components|Typography/SectionHeading', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <SectionHeading
        extraClassNames={text('Extra Class Names', '')}
        element={selectV2(
          'Element',
          ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
          'h1',
        )}
      >
        {text('Content', 'Section heading')}
      </SectionHeading>
    )),
  );
