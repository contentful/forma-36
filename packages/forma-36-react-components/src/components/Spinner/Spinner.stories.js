import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2, number } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import Spinner from './Spinner';

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
        size={selectV2(
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
          size={selectV2(
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
