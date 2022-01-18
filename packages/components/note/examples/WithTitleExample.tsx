import React from 'react';
import { Stack, Note } from '@contentful/f36-components';

export default function NoteWithTitleExample() {
  return (
    <Stack flexDirection="column">
      <Note title="Primary title">Primary (default)</Note>
      <Note title="Positive title" variant="positive">
        Positive
      </Note>
      <Note title="Warning title" variant="warning">
        Warning
      </Note>
      <Note title="Negative title" variant="negative">
        Negative
      </Note>
    </Stack>
  );
}
