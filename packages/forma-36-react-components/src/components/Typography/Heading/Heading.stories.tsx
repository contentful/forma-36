import React from 'react';
import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    propTypes: [Heading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

interface Args extends HeadingProps {
  headingText: string;
}

export const Basic = ({ headingText, ...args }: Args) => (
  <Heading {...args}>{headingText}</Heading>
);

Basic.args = {
  headingText: 'Heading',
};
