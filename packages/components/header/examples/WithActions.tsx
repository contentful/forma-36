import React from 'react';
import { Button, Flex } from '@contentful/f36-components';
import { Header } from '@contentful/f36-header';
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
