import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { UsageCard, type UsageCardProps } from '../src/UsageCard';

export default {
  component: UsageCard,
  title: 'Components/UsageCard',
} as Meta;

export const Default: Story<UsageCardProps> = (args) => {
  return <UsageCard {...args}>UsageCard</UsageCard>;
};
