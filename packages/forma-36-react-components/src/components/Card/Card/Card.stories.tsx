import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import Card from './Card';

storiesOf('Components|Card', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <Card
        extraClassNames={text('Extra Class Names', '')}
        href={text('Href', '') || undefined}
        padding={select(
          'Padding',
          {
            Default: 'default',
            Large: 'large',
            None: 'none',
          },
          'default',
        )}
        selected={boolean('Selected', false)}
      >
        {text('Children', 'Card')}
      </Card>
    )),
  )
  .add(
    'with onClick handler',
    withInfo()(() => (
      <Card
        extraClassNames={text('Extra Class Names', '')}
        href={text('Href', '') || undefined}
        onClick={action('onClick')}
        padding={select(
          'Padding',
          {
            Default: 'default',
            Large: 'large',
            None: 'none',
          },
          'default',
        )}
        selected={boolean('Selected', false)}
      >
        {text('Children', 'Card')}
      </Card>
    )),
  );
