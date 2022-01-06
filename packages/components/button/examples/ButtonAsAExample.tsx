import React from 'react';
import { Button } from '@contentful/f36-components';

export default function ButtonAsAExample() {
  return (
    <Button as="a" href="https://www.contentful.com/" target="_blank">
      Visit Contentful
    </Button>
  );
}
