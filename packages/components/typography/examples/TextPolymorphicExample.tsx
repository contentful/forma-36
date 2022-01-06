import React from 'react';
import { Text, Stack } from '@contentful/f36-components';

export default function TextPolymorphicExample() {
  return (
    <Stack flexDirection="column">
      <Text marginBottom="spacingM" as="i">
        Italic
      </Text>
      <Text marginBottom="spacingM" as="u">
        Underline
      </Text>
      <Text marginBottom="spacingM" as="del">
        Deleted
      </Text>
      <Text marginBottom="spacingM" as="s">
        Strike Through
      </Text>
    </Stack>
  );
}
