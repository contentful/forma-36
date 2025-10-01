import React from 'react';
import { Formik, Field, useFormik } from 'formik';
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
  title: 'Form Elements/Integrations/Formik',
  component: Form,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = () => {
  const onSubmit = (data) => action('submitted data')(data);
  const validate = {
    name: (value) => !value,
    checkbox: (value) => !value,
    description: (value) => value && value.length > 20,
  };

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        cities: 'Mumbai',
        favoriteFruit: 'apples',
        fruits: ['apples'],
        checkbox: false,
      }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field name="name" validate={validate.name}>
            {({ field, meta }) => (
              <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
                <FormControl.Label isRequired>Name</FormControl.Label>
                <TextInput {...field} id="name" placeholder="name" />
                <FormControl.HelpText>
                  Please enter your first name
                </FormControl.HelpText>

                {meta.touched && meta.error && (
                  <FormControl.ValidationMessage>
                    This field is required
                  </FormControl.ValidationMessage>
                )}
              </FormControl>
            )}
          </Field>

          <Field name="description" validate={validate.description}>
            {({ field, meta }) => (
              <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
                <FormControl.Label>Description</FormControl.Label>
                <Textarea {...field} />
                <FormControl.HelpText>
                  Tell me about yourself
                </FormControl.HelpText>

                {meta.touched && meta.error && (
                  <FormControl.ValidationMessage>
                    Your description must have a maximum of 20 characters
                  </FormControl.ValidationMessage>
                )}
              </FormControl>
            )}
          </Field>

          <Field name="cities">
            {({ field }) => (
              <FormControl>
                <FormControl.Label>City</FormControl.Label>

                <Select {...field}>
                  <Select.Option value="Cape Town">Cape Town</Select.Option>
                  <Select.Option value="Mumbai">Mumbai</Select.Option>
                  <Select.Option value="Rio de Janeiro">
                    Rio de Janeiro
                  </Select.Option>
                </Select>
              </FormControl>
            )}
          </Field>

          <Field name="favoriteFruit">
            {({ field }) => (
              <FormControl as="fieldset">
                <FormControl.Label as="legend">
                  Favorite fruit
                </FormControl.Label>

                <Radio.Group {...field}>
                  <Radio id="apples" value="apples">
                    Apples
                  </Radio>
                  <Radio id="pears" value="pears">
                    Pears
                  </Radio>
                  <Radio id="peaches" value="peaches">
                    Peaches
                  </Radio>
                </Radio.Group>
              </FormControl>
            )}
          </Field>

          <Field name="fruits">
            {({ field }) => (
              <FormControl as="fieldset">
                <FormControl.Label as="legend">Fruits</FormControl.Label>

                <Checkbox.Group {...field}>
                  <Checkbox id="apples" value="apples">
                    Apples
                  </Checkbox>
                  <Checkbox id="pears" value="pears">
                    Pears
                  </Checkbox>
                  <Checkbox id="peaches" value="peaches">
                    Peaches
                  </Checkbox>
                </Checkbox.Group>
              </FormControl>
            )}
          </Field>

          <Field name="checkbox" validate={validate.checkbox}>
            {({ field, meta }) => (
              <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
                <Checkbox {...field}>
                  I confirm everything that said above is true
                </Checkbox>

                {meta.touched && meta.error && (
                  <FormControl.ValidationMessage>
                    You must confirm that everything is true
                  </FormControl.ValidationMessage>
                )}
              </FormControl>
            )}
          </Field>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export const WithUseFormik = () => {
  const onSubmit = (data) => action('submitted data')(data);
  const validate = {
    name: (value) => !value,
    checkbox: (value) => !value,
    description: (value) => value && value.length > 20,
  };
  const initialValues = {
    name: '',
    description: '',
    checkbox: false,
    favoriteFruit: 'apples',
  };

  const formik = useFormik({ initialValues, onSubmit });
  formik.registerField('name', { validate: validate.name });
  formik.registerField('description', { validate: validate.description });
  formik.registerField('checkbox', { validate: validate.checkbox });
  formik.registerField('favoriteFruit', {});

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl
        isInvalid={Boolean(formik.touched.name && formik.errors.name)}
      >
        <FormControl.Label isRequired>Name</FormControl.Label>
        <TextInput
          name="name"
          id="name"
          placeholder="name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <FormControl.HelpText>
          Please enter your first name
        </FormControl.HelpText>

        {formik.touched.name && formik.errors.name && (
          <FormControl.ValidationMessage>
            This field is required
          </FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl
        isInvalid={Boolean(
          formik.touched.description && formik.errors.description,
        )}
      >
        <FormControl.Label>Description</FormControl.Label>
        <Textarea
          name="description"
          onChange={formik.handleChange}
          id="description"
          value={formik.values.description}
        />
        <FormControl.HelpText>Tell me about yourself</FormControl.HelpText>

        {formik.touched.description && formik.errors.description && (
          <FormControl.ValidationMessage>
            Your description must have a maximum of 20 characters
          </FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl as="fieldset">
        <FormControl.Label as="legend">Favorite fruit</FormControl.Label>

        <Radio.Group
          name="favoriteFruit"
          value={formik.values.favoriteFruit}
          onChange={formik.handleChange}
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
        </Radio.Group>
      </FormControl>

      <FormControl
        isInvalid={Boolean(formik.touched.checkbox && formik.errors.checkbox)}
      >
        <Checkbox
          name="checkbox"
          onChange={formik.handleChange}
          id="checkbox"
          isChecked={formik.values.checkbox}
        >
          I confirm everything that said above is true
        </Checkbox>

        {formik.touched.checkbox && formik.errors.checkbox && (
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
