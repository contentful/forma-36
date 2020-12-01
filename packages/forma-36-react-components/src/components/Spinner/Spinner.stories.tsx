import React from 'react';

import Spinner, { SpinnerProps } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    propTypes: Spinner['__docgenInfo'],
  },
};

export const Default = (args: SpinnerProps) => {
  return <Spinner {...args} />;
};
Default.args = {
  color: 'primary',
  size: 'large',
};

export const WithText = (args: SpinnerProps) => {
  return (
    <>
      Loading <Spinner {...args} />
    </>
  );
};
