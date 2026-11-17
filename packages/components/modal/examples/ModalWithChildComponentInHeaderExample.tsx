import React, { useState } from 'react';
import { Button, Modal, Badge } from '@contentful/f36-components';

export default function ModalWithChildComponentInHeaderExample() {
  const [isShown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        isShown={isShown}
        onClose={() => setShown(false)}
        header={
          <Modal.Header title="With Child Component">
            <Badge>Child Component</Badge>
          </Modal.Header>
        }
      >
        Modal content
      </Modal>
    </>
  );
}
