import React from 'react';

import { Skeleton, type SkeletonTextProps } from '../src/index';

export default {
  title: 'Components/Skeleton/SkeletonDisplayText',
  component: Skeleton.DisplayText,
  parameters: {
    propTypes: [Skeleton.DisplayText['__docgenInfo']],
  },
  argTypes: {},
};

export const Basic = {
  render: (args: SkeletonTextProps) => (
    <Skeleton.Container>
      <Skeleton.DisplayText {...args} />
    </Skeleton.Container>
  ),

  args: {
    numberOfLines: 1,
  },
};
