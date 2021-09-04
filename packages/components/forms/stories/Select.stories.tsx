import React from 'react';

import { Select, SelectProps } from '../src';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

export default {
  title: 'Form Elements/Select',
  component: Select,
};

export const Basic = (args: SelectProps) => (
  <Select id="optionSelect" name="optionSelect" {...args}>
    <Select.Option value="optionOne">Option 1</Select.Option>
    <Select.Option value="optionTwo" isSelected>
      Option 2
    </Select.Option>
    <Select.Option value="optionThree" isDisabled>
      Disabled option
    </Select.Option>
  </Select>
);

export const Overview = (args: SelectProps) => (
  <Flex flexDirection="column">
    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input default
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select id="optionSelect" name="optionSelect" {...args} size="small">
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo" isSelected>
          Option 2
        </Select.Option>
        <Select.Option value="optionThree" isDisabled>
          Disabled option
        </Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input default
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select id="optionSelect" name="optionSelect" {...args} isInvalid>
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo" isSelected>
          Option 2
        </Select.Option>
        <Select.Option value="optionThree" isDisabled>
          Disabled option
        </Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input disabled
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select id="optionSelect" name="optionSelect" {...args} isDisabled>
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo" isSelected>
          Option 2
        </Select.Option>
        <Select.Option value="optionThree" isDisabled>
          Disabled option
        </Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input invalid
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select id="optionSelect" name="optionSelect" {...args} size="small">
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo" isSelected>
          Option 2
        </Select.Option>
        <Select.Option value="optionThree" isDisabled>
          Disabled option
        </Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with icon as a placeholder
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select
        id="optionSelect"
        name="optionSelect"
        {...args}
        size="small"
        isInvalid
      >
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo" isSelected>
          Option 2
        </Select.Option>
        <Select.Option value="optionThree" isDisabled>
          Disabled option
        </Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with icon as a placeholder
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select
        id="optionSelect"
        name="optionSelect"
        {...args}
        size="small"
        isDisabled
      >
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo" isSelected>
          Option 2
        </Select.Option>
        <Select.Option value="optionThree" isDisabled>
          Disabled option
        </Select.Option>
      </Select>
    </Flex>
  </Flex>
);
