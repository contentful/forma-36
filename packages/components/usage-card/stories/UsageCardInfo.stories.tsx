import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { UsageCardProps } from '../src';
import { UsageCard } from '../src/CompoundUsageCard';
import { TextLink } from '@contentful/f36-text-link';
import { UsageCount } from '@contentful/f36-usage-count';

export default {
  component: UsageCard,
  title: 'Components/UsageCard',
} as Meta;

interface StoryArgs {
  variant: UsageCardProps['variant'];
  children?: React.ReactNode;
}

export const InfoCard: Story<Pick<UsageCardProps, 'variant'> & StoryArgs> = ({
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
        <UsageCard.Description>
          This is a description of the info card.
          {'  '}
          <TextLink
            target="_blank"
            rel="noopener noreferrer"
            href={'https://www.contentful.com'}
          >
            Learn more
          </TextLink>
        </UsageCard.Description>
      }
    >
      <UsageCount
        variant="consumption"
        value={150}
        valueUnit="GB"
        valueDescription="Used this month"
      />
    </UsageCard>
  );
};
