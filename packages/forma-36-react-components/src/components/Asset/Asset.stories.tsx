import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import { Asset, types } from './Asset';

storiesOf('Components|Asset', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <Asset
        extraClassNames={text('Extra Class Names', '')}
        src={text('Source', 'https://placekitten.com/200/300')}
        title={text('Title', 'Image of a cat')}
        type={select('Asset Type', types, 'archive')}
      />
    )),
  );
