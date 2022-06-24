import React, { useState } from 'react';
import { Calendar } from '@contentful/f36-datepicker';

export default function MinMaxExample() {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);
  const max = today.getFullYear() + 5;

  return (
    <Calendar
      mode="single"
      fromDate={today}
      toYear={max}
      selected={selectedDay}
      onSelect={setSelectedDay}
    />
  );
}
