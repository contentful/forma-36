import React, { useState } from 'react';
import { Datepicker } from '@contentful/f36-components';
import { FormControl } from '@contentful/f36-forms';

export default function BasicExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <FormControl id="date" isRequired>
      <FormControl.Label>Date</FormControl.Label>
      <Datepicker selected={selectedDay} onSelect={setSelectedDay} />
      <FormControl.HelpText>Please enter a publish date</FormControl.HelpText>
    </FormControl>
  );
}
