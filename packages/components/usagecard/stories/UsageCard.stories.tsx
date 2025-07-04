import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { UsageCardProps } from '../src';
import { UsageCard } from '../src/CompoundUsageCard';

export default {
  component: UsageCard,
  title: 'Components/UsageCard',
} as Meta;

interface StoryArgs {
  variant: UsageCardProps['variant'];
  children?: React.ReactNode;
}

export const Default: Story<Pick<UsageCardProps, 'variant'> & StoryArgs> = ({
  variant,
}) => {
  return (
    <UsageCard
      variant={variant}
      header={
        <UsageCard.Header
          title="Usage Card Header"
          tooltip="This is a tooltip"
        />
      }
      description={
        <UsageCard.Description
          linkTitle="Learn more"
          link="https://www.contentful.com"
        >
          This is a description of the usage card.
        </UsageCard.Description>
      }
    ></UsageCard>
  );
};
