import React, { useState } from 'react';
import { Button, ModalConfirm, Text } from '@contentful/f36-components';

export default function ModalConfirmExample() {
  const [isShown, setShown] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setShown(true)}>
        Publish entry
      </Button>
      <ModalConfirm
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
      </ModalConfirm>
    </>
  );
}
