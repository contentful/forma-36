import React from 'react';
import { DragHandle, Stack } from '@contentful/f36-components';

export default function DragHandleVariantsExample() {
  return (
    <Stack>
      <DragHandle label="Drag handle" />
      <DragHandle variant="transparent" label="Transparent drag handle" />
    </Stack>
  );
}
