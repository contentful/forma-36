import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Datepicker } from '../src/Datepicker';
import type { DatepickerProps } from '../src/Datepicker';

export default {
  component: Datepicker,
  title: 'Components/Datepicker',
} as Meta;

export const Default: Story<DatepickerProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>();

  return (
    <Datepicker
      {...args}
      selected={selectedDay}
      onSelect={setSelectedDay}
      defaultIsOpen={true}
    />
  );
};

export const WithMinMaxDate: Story<DatepickerProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  return (
    <Datepicker
      {...args}
      selected={selectedDay}
      onSelect={setSelectedDay}
      fromDate={new Date()}
      toDate={new Date(new Date().setFullYear(new Date().getFullYear() + 2))}
      defaultIsOpen={true}
    />
  );
};

export const WithMultipleMonths: Story<DatepickerProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  return (
    <Datepicker
      {...args}
      selected={selectedDay}
      onSelect={setSelectedDay}
      numberOfMonths={2}
      defaultIsOpen={true}
    />
  );
};
