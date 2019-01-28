import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import Spinner from './Spinner.tsx';

storiesOf('Components|Spinner', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
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
    )),
  )
  .add(
    'with inline text',
    withInfo()(() => (
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
    )),
  );
