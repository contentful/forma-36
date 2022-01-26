import React from 'react';
import {
  ScreenReaderOnly,
  Stack,
  TextLink,
  SectionHeading,
} from '@contentful/f36-components';

export default function ScreenReaderOnlyExample() {
  return (
    <Stack flexDirection="column" spacing="spacingM">
      <ScreenReaderOnly>
        <TextLink href="#main-content">Skip to main content</TextLink>
      </ScreenReaderOnly>
      <nav aria-labelledby="main-navigation">
        <Stack flexDirection="row" spacing="spacingS">
          <ScreenReaderOnly>
            <SectionHeading as="h2" id="main-navigation">
              Main Navigation
            </SectionHeading>
          </ScreenReaderOnly>
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
          The navigation has a ScreenReaderOnly wrapped heading which it is
          labelled by, to help a screenreader user, to identify which kind of
          navigation they are on.
        </p>
      </div>
    </Stack>
  );
}
