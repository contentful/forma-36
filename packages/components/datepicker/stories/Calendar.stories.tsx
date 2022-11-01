import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

import {
  Calendar,
  DayContent,
  DayContentProps,
  type CalendarProps,
} from '../src';

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

const CustomDayContent = ({
  date,
  displayMonth,
  activeModifiers,
}: DayContentProps) => {
  const styles = {
    scheduleIndicator: css({
      width: tokens.spacingS,
      height: tokens.spacing2Xs,
      borderRadius: tokens.borderRadiusSmall,
      backgroundColor: tokens.green400,
      position: 'absolute',
      bottom: '11%',
      left: '50%',
      transform: 'translate(-50%, -11%)',
    }),
  };

  return (
    <>
      <DayContent
        date={date}
        displayMonth={displayMonth}
        activeModifiers={activeModifiers}
      />
      {activeModifiers?.scheduled && (
        <span
          className={styles.scheduleIndicator}
          data-test-id={`schedule-indicator`}
        />
      )}
    </>
  );
};

export const WithCustomDayContent: Story<CalendarProps> = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

  return (
    <Calendar
      {...args}
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      defaultMonth={selectedDay}
      components={{ DayContent: CustomDayContent }}
      modifiers={{ scheduled: new Date('2022-04-20') }}
    />
  );
};
