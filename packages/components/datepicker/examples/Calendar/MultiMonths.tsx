import React, { useState } from 'react';
import { Calendar } from '@contentful/f36-datepicker';

export default function MultiMonthsExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      numberOfMonths={2}
    />
  );
}
