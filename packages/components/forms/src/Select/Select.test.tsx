import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { Select } from './CompoundSelect';

it('should not dispatch onChange if disabled', async () => {
  const mockOnChange = jest.fn();
  render(
    <Select
      name="optionSelect"
      id="optionSelect"
      onChange={mockOnChange}
      isDisabled
    >
      <Select.Option value="optionOne">Option One</Select.Option>
    </Select>,
  );

  await userEvent.selectOptions(screen.getByTestId('cf-ui-select'), [
    'optionOne',
  ]);
  expect(mockOnChange).not.toHaveBeenCalled();
});

it('should dispatch onChange', async () => {
  const mockOnChange = jest.fn();
  render(
    <Select name="optionSelect" id="optionSelect" onChange={mockOnChange}>
      <Select.Option value="optionOne">Option One</Select.Option>
    </Select>,
  );

  await userEvent.selectOptions(screen.getByTestId('cf-ui-select'), [
    'optionOne',
  ]);
  expect(mockOnChange).toHaveBeenCalled();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <Select
      id="optionSelect"
      name="optionSelect"
      aria-label="Select"
      defaultValue="optionThree"
    >
      <Select.Option value="optionOne">Option 1</Select.Option>
      <Select.Option value="optionTwo" isDisabled>
        Disabled option
      </Select.Option>
      <Select.Option value="optionThree">Selected option</Select.Option>
    </Select>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
