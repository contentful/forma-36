import React from 'react';

import { BaseInput } from '../src';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/BaseInput',
  component: BaseInput,
  parameters: {
    propTypes: [BaseInput['__docgenInfo']],
  },
  args: {
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = () => {
  return (
    <Flex flexDirection="column">
      <Flex marginBottom="spacingM">
        <BaseInput
          name="someOtherOption"
          label="this is my label"
          placeholder="placeholder"
          id="4"
          type="text"
          as="textarea"
        />
      </Flex>
      <Flex marginBottom="spacingM">
        <BaseInput
          name="someOtherOption"
          label="this is my label"
          placeholder="placeholder"
          id="3"
          type="text"
          as="input"
        />
      </Flex>

      <Flex marginBottom="spacingM">
        <BaseInput
          name="someOtherOption"
          label="this is my label"
          placeholder="placeholder"
          id="2"
          type="text"
          as="input"
          isInvalid
        />
      </Flex>

      <Flex marginBottom="spacingM">
        <BaseInput
          name="someOtherOption"
          label="this is my label"
          placeholder="placeholder"
          id="1"
          type="text"
          as="input"
          isDisabled
        />
      </Flex>
    </Flex>
  );
};
