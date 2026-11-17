import React, { useState } from 'react';
import { Button, Modal, ModalBasic, Text } from '@contentful/f36-components';

export default function ModalBasicComponentExample() {
  const [isShown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Add to release</Button>
      <ModalBasic
        title="Add to release"
        subtitle="Spring campaign"
        isShown={isShown}
        onClose={() => setShown(false)}
        controls={
          <Modal.Controls>
            <Button
              size="small"
              variant="secondary"
              onClick={() => setShown(false)}
            >
              Cancel
            </Button>
            <Button
              size="small"
              variant="primary"
              onClick={() => setShown(false)}
            >
              Add to release
            </Button>
          </Modal.Controls>
        }
      >
        <Text>This entry will be published together with the release.</Text>
      </ModalBasic>
    </>
  );
}
