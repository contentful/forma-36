import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { UsageCardProps } from '../src';
import { UsageCard } from '../src/CompoundUsageCard';
import { TextLink } from '@contentful/f36-text-link';
import { UsageCount } from '@contentful/f36-usage-count';

export default {
  component: UsageCard,
  title: 'Components/UsageCard',
  argTypes: {
    variant: { control: 'select', options: ['usage', 'info'] },
  },
} as Meta;

interface StoryArgs {
  variant: UsageCardProps['variant'];
  children?: React.ReactNode;
}

export const Default: StoryObj<Pick<UsageCardProps, 'variant'> & StoryArgs> = {
  render: ({ variant }) => {
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
            This is a description of the usage card.
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
          variant="periodic"
          value={150}
          valueUnit="GB"
          periodType="year"
        />
      </UsageCard>
    );
  },
};

Default.args = {
  variant: 'usage',
};
