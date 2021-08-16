import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { DateTime } from '../src/DateTime';
import type { DateTimeProps } from '../src/DateTime';

export default {
  component: DateTime,
  parameters: {
    propTypes: DateTime['__docgenInfo'],
  },
  title: 'Components/DateTime',
} as Meta;

export const Default: Story<DateTimeProps> = (args) => {
  return <DateTime {...args}>DateTime</DateTime>;
};
