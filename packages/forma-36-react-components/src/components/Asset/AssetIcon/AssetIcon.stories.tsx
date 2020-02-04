import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { types, AssetType } from '../Asset';
import { AssetIcon } from './AssetIcon';

storiesOf('Components|Asset/AssetIcon', module)
  .addParameters({
    propTypes: AssetIcon['__docgenInfo'],
  })
  .add('default', () => (
    <AssetIcon
      className={text('className', '')}
    />
  ))
  .add('with type image', () => (
    <AssetIcon
      className={text('className', '')}
      type={select('type', types, 'image') as AssetType}
    />
  ));
