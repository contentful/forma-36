import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../src/Paragraph/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    propTypes: [Paragraph['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<typeof Paragraph>;

type Story = StoryObj<typeof Paragraph>;

export const Basic: Story = {
  args: {
    children: 'Paragraph',
  },
};
