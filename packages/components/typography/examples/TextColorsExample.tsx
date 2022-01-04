import React from 'react';
import { Text, Stack } from '@contentful/f36-components';

export default function TextColorsExample() {
  return (
    <Stack flexDirection="column">
      <Text fontColor="blue500">I love Forma 36 design system.</Text>
      <Text fontColor="red500">I love Forma 36 design system.</Text>
      <Text fontColor="gray900">I love Forma 36 design system.</Text>
    </Stack>
  );
}
