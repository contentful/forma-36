import React from 'react';
import {
  Button,
  ModalConfirm,
  Text,
  ModalLauncher,
} from '@contentful/f36-components';
import { FileArchiveIcon } from '@contentful/f36-icons';

export default function ModalConfirmPromptExample() {
  const onArchive = () => {
    ModalLauncher.open<boolean>(({ isShown, onClose }) => {
      return (
        <ModalConfirm
          title="This entry is linked in other entries"
          intent="negative"
          isShown={isShown}
          onCancel={() => {
            onClose(false);
          }}
          onConfirm={() => {
            onClose(true);
          }}
          confirmLabel="Archive entry anyway"
          cancelLabel="Cancel"
        >
          <Text>
            There are 2 other entries that link to this entry. If you archive
            it, your app(s) might break.
          </Text>
        </ModalConfirm>
      );
    }).then((result) => {
      if (result === true) {
        alert('archived');
      }
    });
  };

  return (
    <Button
      variant="negative"
      startIcon={<FileArchiveIcon />}
      onClick={onArchive}
    >
      Archive entry
    </Button>
  );
}
