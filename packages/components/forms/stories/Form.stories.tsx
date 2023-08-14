import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormControl, TextInput, Textarea, Select, Form } from '../src';
import { Button } from '@contentful/f36-button';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/Form',
  component: Form,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  render: (args) => {
    const [submitted, setSubmit] = useState(false);
    const onSubmit = () => setSubmit(true);

    return (
      <Form {...args} onSubmit={() => onSubmit()}>
        <FormControl>
          <FormControl.Label>Name</FormControl.Label>
          <TextInput />
          <FormControl.HelpText>
            Please enter your first name
          </FormControl.HelpText>
        </FormControl>

        <FormControl>
          <FormControl.Label>Description</FormControl.Label>
          <Textarea />
          <FormControl.HelpText>Tell me about yourself</FormControl.HelpText>
        </FormControl>
        <Button variant="primary" type="submit" isDisabled={submitted}>
          {submitted ? 'Submitted' : 'Click me to submit'}
        </Button>
      </Form>
    );
  },
};

export const OverviewWithSmallInputs: Story = {
  render: (args) => {
    return (
      <Form {...args}>
        <FormControl marginBottom="spacingM">
          <FormControl.Label isRequired>Name</FormControl.Label>
          <TextInput size="small" />
          <FormControl.HelpText>Enter your first name</FormControl.HelpText>
        </FormControl>
        <FormControl marginBottom="spacingM">
          <FormControl.Label isRequired>Last name</FormControl.Label>
          <TextInput size="small" />
          <FormControl.HelpText>Enter your last name</FormControl.HelpText>
        </FormControl>
        <FormControl>
          <FormControl.Label>Choose your favorite fruit</FormControl.Label>
          <Select
            id="optionSelect"
            name="optionSelect"
            size="small"
            defaultValue="optionOne"
          >
            <Select.Option value="optionOne">Apple</Select.Option>
            <Select.Option value="optionOne">Peach</Select.Option>
            <Select.Option value="optionOne">Pineapple</Select.Option>
            <Select.Option value="optionTwo">Banana</Select.Option>
            <Select.Option value="optionThree" isDisabled>
              Cherry
            </Select.Option>
          </Select>
        </FormControl>
        <Flex justifyContent="flex-end">
          <Flex marginRight="spacingS">
            <Button variant="secondary" size="small">
              Cancel
            </Button>
          </Flex>
          <Flex>
            <Button variant="primary" type="submit" size="small">
              Submit
            </Button>
          </Flex>
        </Flex>
      </Form>
    );
  },
};
