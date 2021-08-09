import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Textarea, TextareaProps } from './Textarea';
import { Button } from '@contentful/f36-button';

import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/TextArea',
  component: Textarea,
  parameters: {
    propTypes: [Textarea['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onBlur: { control: { disable: true } },
    onChange: { control: { disable: true } },
  },
};

export const Basic = (args: TextareaProps) => (
  <Textarea name="someInput" id="someInput" {...args} />
);

export const ControlFocusViaRef = (args: TextareaProps) => {
  const textareaRef = React.createRef<HTMLTextAreaElement>();

  return (
    <>
      <Textarea
        name="someInput"
        id="someInput"
        textareaRef={textareaRef}
        {...args}
      />
      <Flex marginTop="spacingL">
        <Button onClick={() => textareaRef.current.focus()}>
          Focus Textarea with ref
        </Button>
      </Flex>
    </>
  );
};

export const Overview = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Textarea default
      </SectionHeading>

      <Textarea
        name="someInput"
        id="someInput"
        placeholder="Placeholder value"
        rows={2}
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Textarea default with value
      </SectionHeading>

      <Textarea name="someInput" id="someInput" value="123456" rows={2} />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Textarea small width
      </SectionHeading>

      <Textarea
        name="someInput"
        id="someInput"
        width="small"
        value="123456"
        rows={2}
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Textarea medium width
      </SectionHeading>

      <Textarea
        name="someInput"
        id="someInput"
        width="medium"
        value="123456"
        rows={2}
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Textarea large width
      </SectionHeading>

      <Textarea
        name="someInput"
        id="someInput"
        width="large"
        value="123456"
        rows={2}
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Textarea with error
      </SectionHeading>

      <Textarea name="someInput" id="someInput" error value="123456" rows={2} />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Textarea disabled
      </SectionHeading>

      <Textarea
        name="someInput"
        id="someInput"
        disabled
        value="123456"
        rows={2}
      />
    </Flex>
  </>
);
