import React from 'react';

import { SkeletonContainer } from '../SkeletonContainer/SkeletonContainer';
import {
  SkeletonDisplayText,
  SkeletonDisplayTextProps,
} from './SkeletonDisplayText';

export default {
  title: 'Components/Skeleton/SkeletonDisplayText',
  component: SkeletonDisplayText,
  parameters: {
    propTypes: [SkeletonDisplayText['__docgenInfo']],
  },
  argTypes: {},
};

export const Basic = (args: SkeletonDisplayTextProps) => (
  <SkeletonContainer>
    <SkeletonDisplayText {...args} />
  </SkeletonContainer>
);

Basic.args = {
  numberOfLines: 1,
};
