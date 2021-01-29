import React from 'react';
import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Components/Typography/Heading',
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
  element: 'h1',
  headingText: 'Heading',
};
