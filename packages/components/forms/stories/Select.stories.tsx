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

Basic.args = {
  size: 'medium',
};

export const Overview = (args: SelectProps) => (
  <Flex flexDirection="column">
    <SectionHeading as="h3" marginBottom="spacingS">
      Select small
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select id="optionSelect-1" name="optionSelect-1" {...args} size="small">
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
      Select default
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select id="optionSelect-2" name="optionSelect-2" {...args}>
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
      Select disabled small
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select
        id="optionSelect-6"
        name="optionSelect-6"
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

    <SectionHeading as="h3" marginBottom="spacingS">
      Select disabled
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select id="optionSelect-3" name="optionSelect-3" {...args} isDisabled>
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
      Select invalid small
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select
        id="optionSelect-4"
        name="optionSelect-4"
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
      Select invalid
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <Select id="optionSelect-5" name="optionSelect-5" {...args} isInvalid>
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
