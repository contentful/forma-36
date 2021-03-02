import React from 'react';

import { CardDragHandle } from './CardDragHandle';

export default {
  title: 'Components/Card/CardDragHandle',
  component: CardDragHandle,
  parameters: {
    propTypes: [CardDragHandle['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = () => (
  <div style={{ height: 100 }}>
    <CardDragHandle>CardDragHandle</CardDragHandle>
  </div>
);
