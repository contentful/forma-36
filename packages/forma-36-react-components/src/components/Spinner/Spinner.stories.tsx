import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs';

import Spinner from './Spinner';

storiesOf('Components/Spinner', module)
  .addParameters({
    propTypes: Spinner['__docgenInfo'],
    component: Spinner,
  })
  .add('default', () => (
    <Spinner
      className={text('className', '')}
      size={select(
        'Size',
        {
          Default: 'default',
          Small: 'small',
          Large: 'large',
        },
        'default',
      )}
      customSize={number('Custom Size', undefined)}
    />
  ))
  .add('with inline text', () => (
    <div>
      Loading{' '}
      <Spinner
        className={text('className', '')}
        size={select(
          'Size',
          {
            Default: 'default',
            Small: 'small',
            Large: 'large',
          },
          'default',
        )}
        customSize={number('Custom Size', undefined)}
      />
    </div>
  ));
