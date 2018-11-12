import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2 } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import Asset, { types } from './Asset';

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
        type={selectV2('Asset Type', types, 'archive')}
      />
    )),
  );
