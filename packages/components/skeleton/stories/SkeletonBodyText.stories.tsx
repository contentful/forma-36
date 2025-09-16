import React from 'react';

import { Skeleton } from '../src/index';
import type { SkeletonBodyTextProps } from '../src/SkeletonBodyText/SkeletonBodyText';

export default {
  title: 'Components/Skeleton/SkeletonBodyText',
  component: Skeleton.Text,
  parameters: {
    propTypes: [Skeleton.Text['__docgenInfo']],
  },
};

export const Basic = {
  render: (args: SkeletonBodyTextProps) => (
    <Skeleton.Container>
      <Skeleton.BodyText {...args} />
    </Skeleton.Container>
  ),

  args: {
    numberOfLines: 2,
    offsetTop: 0,
    offsetLeft: 0,
    lineHeight: 16,
    marginBottom: 8,
  },
};
