import React, { useState } from 'react';
import { Button, Modal, Paragraph, Heading } from '@contentful/f36-components';

export default function ModalGeneralUsageExample() {
  const [isShown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal
        isShown={isShown}
        onClose={() => setShown(false)}
        header={<Modal.Header title="Modal title" subtitle="subtitle" />}
      >
        <Heading>
          First entry published! It can now be fetched via the APIs
        </Heading>
        <Paragraph>
          To discover more about how to consume content from the APIs, go to
          Space Home.
        </Paragraph>
      </Modal>
    </>
  );
}
