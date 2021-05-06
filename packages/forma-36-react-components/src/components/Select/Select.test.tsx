import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { Select } from './Select';
import { Option } from './Option';

it('renders the component', () => {
  const { container } = render(
    <Select name="optionSelect" id="optionSelect">
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an extra class name', () => {
  const { container } = render(
    <Select name="optionSelect" id="optionSelect" className="extraClassName">
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component in disabled state', () => {
  const { container } = render(
    <Select isDisabled name="optionSelect" id="optionSelect">
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with error', () => {
  const { container } = render(
    <Select hasError name="optionSelect" id="optionSelect">
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const { container } = render(
    <Select value="value1" name="optionSelect" id="optionSelect">
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as required', () => {
  const { container } = render(
    <Select name="optionSelect" id="optionSelect" required>
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('should not dispatch onChange if disabled', () => {
  const mockOnChange = jest.fn();
  render(
    <Select
      name="optionSelect"
      id="optionSelect"
      onChange={mockOnChange}
      isDisabled
    >
      <Option value="optionOne">Option One</Option>
    </Select>,
  );

  userEvent.selectOptions(screen.getByTestId('cf-ui-select'), ['optionOne']);
  expect(mockOnChange).not.toHaveBeenCalled();
});

it('should dispatch onChange', () => {
  const mockOnChange = jest.fn();
  render(
    <Select name="optionSelect" id="optionSelect" onChange={mockOnChange}>
      <Option value="optionOne">Option One</Option>
    </Select>,
  );

  userEvent.selectOptions(screen.getByTestId('cf-ui-select'), ['optionOne']);
  expect(mockOnChange).toHaveBeenCalled();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <Select id="optionSelect" name="optionSelect">
      <Option value="optionOne">Option 1</Option>
    </Select>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
