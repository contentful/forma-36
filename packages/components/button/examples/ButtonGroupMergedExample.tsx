import React from 'react';
import {
  Stack,
  ButtonGroup,
  Button,
  IconButton,
} from '@contentful/f36-components';
import { ChevronDownIcon, PlusIcon } from '@contentful/f36-icons';

export default function ButtonGroupMergedExample() {
  return (
    <Stack flexDirection="column">
      <ButtonGroup>
        <Button variant="secondary" size="small">
          Save
        </Button>
        <IconButton
          variant="secondary"
          size="small"
          aria-label="Add more"
          icon={<PlusIcon />}
        />
      </ButtonGroup>
      <ButtonGroup withDivider>
        <Button variant="positive">Publish changes</Button>
        <IconButton
          variant="positive"
          aria-label="Open dropdown"
          icon={<ChevronDownIcon />}
        />
      </ButtonGroup>
    </Stack>
  );
}
