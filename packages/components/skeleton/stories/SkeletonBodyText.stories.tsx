import React from 'react';

import { Skeleton, type SkeletonTextProps } from '../src/index';

export default {
  title: 'Components/Skeleton/SkeletonBodyText',
  component: Skeleton.Text,
  parameters: {
    propTypes: [Skeleton.Text['__docgenInfo']],
  },
};

export const Basic = {
  render: (args: SkeletonTextProps) => (
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
