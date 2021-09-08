import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import { Button } from '@contentful/f36-button';
import { Flex } from '@contentful/f36-core';

import {
  Checkbox,
  Form,
  FormControl,
  RadioGroup,
  Radio,
  Textarea,
  TextInput,
} from '../src';

const MockRequiredMessage = () => (
  <FormControl.ValidationMessage>
    This is required
  </FormControl.ValidationMessage>
);

const MockForm = ({ handleData }) => {
  const {
    control,
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
      <FormControl isInvalid={Boolean(errors.requiredTextInput)}>
        <TextInput {...register('requiredTextInput', { required: true })} />

        {errors.requiredTextInput && <MockRequiredMessage />}
      </FormControl>

      <FormControl isInvalid={Boolean(errors.requiredTextarea)}>
        <Textarea
          {...register('requiredTextarea', { required: true })}
          testId="cf-ui-textarea"
        />

        {errors.requiredTextarea && <MockRequiredMessage />}
      </FormControl>

      {/* Jest is triggerring a warning that this component is switching from controlled to uncontrolled */}
      <Controller
        name="radioWithController"
        control={control}
        defaultValue={'apples'}
        render={({ field }) => (
          <FormControl>
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

      <FormControl isInvalid={Boolean(errors.requiredCheckbox)}>
        <Checkbox
          defaultChecked={false}
          {...register('requiredCheckbox', { required: true })}
        >
          This checkbox is required
        </Checkbox>

        {errors.requiredCheckbox && <MockRequiredMessage />}
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

    // Change Radio option
    fireEvent.click(screen.getByRole('radio', { name: /pears/i }));

    // Check the Checkbox
    fireEvent.click(screen.getByRole('checkbox'));

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.queryAllByText('This is required')).toHaveLength(0);
    });

    expect(mockHandleData).toHaveBeenCalledWith({
      requiredTextInput: 'Rihanna',
      requiredTextarea: 'Very long text in textarea',
      requiredCheckbox: true,
      radioWithController: 'pears',
    });
  });
});
