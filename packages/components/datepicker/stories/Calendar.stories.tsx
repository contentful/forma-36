import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Calendar } from '../src';
import type { CalendarProps } from '../src';

const testDate = new Date('2022-04-15');

export default {
  component: Calendar,
  title: 'Components/Datepicker/Calendar',
} as Meta;

export const Default: Story<CalendarProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

  return (
    <Calendar
      {...args}
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      defaultMonth={selectedDay}
    />
  );
};

export const WithMinMaxDate: Story<CalendarProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

  return (
    <Calendar
      {...args}
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      fromDate={testDate}
      toYear={2025}
      defaultMonth={selectedDay}
    />
  );
};

export const WithMultipleMonths: Story<CalendarProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

  return (
    <Calendar
      {...args}
      mode="single"
      numberOfMonths={2}
      selected={selectedDay}
      onSelect={setSelectedDay}
      defaultMonth={selectedDay}
    />
  );
};
