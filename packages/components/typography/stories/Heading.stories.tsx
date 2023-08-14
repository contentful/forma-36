import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../src/Heading/Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    propTypes: [Heading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Basic: Story = {
  args: {
    children: 'Heading',
    as: 'h1',
  },
};
