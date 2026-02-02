import React from 'react';
import { useForm, useController } from 'react-hook-form';
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
  title: 'Form Elements/Integrations/react-hook-form/Controlled Inputs',
  component: Form,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.textInput)}>
        <FormControl.Label isRequired>Name</FormControl.Label>

        <ControlledTextInput
          control={control}
          name="textInput"
          rules={{ required: true }}
          /**
           * We need to pass an empty string as default value otherwise react will trigger the uncontrolled inputs warning
           * more information can be found in react-hook-form docs https://react-hook-form.com/api/usecontroller
           */
          defaultValue=""
        />

        <FormControl.HelpText>
          Please enter your first name
        </FormControl.HelpText>

        {errors.textInput && (
          <FormControl.ValidationMessage>
            This field is required
          </FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl isInvalid={Boolean(errors.textarea)}>
        <FormControl.Label>Description</FormControl.Label>

        <ControlledTextarea
          control={control}
          name="textarea"
          rules={{ maxLength: 20 }}
          /**
           * We need to pass an empty string as default value otherwise react will trigger the uncontrolled inputs warning
           * more information can be found in react-hook-form docs https://react-hook-form.com/api/usecontroller
           */
          defaultValue=""
        />

        <FormControl.HelpText>Tell me about yourself</FormControl.HelpText>

        {errors.textarea && (
          <FormControl.ValidationMessage>
            Your description must have a maximum of 20 characters
          </FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl isInvalid={Boolean(errors.checkbox)}>
        <ControlledCheckbox
          control={control}
          name="checkbox"
          rules={{ required: true }}
        >
          I confirm everything that said above is true
        </ControlledCheckbox>

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
  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormControl.Label>City</FormControl.Label>

        <ControlledSelect control={control} name="city" defaultValue="">
          <Select.Option value="" isDisabled>
            Please, select your city
          </Select.Option>
          <Select.Option value="Berlin">Berlin</Select.Option>
          <Select.Option value="San Francisco">San Francisco</Select.Option>
          <Select.Option value="Denver">Denver</Select.Option>
        </ControlledSelect>
      </FormControl>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const WithRadioGroup = () => {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl as="fieldset">
        <FormControl.Label as="legend">Favorite fruit</FormControl.Label>

        {/**
         * We need to pass an empty string as default value otherwise react will trigger the uncontrolled inputs warning
         * more information can be found in react-hook-form docs https://react-hook-form.com/api/usecontroller
         */}
        <ControlledRadioGroup
          control={control}
          name="favorite-fruit"
          defaultValue=""
        >
          <Radio id="apples" value="apples">
            Apples
          </Radio>
          <Radio id="pears" value="pears">
            Pears
          </Radio>
          <Radio id="peaches" value="peaches">
            Peaches
          </Radio>
        </ControlledRadioGroup>
      </FormControl>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const WithCheckboxGroup = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl as="fieldset">
        <FormControl.Label as="legend">Favorite fruits</FormControl.Label>

        <Checkbox.Group name="favorite-fruits">
          <ControlledCheckbox
            control={control}
            id="apples"
            value="apples"
            name="favorite-fruits"
          >
            Apples
          </ControlledCheckbox>

          <ControlledCheckbox
            name="favorite-fruits"
            control={control}
            id="pears"
            value="pears"
          >
            Pears
          </ControlledCheckbox>

          <ControlledCheckbox
            name="favorite-fruits"
            control={control}
            id="peaches"
            value="peaches"
          >
            Peaches
          </ControlledCheckbox>
        </Checkbox.Group>
      </FormControl>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

// Controlled components for the stories

function useReactHookFormController(props) {
  const {
    field: { ref, ...inputProps },
  } = useController(props);

  return { ref, inputProps };
}

function ControlledTextInput(props) {
  const { ref, inputProps } = useReactHookFormController(props);
  return <TextInput {...inputProps} ref={ref} />;
}

function ControlledTextarea(props) {
  const { ref, inputProps } = useReactHookFormController(props);
  return <Textarea {...inputProps} ref={ref} />;
}

function ControlledCheckbox(props) {
  const { ref, inputProps } = useReactHookFormController(props);
  return (
    <Checkbox {...inputProps} id={props.id} ref={ref}>
      {props.children}
    </Checkbox>
  );
}

function ControlledSelect(props) {
  const { ref, inputProps } = useReactHookFormController(props);
  return (
    <Select {...inputProps} ref={ref}>
      {props.children}
    </Select>
  );
}

function ControlledRadioGroup(props) {
  const { ref, inputProps } = useReactHookFormController(props);
  return (
    <Radio.Group {...inputProps} ref={ref}>
      {props.children}
    </Radio.Group>
  );
}
