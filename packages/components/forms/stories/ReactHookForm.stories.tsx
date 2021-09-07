import React from 'react';
import { useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';

import { Button } from '@contentful/f36-button';
import { Flex } from '@contentful/f36-core';

import { Checkbox, Form, FormControl, Textarea, TextInput } from '../src';

export default {
  title: 'Form Elements/Integrations/react-hook-form',
  component: Form,
  argTypes: {
    ['useForm mode']: {
      description:
        'It tells react-hook-validation when to trigger the validation of the form',
      control: {
        options: ['onSubmit', 'onChange', 'onBlur', 'onTouched'],
        type: 'select',
      },
    },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = (args) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: args['useForm mode'] });

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired isInvalid={Boolean(errors.name)}>
        <FormControl.Label>Name</FormControl.Label>
        <TextInput {...register('name', { required: true })} />
        <FormControl.HelpText>
          Please enter your first name
        </FormControl.HelpText>

        {errors.name && (
          <FormControl.ValidationMessage>
            This field is required
          </FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl isInvalid={Boolean(errors.description)}>
        <FormControl.Label>Description</FormControl.Label>
        <Textarea {...register('description', { maxLength: 20 })} />
        <FormControl.HelpText>Tell me about youself</FormControl.HelpText>

        {errors.description && (
          <FormControl.ValidationMessage>
            Your description must have a maximum of 20 characters
          </FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl isInvalid={Boolean(errors.checkbox)}>
        <Checkbox
          defaultChecked={false}
          {...register('checkbox', { required: true })}
        >
          I confirm everything that said above is true
        </Checkbox>

        {errors.checkbox && (
          <FormControl.ValidationMessage>
            You must confirm that everything is true
          </FormControl.ValidationMessage>
        )}
      </FormControl>

      <Flex justifyContent="flex-end">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Flex>
    </Form>
  );
};
Basic.args = {
  ['useForm mode']: 'onSubmit',
};
