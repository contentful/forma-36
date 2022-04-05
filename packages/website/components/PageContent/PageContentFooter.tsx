import React from 'react';
import { Flex, TextLink, Stack, Heading } from '@contentful/f36-components';

import type { FrontMatter } from '../../types';

interface Props {
  github?: FrontMatter['github'];
}

export function PageContentFooter({ github }: Props) {
  return (
    <Flex flexDirection="column" marginTop="spacing2Xl">
      <Heading as="h2" id="help-improve-this-page">
        Help improve this page
      </Heading>
      <Stack>
        {github && (
          <TextLink href={github} target="_blank" rel="noopener noreferrer">
            Edit on Github
          </TextLink>
        )}

        <TextLink href="/introduction/contributing">
          Read the contribution guide
        </TextLink>
      </Stack>
    </Flex>
  );
}
