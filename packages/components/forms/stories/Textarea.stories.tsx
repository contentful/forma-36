import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { SectionHeading } from '@contentful/f36-typography';

import { Textarea } from '../src';

export default {
  title: 'Form Elements/Textarea',
  component: Textarea,
} as Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {
    id: 'textarea',
    placeholder: 'Placeholder',
  },
};

export const UsingRef: Story = {
  render: () => {
    const textareaRef = React.createRef<HTMLTextAreaElement>();

    return (
      <>
        <Textarea
          id="textarea"
          name="textarea"
          aria-label="My textarea"
          placeholder="Placeholder"
          ref={textareaRef}
        />
        <Flex marginTop="spacingL">
          <Button onClick={() => textareaRef.current.focus()}>
            Focus Textarea with ref
          </Button>
        </Flex>
      </>
    );
  },
};

export const Overview: Story = {
  render: () => {
    return (
      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Textarea
        </SectionHeading>

        <Textarea
          id="textarea"
          name="textarea"
          aria-label="My textarea"
          placeholder="Placeholder"
        />

        <SectionHeading as="h3" marginTop="spacingL" marginBottom="spacingS">
          Textarea with error
        </SectionHeading>

        <Textarea
          id="textarea-with-error"
          name="textarea-with-error"
          aria-label="My textarea with error"
          placeholder="Placeholder"
          isInvalid
        />

        <SectionHeading as="h3" marginTop="spacingL" marginBottom="spacingS">
          Textarea disabled
        </SectionHeading>

        <Textarea
          id="textarea-disabled"
          name="textarea-disabled"
          aria-label="My disabled textarea"
          placeholder="Placeholder"
          isDisabled
        />
      </Flex>
    );
  },
};
