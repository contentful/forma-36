import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CardDragHandle from './CardDragHandle';

storiesOf('Components|Card/CardDragHandle', module)
  .addParameters({
    propTypes: CardDragHandle['__docgenInfo'],
  })
  .add('default', () => (
    <div style={{ height: 100 }}>
      <CardDragHandle
        className={text('className', '')}
        isDragActive={boolean('isDragActive', false)}
      >
        {text('children', 'CardDragHandle')}
      </CardDragHandle>
    </div>
  ));
