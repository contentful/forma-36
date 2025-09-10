import React from 'react';
import { Formik, Field } from 'formik';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import { Button } from '@contentful/f36-button';
import { Flex } from '@contentful/f36-core';

import {
  Checkbox,
  Form,
  FormControl,
  Radio,
  Select,
  Textarea,
  TextInput,
} from '../index';

const MockRequiredMessage = () => (
  <FormControl.ValidationMessage>
    This is required
  </FormControl.ValidationMessage>
);

const MockForm = ({ handleData }) => {
  const initialValues = {
    textInput: '',
    textarea: '',
    select: 'Mumbai',
    radioGroup: 'apples',
    checkboxGroup: ['apples'],
    checkbox: false,
  };
  const validateRequired = (value) => !value;
  const onSubmit = async (data) => {
    await handleData(data);
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field name="textInput" validate={validateRequired}>
            {({ field, meta }) => (
              <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
                <TextInput {...field} />

                {meta.touched && meta.error && <MockRequiredMessage />}
              </FormControl>
            )}
          </Field>

          <Field name="textarea" validate={validateRequired}>
            {({ field, meta }) => (
              <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
                <Textarea {...field} testId="cf-ui-textarea" />

                {meta.touched && meta.error && <MockRequiredMessage />}
              </FormControl>
            )}
          </Field>

          <Field name="select">
            {({ field }) => (
              <FormControl>
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

          <Field name="radioGroup">
            {({ field }) => (
              <Radio.Group {...field}>
                <Radio value="apples">Apples</Radio>
                <Radio value="pears">Pears</Radio>
                <Radio value="peaches">Peaches</Radio>
              </Radio.Group>
            )}
          </Field>

          <Field name="checkboxGroup">
            {({ field }) => (
              <Checkbox.Group {...field}>
                <Checkbox value="apples">Apples</Checkbox>
                <Checkbox value="pears">Pears</Checkbox>
                <Checkbox value="peaches">Peaches</Checkbox>
              </Checkbox.Group>
            )}
          </Field>

          <Field name="checkbox" validate={validateRequired}>
            {({ field, meta }) => (
              <FormControl
                isRequired
                isInvalid={Boolean(meta.touched && meta.error)}
              >
                <Checkbox {...field} defaultChecked={false}>
                  This checkbox is required
                </Checkbox>

                {meta.touched && meta.error && <MockRequiredMessage />}
              </FormControl>
            )}
          </Field>

          <Flex justifyContent="flex-end">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

const mockHandleData = jest.fn((data) => {
  return Promise.resolve({ ...data });
});

describe('Formik integration', function () {
  beforeEach(() => {
    render(<MockForm handleData={mockHandleData} />);
  });

  it('should display validation messages if there are errors', async () => {
    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.queryAllByText('This is required')).toHaveLength(3);
    });

    expect(
      screen.getByTestId('cf-ui-text-input').getAttribute('aria-invalid'),
    ).toBe('true');
    expect(mockHandleData).not.toHaveBeenCalled();
  });

  it('should submit the form if there are no errors', async () => {
    // Fill out TextInput
    fireEvent.input(screen.getByTestId('cf-ui-text-input'), {
      target: {
        value: 'Rihanna',
      },
    });

    // Fill out Textarea
    fireEvent.input(screen.getByTestId('cf-ui-textarea'), {
      target: {
        value: 'Very long text in textarea',
      },
    });

    // Change Select
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Rio de Janeiro' },
    });

    // Change Radio option
    fireEvent.click(screen.getByRole('radio', { name: /pears/i }));

    // Change Checkbox.Group options
    fireEvent.click(screen.getByRole('checkbox', { name: /apples/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: /pears/i }));

    // Check the Checkbox
    fireEvent.click(
      screen.getByRole('checkbox', { name: /checkbox is required/i }),
    );

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.queryAllByText('This is required')).toHaveLength(0);
    });

    expect(mockHandleData).toHaveBeenCalledWith({
      textInput: 'Rihanna',
      textarea: 'Very long text in textarea',
      select: 'Rio de Janeiro',
      radioGroup: 'pears',
      checkboxGroup: ['pears'],
      checkbox: true,
    });
  });
});
