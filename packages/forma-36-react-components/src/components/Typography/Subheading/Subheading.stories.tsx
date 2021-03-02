import React from 'react';

import { Subheading, SubheadingProps } from './Subheading';

export default {
  title: 'Typography/Subheading',
  component: Subheading,
  parameters: {
    propTypes: [Subheading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

interface Args extends SubheadingProps {
  SubheadingText: string;
}

export const Basic = ({ SubheadingText, ...args }: Args) => (
  <Subheading {...args}>{SubheadingText}</Subheading>
);

Basic.args = {
  SubheadingText: 'Subheading',
};
