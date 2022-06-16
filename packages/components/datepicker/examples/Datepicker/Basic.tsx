import React, { useState } from 'react';
import { Datepicker } from '@contentful/f36-datepicker';

export default function DatepickerExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return <Datepicker selected={selectedDay} onSelect={setSelectedDay} />;
}
