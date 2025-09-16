import React from 'react';

import { Skeleton } from '../src/index';
import type { SkeletonContainerProps } from '../src/SkeletonContainer/SkeletonContainer';

export default {
  title: 'Components/Skeleton/SkeletonContainer',
  component: Skeleton.Container,
  parameters: {
    propTypes: [Skeleton.Container['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = {
  render: (args: SkeletonContainerProps) => (
    <Skeleton.Container {...args}>
      <Skeleton.DisplayText numberOfLines={1} />
      <Skeleton.BodyText numberOfLines={3} offsetTop={35} />
    </Skeleton.Container>
  ),

  args: {
    width: '100%',
    height: '100',
    backgroundColor: '#e5ebed',
    foregroundColor: '#f7f9fa',
    speed: 2,
  },
};
