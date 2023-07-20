import React from 'react';
import { Stack, Note } from '@contentful/f36-components';

export default function NoteVariationsExample() {
  return (
    <Stack flexDirection="column">
      <Note variant="neutral">Neutral</Note>
      <Note>Primary</Note>
      <Note variant="positive">Positive</Note>
      <Note variant="warning">Warning</Note>
      <Note variant="negative">Negative</Note>
      <Note variant="premium">Premium</Note>
    </Stack>
  );
}
