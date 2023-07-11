import React from 'react';
import { Pill } from '@contentful/f36-components';
import { DragIcon } from '@contentful/f36-icons';

export default function DragHandleComponentPillExample() {
  return (
    <Pill
      isDraggable
      label="example.user@contentful.com"
      dragHandleComponent={
        <DragIcon aria-label="Drag handler" variant="primary" />
      }
    />
  );
}
