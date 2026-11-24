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
      <Modal
        isShown={isShown}
        onClose={() => setShown(false)}
        size={size}
        header={<Modal.Header title="A modal with a specific size" />}
        controls={
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
        }
      >
        <Text>
          My size is <strong>{size}</strong>
        </Text>
      </Modal>
    </>
  );
}
