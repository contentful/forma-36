import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Card from './Card';

storiesOf('Components|Card', module)
  .addParameters({
    propTypes: Card['__docgenInfo'],
  })
  .add('default', () => (
    <Card
      className={text('className', '')}
      href={text('href', '') || undefined}
      padding={select(
        'padding',
        {
          Default: 'default',
          Large: 'large',
          None: 'none',
        },
        'default',
      )}
      selected={boolean('selected', false)}
    >
      {text('children', 'Card')}
    </Card>
  ))
  .add('with onClick handler', () => (
    <Card
      className={text('className', '')}
      href={text('href', '') || undefined}
      onClick={action('onClick')}
      padding={select(
        'padding',
        {
          Default: 'default',
          Large: 'large',
          None: 'none',
        },
        'default',
      )}
      selected={boolean('selected', false)}
    >
      {text('children', 'Card')}
    </Card>
  ));
