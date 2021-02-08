import React from 'react';

import RadioButton, { RadioButtonProps } from './RadioButton';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';

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
  id: 'Checkbox',
  name: 'some name',
};

export const overview = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Radio button default</SectionHeading>
      </Flex>
      <RadioButton id="Checkbox" labelText="some label text" name="some-name" />
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Radio button checked</SectionHeading>
      </Flex>
      <RadioButton
        id="Checkbox"
        checked
        labelText="some label text"
        name="some-name"
      />
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Radio button disabled</SectionHeading>
      </Flex>
      <RadioButton
        id="Checkbox"
        labelText="some label text"
        disabled
        name="some-name"
      />
    </Flex>
  </>
);
