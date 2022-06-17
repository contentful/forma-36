import React, { useState } from 'react';
import { Datepicker } from '@contentful/f36-datepicker';

export default function FormatExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <>
      <Datepicker
        dateFormat="do LLL yyyy"
        selected={selectedDay}
        onSelect={setSelectedDay}
      />
      <br />
      <Datepicker
        dateFormat="dd.MM.yyyy"
        selected={selectedDay}
        onSelect={setSelectedDay}
      />
    </>
  );
}
