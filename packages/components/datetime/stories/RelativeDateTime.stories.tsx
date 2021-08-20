import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { RelativeDateTime } from '../src/RelativeDateTime';
import type { RelativeDateTimeProps } from '../src/RelativeDateTime';

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
} as Meta;

export const Basic: Story<RelativeDateTimeProps> = (args) => (
  <RelativeDateTime {...args} />
);
Basic.args = {
  date: '2021-08-17T15:45:00+02:00',
};

export const WithDateBeforeBaseDate: Story<RelativeDateTimeProps> = () => (
  <RelativeDateTime date="2021-08-10 12:00:00" baseDate="2021-08-20 12:00:00" />
);

export const WithDateAfterBaseDate: Story<RelativeDateTimeProps> = () => (
  <RelativeDateTime date="2021-08-20 12:00:00" baseDate="2021-08-10 12:00:00" />
);
