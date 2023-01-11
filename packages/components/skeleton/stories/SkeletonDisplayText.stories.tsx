import React from 'react';

import { Skeleton } from '../src/index';
import type { SkeletonDisplayTextProps } from '../src/SkeletonDisplayText/SkeletonDisplayText';

export default {
  title: 'Indicators/Skeleton/SkeletonDisplayText',
  component: Skeleton.DisplayText,
  parameters: {
    propTypes: [Skeleton.DisplayText['__docgenInfo']],
  },
  argTypes: {},
};

export const Basic = (args: SkeletonDisplayTextProps) => (
  <Skeleton.Container>
    <Skeleton.DisplayText {...args} />
  </Skeleton.Container>
);

Basic.args = {
  numberOfLines: 1,
};
