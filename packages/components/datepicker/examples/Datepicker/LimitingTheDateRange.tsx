import React, { useState } from 'react';
import { Datepicker } from '@contentful/f36-components';

export default function LimitingTheDateRangeExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const fromDate = new Date();
  const twoYearsFromNow = new Date(
    new Date(fromDate).setFullYear(fromDate.getFullYear() + 2),
  );

  return (
    <Datepicker
      fromDate={fromDate}
      toDate={twoYearsFromNow}
      selected={selectedDay}
      onSelect={setSelectedDay}
    />
  );
}
