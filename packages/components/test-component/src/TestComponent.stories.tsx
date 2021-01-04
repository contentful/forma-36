import React from 'react';

import { TestComponent } from './TestComponent';

export default {
  title: 'Components/TestComponent',
  component: TestComponent,
  parameters: {
    propTypes: TestComponent['__docgenInfo'],
  },
};

export const Default = () => {
  return <TestComponent />;
};
