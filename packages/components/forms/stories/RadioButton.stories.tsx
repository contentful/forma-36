import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { RadioButton, RadioButtonProps } from '../src';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/RadioButton',
  component: RadioButton,
  parameters: {
    propTypes: [RadioButton['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const basic = (args: RadioButtonProps) => <RadioButton {...args} />;

basic.args = {
  id: 'Radio',
  name: 'some name',
};

export const overview = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingM">
      <SectionHeading as="h3" marginBottom="spacingS">
        Radio button default
      </SectionHeading>

      <RadioButton id="Radio" label="some label text" name="option1" />
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <SectionHeading as="h3" marginBottom="spacingS">
        Radio button checked
      </SectionHeading>

      <RadioButton
        id="Radio"
        isChecked
        label="some label text"
        name="option2"
      />
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <SectionHeading marginBottom="spacingS" as="h3">
        Radio button disabled
      </SectionHeading>

      <RadioButton
        id="Radio"
        label="some label text"
        isDisabled
        name="option3"
      />
    </Flex>
  </>
);
