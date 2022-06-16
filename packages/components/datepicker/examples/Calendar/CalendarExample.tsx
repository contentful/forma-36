import React, { useState } from 'react';
import { Calendar } from '@contentful/f36-datepicker';

export default function CalendarExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return <Calendar selected={selectedDay} onSelect={setSelectedDay} />;
}
