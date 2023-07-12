import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../src/index';

export default {
  title: 'Components/Skeleton/SkeletonContainer',
  component: Skeleton.Container,
  parameters: {
    propTypes: [Skeleton.Container['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<typeof Skeleton.Container>;

type Story = StoryObj<typeof Skeleton.Container>;

export const Basic: Story = {
  args: {
    width: '100%',
    height: '100',
    backgroundColor: '#e5ebed',
    foregroundColor: '#f7f9fa',
    speed: 2,
  },
  render: (args) => (
    <Skeleton.Container {...args}>
      <Skeleton.DisplayText numberOfLines={1} />
      <Skeleton.BodyText numberOfLines={3} offsetTop={35} />
    </Skeleton.Container>
  ),
};
