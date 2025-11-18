import React from 'react';
import { Stack, TextLink } from '@contentful/f36-components';
import { ArrowSquareOutIcon } from '@contentful/f36-icons';

export default function TextLinkBasicExample() {
  return (
    <Stack>
      <TextLink
        href="https://contentful.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contentful Website
      </TextLink>
      <TextLink
        icon={<ArrowSquareOutIcon />}
        alignIcon="end"
        href="https://www.contentful.com/developers/docs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contentful Documentation
      </TextLink>
    </Stack>
  );
}
