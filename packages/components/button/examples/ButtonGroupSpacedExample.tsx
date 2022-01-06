import React from 'react';
import { ButtonGroup, Button } from '@contentful/f36-components';

export default function ButtonGroupSpacedExample() {
  return (
    <ButtonGroup variant="spaced" spacing="spacingM">
      <Button variant="secondary" size="small">
        Duplicate
      </Button>
      <Button variant="secondary" size="small">
        Unpublish
      </Button>
      <Button variant="positive" size="small">
        Publish
      </Button>
      <Button variant="secondary" size="small">
        Add to release
      </Button>
    </ButtonGroup>
  );
}
