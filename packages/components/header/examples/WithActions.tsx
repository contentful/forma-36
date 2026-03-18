import React from 'react';
import { Button, Flex, Header } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function HeaderExample() {
  return (
    <Header
      title="Article"
      actions={
        <Flex
          alignItems="center"
          gap={tokens.spacingS}
          justifyContent="flex-end"
        >
          <Button variant="secondary" size="small">
            Suggest Alternatives
          </Button>
          <Button variant="positive" size="small">
            Save
          </Button>
        </Flex>
      }
    />
  );
}
