import React from 'react';

import { SkeletonImage, SkeletonImageProps } from './SkeletonImage';
import { SkeletonContainer } from '../SkeletonContainer/SkeletonContainer';

export default {
  title: 'Components/Skeleton/SkeletonImage',
  component: SkeletonImage,
  parameters: {
    propTypes: [SkeletonImage['__docgenInfo']],
  },
  argTypes: {},
};

export const Basic = (args: SkeletonImageProps) => (
  <SkeletonContainer>
    <SkeletonImage {...args} />
  </SkeletonContainer>
);

Basic.args = {
  width: 50,
  height: 50,
  offsetTop: 0,
  offsetLeft: 0,
  radiusX: 0,
  radiusY: 0,
};
