import React, { useState } from 'react';
import { Datepicker, Flex, Box } from '@contentful/f36-components';

export default function FormatExample() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <Flex marginBottom="spacingM" flexDirection="column" fullWidth>
      <Box marginBottom="spacingM">
        <Datepicker
          dateFormat="do LLL yyyy"
          selected={selectedDay}
          onSelect={setSelectedDay}
        />
      </Box>
      <Box>
        <Datepicker
          dateFormat="dd.MM.yyyy"
          selected={selectedDay}
          onSelect={setSelectedDay}
        />
      </Box>
    </Flex>
  );
}
