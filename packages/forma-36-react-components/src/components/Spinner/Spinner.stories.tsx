import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs';

import Spinner from './Spinner';

storiesOf('Components|Spinner', module)
  .addParameters({
    propTypes: Spinner['__docgenInfo'],
  })
  .add('default', () => (
    <Spinner
      extraClassNames={text('Extra Class Names', '')}
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
        extraClassNames={text('Extra Class Names', '')}
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
