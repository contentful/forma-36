import React, { useState } from 'react';
import { Button, Modal, Badge } from '@contentful/f36-components';

export default function ModalWithChildComponentInHeaderExample() {
  const [isShown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Open modal</Button>
      <Modal onClose={() => setShown(false)} isShown={isShown}>
        {() => (
          <>
            <Modal.Header
              title="With Child Component"
              onClose={() => setShown(false)}
            >
              <Badge>Child Component</Badge>
            </Modal.Header>
            <Modal.Content>Modal content</Modal.Content>
          </>
        )}
      </Modal>
    </>
  );
}
