import React from 'react';
import { Stack, Note } from '@contentful/f36-components';

export default function NoteWithTitleExample() {
  return (
    <Stack flexDirection="column">
      <Note title="Neutral title" variant="neutral">
        Neutral, use as default
      </Note>
      <Note title="Primary title">Primary</Note>
      <Note title="Positive title" variant="positive">
        Positive
      </Note>
      <Note title="Warning title" variant="warning">
        Warning
      </Note>
      <Note title="Negative title" variant="negative">
        Negative
      </Note>
      <Note title="Premium title" variant="premium">
        Premium
      </Note>
    </Stack>
  );
}
