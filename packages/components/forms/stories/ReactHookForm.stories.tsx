import React from 'react';
import { useForm } from 'react-hook-form';
import { action } from 'storybook/actions';

import { Button } from '@contentful/f36-button';

import {
  Checkbox,
  Form,
  FormControl,
  Radio,
  Select,
  Textarea,
  TextInput,
} from '../src';

export default {
  title: 'Form Elements/Integrations/react-hook-form',
  component: Form,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormControl.Label isRequired>Name</FormControl.Label>
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
        <FormControl.HelpText>Tell me about yourself</FormControl.HelpText>

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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const WithSelect = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormControl.Label>City</FormControl.Label>

        <Select defaultValue="Mumbai" {...register('uncontrolled-cities')}>
          <Select.Option value="Cape Town">Cape Town</Select.Option>
          <Select.Option value="Mumbai">Mumbai</Select.Option>
          <Select.Option value="Rio de Janeiro">Rio de Janeiro</Select.Option>
        </Select>
      </FormControl>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const WithRadioGroup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl as="fieldset">
        <FormControl.Label as="legend">Fruits</FormControl.Label>

        <Radio.Group defaultValue="apples">
          <Radio
            id="uncontrolled-apples"
            value="apples"
            {...register('uncontrolled-fruits')}
          >
            Apples
          </Radio>
          <Radio
            id="uncontrolled-pears"
            value="pears"
            {...register('uncontrolled-fruits')}
          >
            Pears
          </Radio>
          <Radio
            id="uncontrolled-peaches"
            value="peaches"
            {...register('uncontrolled-fruits')}
          >
            Peaches
          </Radio>
        </Radio.Group>
      </FormControl>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const WithCheckboxGroup = () => {
  const { register, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl as="fieldset">
        <FormControl.Label as="legend">Fruits</FormControl.Label>

        <Checkbox.Group name="uncontrolled-fruits" defaultValue={['apples']}>
          <Checkbox
            id="apples"
            value="apples"
            {...register('uncontrolled-fruits')}
          >
            Apples
          </Checkbox>
          <Checkbox
            id="pears"
            value="pears"
            {...register('uncontrolled-fruits')}
          >
            Pears
          </Checkbox>
          <Checkbox
            id="peaches"
            value="peaches"
            {...register('uncontrolled-fruits')}
          >
            Peaches
          </Checkbox>
        </Checkbox.Group>
      </FormControl>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
