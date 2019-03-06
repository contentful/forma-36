import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Card from './Card';

storiesOf('Components|Card', module)
  .add('default', () => (
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
  ))
  .add('with onClick handler', () => (
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
  ));
