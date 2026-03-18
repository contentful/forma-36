import React, { useState } from 'react';
import { Datepicker, SectionHeading } from '@contentful/f36-components';

export default function VisualStatesExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <>
      <SectionHeading>Disabled</SectionHeading>
      <Datepicker
        selected={selectedDay}
        onSelect={setSelectedDay}
        inputProps={{ isDisabled: true }}
      />
      <br />
      <SectionHeading>Invalid</SectionHeading>
      <Datepicker
        selected={selectedDay}
        onSelect={setSelectedDay}
        inputProps={{ isInvalid: true }}
      />
    </>
  );
}
