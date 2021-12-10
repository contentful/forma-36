import React from 'react';
import { Stack, Heading, TextLink } from '@contentful/f36-components';

import { ExternalLinkIcon } from '@contentful/f36-icons';

interface PropsHeadingProps {
  storybookPath: string;
}

export function PropsHeading({ storybookPath }: PropsHeadingProps) {
  return (
    <Stack
      justifyContent="space-between"
      marginTop="spacing2Xl"
      marginBottom="spacingL"
    >
      <Heading
        id="props-api-reference"
        as="h2"
        marginTop="none"
        marginBottom="none"
      >
        Props (API reference)
      </Heading>

      <TextLink
        href={`https://v4-f36-storybook.netlify.app/?path=${storybookPath}`}
        target="_blank"
        alignIcon="end"
        icon={<ExternalLinkIcon />}
      >
        Open in Storybook
      </TextLink>
    </Stack>
  );
}
