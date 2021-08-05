import React from 'react';

import {
  SkeletonBodyText,
  SkeletonBodyTextProps,
} from '../src/SkeletonBodyText/SkeletonBodyText';
import { SkeletonText } from '../src/SkeletonText/SkeletonText';
import { SkeletonContainer } from '../src/SkeletonContainer/SkeletonContainer';

export default {
  title: 'Components/Skeleton/SkeletonBodyText',
  component: SkeletonText,
  parameters: {
    propTypes: [SkeletonText['__docgenInfo']],
  },
};

export const Basic = (args: SkeletonBodyTextProps) => (
  <SkeletonContainer>
    <SkeletonBodyText {...args} />
  </SkeletonContainer>
);

Basic.args = {
  numberOfLines: 2,
  offsetTop: 0,
  offsetLeft: 0,
  lineHeight: 16,
  marginBottom: 8,
};
