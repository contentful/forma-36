import React from 'react';
import { Card, Text } from '@contentful/f36-components';

export default function WithLinkAndTargetExample() {
  return (
    <Card as="a" href="https://f36.contentful.com" target="_blank">
      <Text>
        Forma 36 is an open-source design system by Contentful created with the
        intent to reduce the overhead of creating UI by providing tools and
        guidance for digital teams building and extending Contentful products.
      </Text>
    </Card>
  );
}
