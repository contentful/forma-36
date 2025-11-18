import React from 'react';
import { Pill } from '@contentful/f36-components';
import { DotsSixVerticalIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
export default function DragHandleComponentPillExample() {
  return (
    <Pill
      isDraggable
      label="example.user@contentful.com"
      dragHandleComponent={
        <DotsSixVerticalIcon
          aria-label="Drag handler"
          color={tokens.colorPrimary}
        />
      }
    />
  );
}
