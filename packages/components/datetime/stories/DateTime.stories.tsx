import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Grid } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { DateTime } from '../src/DateTime/DateTime';

export default {
  title: 'Components/DateTime',
  component: DateTime,
  parameters: {
    controls: {
      matchers: {
        date: /date$/,
      },
    },
  },
} as Meta<typeof DateTime>;

type Story = StoryObj<typeof DateTime>;

export const Basic: Story = {
  args: {
    date: '2020-08-17T15:45:00',
  },
};

export const Overview: Story = {
  render: () => {
    return (
      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Datetime formats
        </SectionHeading>

        <Grid rowGap="spacingS" rows="repeat(4, auto)">
          <DateTime date="2020-08-17T15:45:00" />
          <DateTime date="2020-08-17T15:45:00" format="day" />
          <DateTime date="2020-08-17T15:45:00" format="weekday" />
          <DateTime date="2020-08-17T15:45:00" format="time" />
        </Grid>
      </Flex>
    );
  },
};
