import React from 'react';
import { Stack, TextLink } from '@contentful/f36-components';
import { ExternalLinkIcon } from '@contentful/f36-icons';

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
        icon={<ExternalLinkIcon />}
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
