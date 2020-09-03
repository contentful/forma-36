import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { Asset, types } from './Asset';

storiesOf('Components/Asset', module)
  .addParameters({
    propTypes: Asset['__docgenInfo'],
    component: Asset,
  })
  .add('default', () => (
    <Asset
      className={text('className', '')}
      src={text('src', 'https://placekitten.com/200/300')}
      title={text('title', 'Image of a cat')}
      type={select('type', types, 'archive')}
    />
  ))
  .add('with an image', () => (
    <Asset
      className={text('className', '')}
      src={text('src', 'https://placekitten.com/200/300')}
      title={text('title', 'Image of a cat')}
      type={select('type', types, 'image')}
    />
  ))
  .add('with an archived image', () => (
    <Asset
      className={text('className', '')}
      src={text('src', 'https://placekitten.com/200/300')}
      title={text('title', 'Image of a cat')}
      type={select('type', types, 'image')}
      status="archived"
    />
  ));
