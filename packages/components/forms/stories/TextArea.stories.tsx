import React from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { TextArea, TextAreaProps } from '../src/textarea';

export default {
  title: 'Form Elements/TextArea',
  component: TextArea,
};

export const Basic = (args: TextAreaProps) => <TextArea {...args} />;
Basic.args = {
  label: 'My textarea',
  placeholder: 'Placeholder',
  id: 'textarea',
};

export const Overview = () => {
  return (
    <Flex flexDirection="column">
      <SectionHeading as="h3" marginBottom="spacingS">
        Textarea
      </SectionHeading>

      <TextArea id="textarea" name="textarea" label="My textarea" />

      <SectionHeading as="h3" marginTop="spacingL" marginBottom="spacingS">
        Textarea with error
      </SectionHeading>

      <TextArea
        id="textarea-with-error"
        name="textarea-with-error"
        label="My textarea with error"
        validationMessage="This field must have a value"
      />

      <SectionHeading as="h3" marginTop="spacingL" marginBottom="spacingS">
        Textarea disabled
      </SectionHeading>

      <TextArea
        id="textarea-disabled"
        name="textarea-disabled"
        label="My disabled textarea"
        isDisabled
      />
    </Flex>
  );
};
