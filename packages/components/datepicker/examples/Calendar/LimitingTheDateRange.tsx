import React, { useState } from 'react';
import { Calendar } from '@contentful/f36-components';

export default function LimitingTheDateRangeExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const fromDate = new Date();
  const fiveYearsFromNow = selectedDay.getFullYear() + 5;

  return (
    <Calendar
      mode="single"
      fromDate={fromDate}
      toYear={fiveYearsFromNow}
      selected={selectedDay}
      onSelect={setSelectedDay}
    />
  );
}
