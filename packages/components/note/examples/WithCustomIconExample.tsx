import React from 'react';
import { Note } from '@contentful/f36-components';
import { PuzzleIcon } from '@contentful/f36-icons';

export default function WithCustomIconExample() {
  return (
    <Note variant="neutral" startIcon={<PuzzleIcon />}>
      Information that is relevant to the context the user is currently in.
    </Note>
  );
}
