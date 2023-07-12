import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../src/index';

export default {
  title: 'Components/Skeleton/SkeletonImage',
  component: Skeleton.Image,
  parameters: {
    propTypes: [Skeleton.Image['__docgenInfo']],
  },
  argTypes: {},
} as Meta<typeof Skeleton.Image>;

type Story = StoryObj<typeof Skeleton.Image>;

export const Basic: Story = {
  args: {
    width: 50,
    height: 50,
    offsetTop: 0,
    offsetLeft: 0,
    radiusX: 0,
    radiusY: 0,
  },
  render: (args) => (
    <Skeleton.Container>
      <Skeleton.Image {...args} />
    </Skeleton.Container>
  ),
};
