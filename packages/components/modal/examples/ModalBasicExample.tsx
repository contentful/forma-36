import React, { useState } from 'react';
import { Button, Modal, Paragraph } from '@contentful/f36-components';

export default function ModalBasicExample() {
  const [isShown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal onClose={() => setShown(false)} isShown={isShown}>
        {() => (
          <>
            <Modal.Header title="Modal title" onClose={() => setShown(false)} />
            <Modal.Content>
              <Paragraph>Modal content is here!</Paragraph>
            </Modal.Content>
          </>
        )}
      </Modal>
    </>
  );
}
