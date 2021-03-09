import React from 'react';

import { Textarea, TextareaProps } from './Textarea';
import { Button } from './../Button';
import { SectionHeading } from '../Typography';
import { Flex } from '../Flex';

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
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea default</SectionHeading>
      </Flex>
      <Textarea
        name="someInput"
        id="someInput"
        placeholder="Placeholder value"
        rows={2}
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          Textarea default with value
        </SectionHeading>
      </Flex>
      <Textarea name="someInput" id="someInput" value="123456" rows={2} />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea small width</SectionHeading>
      </Flex>
      <Textarea
        name="someInput"
        id="someInput"
        width="small"
        value="123456"
        rows={2}
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea medium width</SectionHeading>
      </Flex>
      <Textarea
        name="someInput"
        id="someInput"
        width="medium"
        value="123456"
        rows={2}
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea large width</SectionHeading>
      </Flex>
      <Textarea
        name="someInput"
        id="someInput"
        width="large"
        value="123456"
        rows={2}
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea with error</SectionHeading>
      </Flex>
      <Textarea name="someInput" id="someInput" error value="123456" rows={2} />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea disabled</SectionHeading>
      </Flex>
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
