import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Datepicker } from '../src/Datepicker';
import type { DatepickerProps } from '../src/Datepicker';

export default {
  component: Datepicker,
  title: 'Components/Datepicker',
} as Meta;

export const Default: Story<DatepickerProps> = (args) => {
  return <Datepicker {...args}>Datepicker</Datepicker>;
};
