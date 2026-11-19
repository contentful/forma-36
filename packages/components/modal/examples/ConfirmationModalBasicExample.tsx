import React, { useState } from 'react';
import { Button, ConfirmationModal, Text } from '@contentful/f36-components';

export default function ConfirmationModalExample() {
  const [isShown, setShown] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setShown(true)}>
        Publish entry
      </Button>
      <ConfirmationModal
        intent="positive"
        isShown={isShown}
        onCancel={() => {
          setShown(false);
        }}
        onConfirm={() => {
          setShown(false);
        }}
      >
        <Text>Do you really want to publish this entry?</Text>
      </ConfirmationModal>
    </>
  );
}
