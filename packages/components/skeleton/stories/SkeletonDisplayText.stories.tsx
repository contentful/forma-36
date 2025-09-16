import React from 'react';

import { Skeleton } from '../src/index';
import type { SkeletonDisplayTextProps } from '../src/SkeletonDisplayText/SkeletonDisplayText';

export default {
  title: 'Components/Skeleton/SkeletonDisplayText',
  component: Skeleton.DisplayText,
  parameters: {
    propTypes: [Skeleton.DisplayText['__docgenInfo']],
  },
  argTypes: {},
};

export const Basic = {
  render: (args: SkeletonDisplayTextProps) => (
    <Skeleton.Container>
      <Skeleton.DisplayText {...args} />
    </Skeleton.Container>
  ),

  args: {
    numberOfLines: 1,
  },
};
