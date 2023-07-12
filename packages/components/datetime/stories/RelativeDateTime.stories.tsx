import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Grid } from '@contentful/f36-core';
import { SectionHeading, Paragraph } from '@contentful/f36-typography';

import { RelativeDateTime } from '../src/RelativeDateTime/RelativeDateTime';

export default {
  title: 'Components/DateTime/RelativeDateTime',
  component: RelativeDateTime,
  parameters: {
    controls: {
      matchers: {
        date: /date$/i,
      },
    },
  },
} as Meta<typeof RelativeDateTime>;

type Story = StoryObj<typeof RelativeDateTime>;

export const Basic: Story = {
  args: {
    date: '2021-08-17T15:45:00+02:00',
    baseDate: '2021-08-16T15:45:00+02:00',
  },
};

export const WithDateBeforeBaseDate: Story = {
  render: () => (
    <RelativeDateTime
      date="2021-08-10 12:00:00"
      baseDate="2021-08-20 12:00:00"
    />
  ),
};

export const WithDateAfterBaseDate: Story = {
  render: () => (
    <RelativeDateTime
      date="2021-08-20 12:00:00"
      baseDate="2021-08-10 12:00:00"
    />
  ),
};

export const Overview: Story = {
  render: () => {
    return (
      <Flex flexDirection="column">
        <Paragraph marginBottom="spacingL">
          (reference date is 17.08.2021 at 15:45)
        </Paragraph>

        <SectionHeading as="h3" marginBottom="spacingS">
          RelativeDateTime
        </SectionHeading>

        <Grid rowGap="spacingS" rows="repeat(5, auto)" marginBottom="spacingXl">
          <RelativeDateTime
            baseDate="2020-08-17T15:45:00"
            date="2020-07-17T15:45:00"
          />
          <RelativeDateTime
            baseDate="2020-08-17T15:45:00"
            date="2020-08-16T15:45:00"
          />
          <RelativeDateTime
            baseDate="2020-08-17T15:45:00"
            date="2020-08-17T10:45:00"
          />
          <RelativeDateTime
            baseDate="2020-08-17T15:45:00"
            date="2020-08-18T15:45:00"
          />
          <RelativeDateTime
            baseDate="2020-08-17T15:45:00"
            date="2020-09-17T15:45:00"
          />
        </Grid>

        <SectionHeading as="h3" marginBottom="spacingS">
          Relative to the current week
        </SectionHeading>

        <Grid rowGap="spacingS" rows="repeat(5, auto)">
          <RelativeDateTime
            baseDate="2020-07-17T15:45:00"
            date="2020-08-17T15:45:00"
            isRelativeToCurrentWeek
          />
          <RelativeDateTime
            baseDate="2020-08-17T15:45:00"
            date="2020-08-16T15:45:00"
            isRelativeToCurrentWeek
          />
          <RelativeDateTime
            baseDate="2020-08-17T15:45:00"
            date="2020-08-17T10:45:00"
            isRelativeToCurrentWeek
          />
          <RelativeDateTime
            baseDate="2020-08-17T15:45:00"
            date="2020-08-18T15:45:00"
            isRelativeToCurrentWeek
          />
          <RelativeDateTime
            baseDate="2020-08-17T15:45:00"
            date="2020-09-17T15:45:00"
            isRelativeToCurrentWeek
          />
        </Grid>
      </Flex>
    );
  },
};
