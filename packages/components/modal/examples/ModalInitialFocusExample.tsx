import React, { useState, useRef } from 'react';
import {
  Button,
  Modal,
  FormControl,
  TextInput,
} from '@contentful/f36-components';

export default function ModalInitialFocusExample() {
  const [isShown, setShown] = useState(false);
  const [contentTypeName, setContentTypeName] = useState('');
  const inputRef = useRef();
  return (
    <>
      <Button onClick={() => setShown(true)}>Create new content type</Button>
      <Modal
        onClose={() => setShown(false)}
        shouldCloseOnOverlayClick
        shouldCloseOnEscapePress
        isShown={isShown}
        initialFocusRef={inputRef}
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
                  ref={inputRef}
                  maxLength={20}
                  value={contentTypeName}
                  placeholder="For example Product, Blog Post, Author"
                  onChange={(e) => {
                    setContentTypeName(e.target.value);
                  }}
                />
              </FormControl>
            </Modal.Content>
          </>
        )}
      </Modal>
    </>
  );
}
