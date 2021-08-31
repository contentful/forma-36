import React from 'react';
import { Flex } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { SectionHeading } from '@contentful/f36-typography';

import { Textarea, TextareaProps } from '../src/textarea';

export default {
  title: 'Form Elements/Textarea',
  component: Textarea,
};

export const Basic = (args: TextareaProps) => <Textarea {...args} />;
Basic.args = {
  id: 'textarea',
  placeholder: 'Placeholder',
  label: 'My textarea',
};

export const UsingRef = () => {
  const textareaRef = React.createRef<HTMLTextAreaElement>();

  return (
    <>
      <Textarea
        id="textarea"
        name="textarea"
        label="My textarea"
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
};

export const Overview = () => {
  return (
    <Flex flexDirection="column">
      <SectionHeading as="h3" marginBottom="spacingS">
        Textarea
      </SectionHeading>

      <Textarea id="textarea" name="textarea" label="My textarea" />

      <SectionHeading as="h3" marginTop="spacingL" marginBottom="spacingS">
        Textarea with error
      </SectionHeading>

      <Textarea
        id="textarea-with-error"
        name="textarea-with-error"
        label="My textarea with error"
        isInvalid
      />

      <SectionHeading as="h3" marginTop="spacingL" marginBottom="spacingS">
        Textarea disabled
      </SectionHeading>

      <Textarea
        id="textarea-disabled"
        name="textarea-disabled"
        label="My disabled textarea"
        isDisabled
      />
    </Flex>
  );
};
