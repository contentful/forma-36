import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { css } from 'emotion';

import { UsageCardProps } from '../src';
import { UsageCard } from '../src/CompoundUsageCard';
import { Grid } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

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
    <Grid
      testId="usage-card-grid"
      className={css({
        gridTemplateColumns: 'repeat(4, 1fr)',
        maxWidth: `calc((280px * 4) + (${tokens.spacingM} * 3))`,
        marginTop: tokens.spacingM,
        marginBottom: tokens.spacingM,
        '@media (max-width: 1024px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
          maxWidth: `calc((280px * 2) + ${tokens.spacingM})`,
        },
      })}
    >
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
            This is a description of the usage card. It provides additional
            information about the content or purpose of the card.
          </UsageCard.Description>
        }
      ></UsageCard>
      <UsageCard
        variant={'info'}
        header={
          <UsageCard.Header
            title="This is an Info Card"
            tooltip="This is a tooltip for Info Card"
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
    </Grid>
  );
};
