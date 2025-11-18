import React, { useState } from 'react';
import {
  ModalConfirm,
  ModalLauncher,
  Text,
  Button,
  Stack,
} from '@contentful/f36-components';

export default function ModalLauncherExample() {
  const [result, setResult] = useState('');

  const onClickHandler = () => {
    ModalLauncher.open<string>(({ isShown, onClose }) => (
      <ModalConfirm
        isShown={isShown}
        onCancel={() => {
          onClose('canceled');
        }}
        onConfirm={() => {
          onClose('confirmed');
        }}
      >
        <Text>Do you want to confirm your action?</Text>
      </ModalConfirm>
    )).then((text) => {
      setResult(text);
    });
  };

  return (
    <Stack flexDirection="row">
      <Button onClick={onClickHandler}>Open a modal</Button>
      {result && (
        <Text>
          Result is <strong>{result}</strong>
        </Text>
      )}
    </Stack>
  );
}
