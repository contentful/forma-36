import React from 'react';
import { TextLink, Stack, Heading } from '@contentful/f36-components';

import { ExternalLinkIcon } from '@contentful/f36-icons';
import { useFrontMatterContext } from '../utils/frontMatterContext';

const PROPS_TITLE = 'Props (API reference)';

interface CustomHeading2Props {
  children: string;
}

export const CustomHeading2 = (props: CustomHeading2Props) => {
  const { storybook } = useFrontMatterContext() ?? {};

  if (props.children.includes(PROPS_TITLE) && storybook) {
    return (
      <Stack
        justifyContent="space-between"
        marginTop="spacing2Xl"
        marginBottom="spacingM"
      >
        <Heading as="h2" marginTop="none" marginBottom="none" {...props} />

        <TextLink
          href={storybook}
          target="_blank"
          alignIcon="end"
          icon={<ExternalLinkIcon />}
        >
          Open in Storybook
        </TextLink>
      </Stack>
    );
  }

  return <Heading as="h2" marginTop="spacing2Xl" {...props} />;
};
