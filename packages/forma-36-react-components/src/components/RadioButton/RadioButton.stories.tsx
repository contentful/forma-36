import React from 'react';

import { RadioButton, RadioButtonProps } from './RadioButton';
import { Flex } from '../Flex';
import { SectionHeading } from '../Typography';

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
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Radio button default</SectionHeading>
      </Flex>
      <RadioButton id="Radio" labelText="some label text" name="option1" />
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Radio button checked</SectionHeading>
      </Flex>
      <RadioButton
        id="Radio"
        checked
        labelText="some label text"
        name="option2"
      />
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Radio button disabled</SectionHeading>
      </Flex>
      <RadioButton
        id="Radio"
        labelText="some label text"
        disabled
        name="option3"
      />
    </Flex>
  </>
);
