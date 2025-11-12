import React from 'react';
import { useForm, useController } from 'react-hook-form';
import { TextInput, Form, FormControl } from '@contentful/f36-forms';
import { Button } from '@contentful/f36-components';

export default function UseControllerIntegrationExample() {
  const ControlledTextInput = (props) => {
    const {
      field: { ref, ...inputProps },
    } = useController(props);

    return <TextInput {...inputProps} ref={ref} />;
  };

  const {
    // instead of register, this time we use the control object returned by useForm()
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.textInput)}>
        <FormControl.Label isRequired>Name</FormControl.Label>

        {/* Then we pass control to the controlled component as a prop */}
        <ControlledTextInput
          control={control}
          name="textInput"
          rules={{ required: true }}
          /**
           * We need to pass an empty string as default value
           * otherwise react will trigger the uncontrolled inputs warning
           *
           * more information in https://react-hook-form.com/api/usecontroller
           */
          defaultValue=""
        />

        {errors.textInput && (
          <FormControl.ValidationMessage>
            This field is required
          </FormControl.ValidationMessage>
        )}
      </FormControl>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
