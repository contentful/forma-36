import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Calendar } from '../src';
import type { CalendarProps } from '../src';
import { DateRange } from 'react-day-picker';

export default {
  component: Calendar,
  title: 'Components/Datepicker/Calendar',
} as Meta;

export const Default: Story<CalendarProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  return (
    <Calendar
      {...args}
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
    />
  );
};

export const WithFromToDates: Story<CalendarProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  return (
    <Calendar
      {...args}
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      fromDate={new Date('2022-05-16T16:50:10.249Z')}
      toYear={2025}
    />
  );
};

export const WithMultipleMonths: Story<CalendarProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  return (
    <Calendar
      {...args}
      mode="single"
      numberOfMonths={2}
      selected={selectedDay}
      onSelect={setSelectedDay}
    />
  );
};

export const WithRangeSelection: Story<CalendarProps> = (args) => {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <Calendar {...args} mode="range" selected={range} onSelect={setRange} />
  );
};
