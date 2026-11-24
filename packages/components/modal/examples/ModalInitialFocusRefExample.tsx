import React, { useState, useRef } from 'react';
import {
  Button,
  Modal,
  FormControl,
  TextInput,
} from '@contentful/f36-components';

export default function ModalInitialFocusRefExample() {
  const [isShown, setShown] = useState(false);
  const inputRef = useRef(null);
  return (
    <>
      <Button onClick={() => setShown(true)}>Create new content type</Button>
      <Modal
        isShown={isShown}
        onClose={() => setShown(false)}
        initialFocusRef={inputRef}
        header={<Modal.Header title="Create new content type" />}
      >
        <FormControl>
          <FormControl.Label isRequired>Name</FormControl.Label>
          <TextInput
            ref={inputRef}
            maxLength={20}
            placeholder="For example Product, Blog Post, Author"
          />
        </FormControl>
      </Modal>
    </>
  );
}
