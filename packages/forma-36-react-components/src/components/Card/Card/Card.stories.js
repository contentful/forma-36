import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, selectV2 } from '@storybook/addon-knobs/react';
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
        padding={selectV2(
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
        padding={selectV2(
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
