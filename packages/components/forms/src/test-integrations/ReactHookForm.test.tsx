import React from 'react';
import { useForm } from 'react-hook-form';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await handleData(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.textInput)}>
        <TextInput {...register('textInput', { required: true })} />

        {errors.textInput && <MockRequiredMessage />}
      </FormControl>

      <FormControl isInvalid={Boolean(errors.textarea)}>
        <Textarea
          {...register('textarea', { required: true })}
          testId="cf-ui-textarea"
        />

        {errors.textarea && <MockRequiredMessage />}
      </FormControl>

      <FormControl>
        <Select defaultValue="Mumbai" {...register('select')}>
          <Select.Option value="Cape Town">Cape Town</Select.Option>
          <Select.Option value="Mumbai">Mumbai</Select.Option>
          <Select.Option value="Rio de Janeiro">Rio de Janeiro</Select.Option>
        </Select>
      </FormControl>

      <Radio.Group name="radioGroup" defaultValue="apples">
        <Radio id="apples" value="apples" {...register('radioGroup')}>
          Apples
        </Radio>
        <Radio id="pears" value="pears" {...register('radioGroup')}>
          Pears
        </Radio>
        <Radio id="peaches" value="peaches" {...register('radioGroup')}>
          Peaches
        </Radio>
      </Radio.Group>

      <FormControl isInvalid={Boolean(errors.checkbox)}>
        <Checkbox
          defaultChecked={false}
          {...register('checkbox', { required: true })}
        >
          This checkbox is required
        </Checkbox>

        {errors.checkbox && <MockRequiredMessage />}
      </FormControl>

      <Flex justifyContent="flex-end">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Flex>
    </Form>
  );
};

const mockHandleData = jest.fn((data) => {
  return Promise.resolve({ ...data });
});

describe('React Hook Form integration', function () {
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

    // Check the Checkbox
    fireEvent.click(screen.getByRole('checkbox'));

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.queryAllByText('This is required')).toHaveLength(0);
    });

    expect(mockHandleData).toHaveBeenCalledWith({
      textInput: 'Rihanna',
      textarea: 'Very long text in textarea',
      select: 'Rio de Janeiro',
      radioGroup: 'pears',
      checkbox: true,
    });
  });
});
