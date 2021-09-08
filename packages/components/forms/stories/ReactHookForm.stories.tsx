import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { action } from '@storybook/addon-actions';

import { Button } from '@contentful/f36-button';

import {
  Checkbox,
  CheckboxGroup,
  Form,
  FormControl,
  RadioGroup,
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const WithSelect = () => {
  const { register, control, handleSubmit } = useForm();

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

        <FormControl.HelpText>
          This is an uncontrolled Select with react-hook-form
        </FormControl.HelpText>
      </FormControl>

      <Controller
        name="controlled-cities"
        control={control}
        defaultValue="Mumbai"
        render={({ field }) => {
          return (
            <FormControl>
              <FormControl.Label>City</FormControl.Label>

              <Select {...field}>
                <Select.Option value="Cape Town">Cape Town</Select.Option>
                <Select.Option value="Mumbai">Mumbai</Select.Option>
                <Select.Option value="Rio de Janeiro">
                  Rio de Janeiro
                </Select.Option>
              </Select>

              <FormControl.HelpText>
                This is a controlled Select with react-hook-form
              </FormControl.HelpText>
            </FormControl>
          );
        }}
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const WithRadioGroup = () => {
  const { control, register, handleSubmit } = useForm();

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormControl.Label>Fruits</FormControl.Label>

        <RadioGroup defaultValue="apples">
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
        </RadioGroup>

        <FormControl.HelpText>
          This is an uncontrolled RadioGroup with react-hook-form
        </FormControl.HelpText>
      </FormControl>

      <Controller
        name="controlled-fruits"
        control={control}
        defaultValue={'apples'}
        rules={{ required: true }}
        render={({ field }) => (
          <FormControl>
            <FormControl.Label>Fruits</FormControl.Label>

            <RadioGroup {...field}>
              <Radio id="apples" value="apples">
                Apples
              </Radio>
              <Radio id="pears" value="pears">
                Pears
              </Radio>
              <Radio id="peaches" value="peaches">
                Peaches
              </Radio>
            </RadioGroup>

            <FormControl.HelpText>
              This is a controlled RadioGroup with react-hook-form
            </FormControl.HelpText>
          </FormControl>
        )}
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const WithCheckboxGroup = () => {
  const { control, register, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormControl.Label>Fruits</FormControl.Label>

        <CheckboxGroup name="uncontrolled-fruits" defaultValue={['apples']}>
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
        </CheckboxGroup>

        <FormControl.HelpText>
          This is an uncontrolled CheckboxGroup with react-hook-form
        </FormControl.HelpText>
      </FormControl>

      <Controller
        name="controlled-fruits"
        control={control}
        defaultValue={['apples']}
        render={({ field }) => {
          return (
            <FormControl>
              <FormControl.Label>Fruits</FormControl.Label>

              <CheckboxGroup {...field}>
                <Checkbox id="controlled-apples" value="apples">
                  Apples
                </Checkbox>
                <Checkbox id="controlled-pears" value="pears">
                  Pears
                </Checkbox>
                <Checkbox id="controlled-peaches" value="peaches">
                  Peaches
                </Checkbox>
              </CheckboxGroup>

              <FormControl.HelpText>
                This is a controlled CheckboxGroup with react-hook-form
              </FormControl.HelpText>
            </FormControl>
          );
        }}
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
