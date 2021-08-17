import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { DateTime } from '../src/DateTime';
import type { DateTimeProps } from '../src/DateTime';

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

export const Default: Story<DateTimeProps> = (args) => <DateTime {...args} />;
Default.args = {
  date: '2020-08-17T15:45:00',
};
