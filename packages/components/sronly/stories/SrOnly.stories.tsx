import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { SrOnly } from '../src/SrOnly';
import { TextLink } from '@contentful/f36-text-link';
import { Stack } from '@contentful/f36-core';

export default {
  title: 'Components/SrOnly',
  component: SrOnly,
  parameters: {
    propTypes: SrOnly['__docgenInfo'],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: { testId: string }) => {
  return (
    <Stack flexDirection="column" spacing="spacingM">
      <SrOnly>
        <TextLink href="#main-content">Skip to main content</TextLink>
      </SrOnly>
      <nav aria-labelledby="main-navigation">
        <Stack flexDirection="row" spacing="spacingS">
          <SrOnly>
            <SectionHeading as="h2" id="main-navigation">
              Main Navigation
            </SectionHeading>
          </SrOnly>
          <TextLink href="#">Menu Element</TextLink>
          <TextLink href="#">Menu Element</TextLink>
          <TextLink href="#">Menu Element</TextLink>
          <TextLink href="#">Menu Element</TextLink>
          <TextLink href="#">Menu Element</TextLink>
          <TextLink href="#">Menu Element</TextLink>
        </Stack>
      </nav>
      <div id="main-content">
        <SectionHeading as="h2">Main Content</SectionHeading>
        <p>
          When using a screenreader you will get offered a skip to main content
          link.
        </p>
        <p>
          The navigation has a SrOnly wrapped heading which it is labelled by,
          to help a screenreader user, to identify which kind of navigation they
          are on.
          <SrOnly as="span">End of Main Content</SrOnly>
        </p>
      </div>
    </Stack>
  );
};
