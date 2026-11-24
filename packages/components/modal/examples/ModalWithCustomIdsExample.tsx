import React, { useState } from 'react';
import { Button, Modal } from '@contentful/f36-components';

export default function ModalWithCustomIdsExample() {
  const [isShown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        isShown={isShown}
        onClose={() => setShown(false)}
        header={
          <Modal.Header
            title="Modal title with custom id"
            subtitle="Subtitle with custom id"
            titleId="my-modal-title"
            subtitleId="my-modal-subtitle"
          />
        }
      >
        Modal content
      </Modal>
    </>
  );
}
