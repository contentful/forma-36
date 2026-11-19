import React, { useState } from 'react';
import { Button, DisplayModal, Text } from '@contentful/f36-components';
import { CheckCircleIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

export default function ModalDisplayExample() {
  const [isShown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Show display modal</Button>
      <DisplayModal
        illustration={
          <CheckCircleIcon
            color={tokens.green500}
            style={{ width: 64, height: 64 }}
          />
        }
        title="Set up your first content type"
        subtitle="It only takes a minute"
        isShown={isShown}
        onClose={() => setShown(false)}
        controls={
          <Button variant="primary" onClick={() => setShown(false)}>
            Create content type
          </Button>
        }
      >
        <Text>
          Content types define the structure of your entries, such as a blog
          post or a product.
        </Text>
      </DisplayModal>
    </>
  );
}
