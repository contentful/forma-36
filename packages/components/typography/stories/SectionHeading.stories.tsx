import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeading } from '../src/SectionHeading/SectionHeading';

export default {
  title: 'Typography/SectionHeading',
  component: SectionHeading,
  parameters: {
    propTypes: [SectionHeading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<typeof SectionHeading>;

type Story = StoryObj<typeof SectionHeading>;

export const Basic: Story = {
  args: {
    children: 'Section heading',
  },
};
