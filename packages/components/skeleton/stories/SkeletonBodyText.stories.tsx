import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../src/index';

export default {
  title: 'Components/Skeleton/SkeletonBodyText',
  component: Skeleton.Text,
  parameters: {
    propTypes: [Skeleton.Text['__docgenInfo']],
  },
} as Meta<typeof Skeleton.Text>;

type Story = StoryObj<typeof Skeleton.Text>;

export const Basic: Story = {
  args: {
    numberOfLines: 2,
    offsetTop: 0,
    offsetLeft: 0,
    lineHeight: 16,
    marginBottom: 8,
  },
  render: (args) => (
    <Skeleton.Container>
      <Skeleton.BodyText {...args} />
    </Skeleton.Container>
  ),
};
