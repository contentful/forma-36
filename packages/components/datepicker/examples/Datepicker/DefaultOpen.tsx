import React, { useState } from 'react';
import { Datepicker } from '@contentful/f36-components';

export default function DefaultOpenExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <Datepicker
      defaultIsOpen
      selected={selectedDay}
      onSelect={setSelectedDay}
    />
  );
}
