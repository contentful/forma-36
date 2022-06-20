import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Datepicker } from '../src/Datepicker';
import type { DatepickerProps } from '../src/Datepicker';

const testDate = new Date('2022-04-15');

export default {
  component: Datepicker,
  parameters: {
    chromatic: { delay: 1000 },
  },
  title: 'Components/Datepicker',
} as Meta;

export const Basic: Story<DatepickerProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

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
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

  return (
    <Datepicker
      {...args}
      selected={selectedDay}
      onSelect={setSelectedDay}
      fromDate={testDate}
      toDate={
        new Date(new Date(testDate).setFullYear(testDate.getFullYear() + 2))
      }
      defaultIsOpen={true}
    />
  );
};

export const WithMultipleMonths: Story<DatepickerProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

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
