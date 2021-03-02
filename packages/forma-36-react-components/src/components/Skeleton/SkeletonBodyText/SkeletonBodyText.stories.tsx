import React from 'react';

import { SkeletonBodyText, SkeletonBodyTextProps } from './SkeletonBodyText';
import { SkeletonText } from '../SkeletonText/SkeletonText';
import { SkeletonContainer } from '../SkeletonContainer/SkeletonContainer';

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
