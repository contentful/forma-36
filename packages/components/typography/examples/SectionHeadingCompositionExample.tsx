import React from 'react';
import { SectionHeading, Flex, Paragraph } from '@contentful/f36-components';

export default function SectionHeadingCompositionExample() {
  return (
    <Flex flexDirection="column">
      <SectionHeading>About Apps</SectionHeading>
      <Paragraph>
        Build apps for your Contentful organization to extend the core
        functionality of the web app and optimize the workflow of editors.
      </Paragraph>
    </Flex>
  );
}
