import React, { useState } from 'react';
import { TextInput, IconButton, Stack } from '@contentful/f36-components';
import { LockSimpleIcon, LockSimpleOpenIcon } from '@contentful/f36-icons';

export default function TextInputGroupExample() {
  const [isFirstLocked, setFirstLocked] = useState(true);
  const [isSecondLocked, setSecondLocked] = useState(true);
  return (
    <Stack flexDirection="column">
      <TextInput.Group>
        <TextInput
          aria-label="Content type name"
          id="content-type-name"
          defaultValue="blog"
          isDisabled={isFirstLocked}
        />
        <IconButton
          variant="secondary"
          icon={isFirstLocked ? <LockSimpleIcon /> : <LockSimpleOpenIcon />}
          onClick={() => {
            setFirstLocked((value) => !value);
          }}
          aria-label="Unlock"
        />
      </TextInput.Group>
      <TextInput.Group spacing="spacingS">
        <TextInput
          aria-label="Content type name"
          id="content-type-name-2"
          defaultValue="blog"
          isDisabled={isSecondLocked}
        />
        <IconButton
          variant="secondary"
          icon={isSecondLocked ? <LockSimpleIcon /> : <LockSimpleOpenIcon />}
          onClick={() => {
            setSecondLocked((value) => !value);
          }}
          aria-label="Unlock"
        />
      </TextInput.Group>
    </Stack>
  );
}
