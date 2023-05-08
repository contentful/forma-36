import React, { useState } from 'react';
import {
  Button,
  Modal,
  FormControl,
  Form,
  Select,
  Text,
} from '@contentful/f36-components';

export default function ModalSizesExample() {
  const [isShown, setShown] = useState(false);
  const [size, setSize] = useState('medium');
  return (
    <>
      <Form>
        <FormControl>
          <FormControl.Label>Select a width</FormControl.Label>
          <Select
            onChange={(e) => {
              setSize(e.target.value);
            }}
            value={size}
          >
            <Select.Option value="small">small</Select.Option>
            <Select.Option value="medium">medium</Select.Option>
            <Select.Option value="large">large</Select.Option>
            <Select.Option value="fullWidth">full width</Select.Option>
            <Select.Option value="fullscreen">full screen</Select.Option>
            <Select.Option value="333px">
              333px (specific width value)
            </Select.Option>
          </Select>
        </FormControl>
        <Button
          onClick={() => {
            setShown(true);
          }}
        >
          Click to open a modal
        </Button>
      </Form>
      <Modal onClose={() => setShown(false)} isShown={isShown} size={size}>
        {() => (
          <>
            <Modal.Header
              title="A modal with a specific size"
              onClose={() => setShown(false)}
            />
            <Modal.Content>
              <Text>
                My size is <strong>{size}</strong>
              </Text>
            </Modal.Content>
            <Modal.Controls>
              <Button
                variant="transparent"
                size="small"
                onClick={() => setShown(false)}
              >
                Close
              </Button>
              <Button
                variant="positive"
                size="small"
                onClick={() => setShown(false)}
              >
                Confirm
              </Button>
            </Modal.Controls>
          </>
        )}
      </Modal>
    </>
  );
}
