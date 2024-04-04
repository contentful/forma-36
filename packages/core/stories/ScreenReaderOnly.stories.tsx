import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeading, Paragraph } from '@contentful/f36-typography';
import { TextLink } from '@contentful/f36-text-link';
import { Stack } from '../src/Stack';
import { ScreenReaderOnly } from '../src/ScreenReaderOnly';

export default {
  title: 'Utilities/ScreenReaderOnly',
  component: ScreenReaderOnly,
  parameters: {
    propTypes: ScreenReaderOnly['__docgenInfo'],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta<typeof ScreenReaderOnly>;

type Story = StoryObj<typeof ScreenReaderOnly>;

export const Basic: Story = {
  render: () => {
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
          <Paragraph>
            When using a screenreader you will get offered a skip to main
            content link.
          </Paragraph>
          <Paragraph>
            The navigation has a ScreenReaderOnly wrapped heading which it is
            labelled by, to help a screenreader user, to identify which kind of
            navigation they are on.
            <ScreenReaderOnly as="span">End of Main Content</ScreenReaderOnly>
          </Paragraph>
        </div>
      </Stack>
    );
  },
};
