import React, { useState } from 'react';
import {
  Button,
  Modal,
  FormControl,
  Form,
  TextInput,
} from '@contentful/f36-components';

export default function ModalWithFormExample() {
  const [isShown, setShown] = useState(false);
  const [contentTypeName, setContentTypeName] = useState('');

  const submitForm = () => {
    if (contentTypeName.length === 0) {
      return;
    }

    alert('Created: ' + contentTypeName);
    setContentTypeName('');
    setShown(false);
  };

  return (
    <>
      <Button onClick={() => setShown(true)}>Create new content type</Button>
      <Modal onClose={() => setShown(false)} isShown={isShown}>
        {() => (
          <>
            <Modal.Header
              title="Create new content type"
              onClose={() => setShown(false)}
            />
            <Modal.Content>
              <Form onSubmit={submitForm}>
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
              </Form>
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
                onClick={submitForm}
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
