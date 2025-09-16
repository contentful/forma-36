import React from 'react';

import { Skeleton } from '../src/index';
import type { SkeletonImageProps } from '../src/SkeletonImage/SkeletonImage';

export default {
  title: 'Components/Skeleton/SkeletonImage',
  component: Skeleton.Image,
  parameters: {
    propTypes: [Skeleton.Image['__docgenInfo']],
  },
  argTypes: {},
};

export const Basic = {
  render: (args: SkeletonImageProps) => (
    <Skeleton.Container>
      <Skeleton.Image {...args} />
    </Skeleton.Container>
  ),

  args: {
    width: 50,
    height: 50,
    offsetTop: 0,
    offsetLeft: 0,
    radiusX: 0,
    radiusY: 0,
  },
};
