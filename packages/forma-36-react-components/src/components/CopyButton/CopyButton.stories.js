import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import CopyButton from './CopyButton';

storiesOf('Components|CopyButton', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <div>
        <CopyButton
          extraClassNames={text('Extra Class Names', '')}
          copyValue={text('Copy Value', 'Lorem Ipsum')}
        />
      </div>
    )),
  );
