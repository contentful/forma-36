import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Checkbox,
  Form,
  FormControl,
  Radio,
  Select,
  Textarea,
  TextInput,
} from '@contentful/f36-forms';
import { Button } from '@contentful/f36-components';

export default function RegisterIntegrationExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Create your submit function that will be passed to react-hook-form’s handleSubmit
  const onSubmit = (data) => {
    console.log(data);
  };

  /* Pass react-hook-form’s handleSubmit to the onSubmit prop of the Form component  */
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* To set the FormControl invalid state, check if there is an error related to this input  */}
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormControl.Label isRequired>Name</FormControl.Label>

        {/* Use the register function from react-hook-form on TextInput */}
        <TextInput {...register('name', { required: true })} />

        {/* Show a ValidationMessage if the input has any errors */}
        {errors.name && (
          <FormControl.ValidationMessage>
            This field is required
          </FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl isInvalid={Boolean(errors.description)}>
        <FormControl.Label>Description</FormControl.Label>

        {/* Registering a Textarea is similar to TextInput */}
        <Textarea {...register('description', { maxLength: 20 })} />

        {errors.description && (
          <FormControl.ValidationMessage>
            Your description must have a maximum of 20 characters
          </FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl>
        <FormControl.Label>City</FormControl.Label>

        {/* When using a Select, it’s only necessary to register the Select component */}
        <Select defaultValue="Mumbai" {...register('city')}>
          <Select.Option value="Cape Town">Cape Town</Select.Option>
          <Select.Option value="Mumbai">Mumbai</Select.Option>
          <Select.Option value="Rio de Janeiro">Rio de Janeiro</Select.Option>
        </Select>
      </FormControl>

      <FormControl as="fieldset">
        <FormControl.Label as="legend">Martial status</FormControl.Label>

        {/*
          When using Radio.Group, it’s necessary to register each Radio with the same "name".
          This is necessary because of how react-hook-form works.
        */}
        <Radio.Group defaultValue="single">
          <Radio value="married" {...register('martial-status')}>
            Married
          </Radio>
          <Radio value="single" {...register('martial-status')}>
            Single
          </Radio>
        </Radio.Group>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.checkbox)}>
        <Checkbox {...register('checkbox', { required: true })}>
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
}
