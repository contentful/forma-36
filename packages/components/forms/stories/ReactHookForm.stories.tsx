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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => action('submitted data')(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fruits"
        control={control}
        defaultValue={'apples'}
        rules={{ required: true }}
        render={({ field }) => (
          <FormControl isInvalid={errors.fruits}>
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
  const {
    control,
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => action('submitted data')(data);

  // const [groupState, setGroupState] = React.useState(['apples']);

  // const handleOnChange = (e) => {
  //   e.persist();
  //   const value = e.target.value;
  //   setGroupState((prevState) =>
  //     prevState.includes(value)
  //       ? prevState.filter((v) => v !== value)
  //       : [...prevState, value],
  //   );
  //   action('onChange')(e);
  // };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fruits"
        control={control}
        defaultValue={'c-apples'}
        render={(args) => {
          const { field, fieldState, formState } = args;
          console.log({ field, fieldState, formState });
          return (
            <FormControl>
              <FormControl.Label>
                Controlled CheckboxGroup with react-hook-form (with Controller)
              </FormControl.Label>
              <CheckboxGroup
                ref={field.ref}
                value={[field.value]}
                onChange={field.onChange}
              >
                <Checkbox id="c-apples" value="c-apples">
                  Apples
                </Checkbox>
                <Checkbox id="c-pears" value="c-pears">
                  Pears
                </Checkbox>
                <Checkbox id="c-peaches" value="c-peaches">
                  Peaches
                </Checkbox>
              </CheckboxGroup>
            </FormControl>
          );
        }}
      />

      <FormControl>
        <FormControl.Label>
          Controlled CheckboxGroup with react-hook-form
        </FormControl.Label>
        <CheckboxGroup defaultValue={['apples']}>
          <Checkbox id="apples" value="apples" {...register('apples')}>
            Apples
          </Checkbox>
          <Checkbox id="pears" value="pears" {...register('pears')}>
            Pears
          </Checkbox>
          <Checkbox id="peaches" value="peaches" {...register('peaches')}>
            Peaches
          </Checkbox>
        </CheckboxGroup>
      </FormControl>

      <FormControl>
        <FormControl.Label>
          Uncontrolled CheckboxGroup with react-hook-form
        </FormControl.Label>
        <CheckboxGroup defaultValue={['u-apples']}>
          <Checkbox id="u-apples" value="u-apples" {...register('u-apples')}>
            Apples
          </Checkbox>
          <Checkbox id="u-pears" value="u-pears" {...register('u-pears')}>
            Pears
          </Checkbox>
          <Checkbox id="u-peaches" value="u-peaches" {...register('u-peaches')}>
            Peaches
          </Checkbox>
        </CheckboxGroup>
      </FormControl>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
