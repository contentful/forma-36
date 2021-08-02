import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Skeleton } from '../src/Skeleton';
import type { SkeletonProps } from '../src/Skeleton';

export default {
  component: Skeleton,
  parameters: {
    propTypes: Skeleton['__docgenInfo'],
  },
  title: 'Components/Skeleton',
} as Meta;

export const Default: Story<SkeletonProps> = (args) => {
  return <Skeleton {...args}>Skeleton</Skeleton>;
};
