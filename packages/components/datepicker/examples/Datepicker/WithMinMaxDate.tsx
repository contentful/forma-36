import React, { useState } from 'react';
import { Datepicker } from '@contentful/f36-components';

export default function WithMinMaxDateExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const fromDate = new Date();
  const twoYearsFromNow = new Date(
    new Date(fromDate).setFullYear(fromDate.getFullYear() + 2),
  );

  return (
    <Datepicker
      selected={selectedDay}
      onSelect={setSelectedDay}
      fromDate={fromDate}
      toDate={twoYearsFromNow}
    />
  );
}
