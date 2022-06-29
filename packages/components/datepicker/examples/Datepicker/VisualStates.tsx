import React, { useState } from 'react';
import { SectionHeading } from '@contentful/f36-components';
import { Datepicker } from '@contentful/f36-datepicker';

export default function VisualStatesExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <>
      <SectionHeading>Disabled</SectionHeading>
      <Datepicker isDisabled selected={selectedDay} onSelect={setSelectedDay} />
      <br />
      <SectionHeading>Invalid</SectionHeading>
      <Datepicker isInvalid selected={selectedDay} onSelect={setSelectedDay} />
    </>
  );
}
