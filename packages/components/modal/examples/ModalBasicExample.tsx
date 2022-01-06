import React, { useState } from 'react';
import {
  Button,
  Modal,
  FormControl,
  TextInput,
} from '@contentful/f36-components';

export default function ModalBasicExample() {
  const [isShown, setShown] = useState(false);
  const [contentTypeName, setContentTypeName] = useState('');
  return (
    <>
      <Button onClick={() => setShown(true)}>Create new content type</Button>
      <Modal
        onClose={() => setShown(false)}
        shouldCloseOnOverlayClick
        shouldCloseOnEscapePress
        isShown={isShown}
      >
        {() => (
          <>
            <Modal.Header
              title="Create new content type"
              onClose={() => setShown(false)}
            />
            <Modal.Content>
              <FormControl>
                <FormControl.Label isRequired>Name</FormControl.Label>
                <TextInput
                  maxLength={20}
                  value={contentTypeName}
                  placeholder="For example Product, Blog Post, Author"
                  onChange={(e) => {
                    setContentTypeName(e.target.value);
                  }}
                />
              </FormControl>
            </Modal.Content>
            <Modal.Controls>
              <Button
                size="small"
                variant="transparent"
                onClick={() => setShown(false)}
              >
                Close
              </Button>
              <Button
                size="small"
                variant="positive"
                isDisabled={contentTypeName.length === 0}
                onClick={() => {
                  alert('Created: ' + contentTypeName);
                  setContentTypeName('');
                  setShown(false);
                }}
              >
                Create
              </Button>
            </Modal.Controls>
          </>
        )}
      </Modal>
    </>
  );
}
