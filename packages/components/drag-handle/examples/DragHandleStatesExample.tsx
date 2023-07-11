import React from 'react';
import { DragHandle, Stack } from '@contentful/f36-components';

export default function DragHandleStatesExample() {
  return (
    <Stack>
      <DragHandle isActive label="Active drag handle" />
      <DragHandle isFocused label="Focus drag handle" />
      <DragHandle isHovered label="Hovered drag handle" />
    </Stack>
  );
}
