import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Heading } from '../src/Heading';
import type { HeadingProps } from '../src/Heading';

export default {
  component: Heading,
  parameters: {
    propTypes: Heading['__docgenInfo'],
  },
  title: 'Components/Heading',
} as Meta;

export const Default: Story<HeadingProps> = (args) => {
  return <Heading {...args}>Heading</Heading>;
};
