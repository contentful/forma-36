import React from 'react';
import { Note } from '@contentful/f36-components';
import { PuzzlePieceIcon } from '@contentful/f36-icons';

export default function WithCustomIconExample() {
  return (
    <Note variant="neutral" icon={<PuzzlePieceIcon />}>
      Information that is relevant to the context the user is currently in.
    </Note>
  );
}
