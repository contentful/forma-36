import type { Meta, StoryObj } from '@storybook/react';

import { HelpText } from '../src';

export default {
  title: 'Form Elements/HelpText',
  component: HelpText,
  parameters: {
    propTypes: [HelpText['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta<typeof HelpText>;

type Story = StoryObj<typeof HelpText>;

export const Default: Story = {
  args: {
    children: 'Lorem Ipsum dolor sit amet',
  },
};
