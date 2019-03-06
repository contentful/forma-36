import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { Asset, types } from './Asset';

storiesOf('Components|Asset', module).add('default', () => (
  <Asset
    extraClassNames={text('Extra Class Names', '')}
    src={text('Source', 'https://placekitten.com/200/300')}
    title={text('Title', 'Image of a cat')}
    type={select('Asset Type', types, 'archive')}
  />
));
