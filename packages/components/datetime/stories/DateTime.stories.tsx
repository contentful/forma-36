import React from 'react';
import type { StoryFn, StoryObj, Meta } from '@storybook/react-vite';
import { Flex, Grid } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { DateTime, type DateTimeProps } from '../src/DateTime/DateTime';

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
} as Meta;

export const Basic: StoryObj<DateTimeProps> = {
  args: {
    date: '2020-08-17T15:45:00',
  },
};

export const Overview: StoryFn<DateTimeProps> = () => {
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
};
