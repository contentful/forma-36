import type { Meta, StoryObj } from '@storybook/react';
import { Subheading } from '../src/Subheading/Subheading';

export default {
  title: 'Typography/Subheading',
  component: Subheading,
  parameters: {
    propTypes: [Subheading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<typeof Subheading>;

type Story = StoryObj<typeof Subheading>;

export const Basic: Story = {
  args: {
    as: 'h2',
    children: 'Subheading',
  },
};
