import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Calendar } from '../src';
import type { CalendarProps } from '../src';

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
      fromYear={2022}
      toYear={2025}
    />
  );
};
