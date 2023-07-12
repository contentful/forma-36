import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../src/index';

export default {
  title: 'Components/Skeleton/SkeletonDisplayText',
  component: Skeleton.DisplayText,
  parameters: {
    propTypes: [Skeleton.DisplayText['__docgenInfo']],
  },
  argTypes: {},
} as Meta<typeof Skeleton.DisplayText>;

type Story = StoryObj<typeof Skeleton.DisplayText>;

export const Basic: Story = {
  args: {
    numberOfLines: 1,
  },
  render: (args) => (
    <Skeleton.Container>
      <Skeleton.DisplayText {...args} />
    </Skeleton.Container>
  ),
};
