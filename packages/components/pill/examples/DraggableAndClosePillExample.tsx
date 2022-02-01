import React from 'react';
import { Pill } from '@contentful/f36-components';

export default function DraggableAndClosePillExample() {
  return (
    <Pill
      testId="pill-item"
      label="test label"
      onClose={() => {}}
      onDrag={() => {}}
    />
  );
}
