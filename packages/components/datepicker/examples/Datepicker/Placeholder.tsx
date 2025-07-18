import React, { useState } from 'react';
import { Datepicker } from '@contentful/f36-components';

export default function PlaceholderExample() {
  const [selectedDay, setSelectedDay] = useState(undefined);

  return (
    <Datepicker
      selected={selectedDay}
      onSelect={setSelectedDay}
      placeholder="Select a date"
    />
  );
}
