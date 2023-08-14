import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../src/Text/Text';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    propTypes: [Text['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  args: {
    children: 'Text',
  },
};
