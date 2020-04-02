import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import Select from './Select';
import Option from './Option';

it('renders the component', () => {
  const output = shallow(
    <Select name="optionSelect" id="optionSelect">
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component with an extra class name', () => {
  const output = shallow(
    <Select name="optionSelect" id="optionSelect" className="extraClassName">
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component in disabled state', () => {
  const output = shallow(
    <Select isDisabled name="optionSelect" id="optionSelect">
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component with error', () => {
  const output = shallow(
    <Select hasError name="optionSelect" id="optionSelect">
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const output = shallow(
    <Select value="value1" name="optionSelect" id="optionSelect">
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component as required', () => {
  const output = shallow(
    <Select name="optionSelect" id="optionSelect" required>
      <Option value="optionOne">Option One</Option>
    </Select>,
  );
  expect(output).toMatchSnapshot();
});

it('should not dispatch onChange if disabled', () => {
  const mockOnChange = jest.fn();
  const select = mount(
    <Select
      name="optionSelect"
      id="optionSelect"
      onChange={mockOnChange}
      isDisabled
    >
      <Option value="optionOne">Option One</Option>
    </Select>,
  );

  select.find('select').simulate('change');
  expect(mockOnChange).not.toHaveBeenCalled();
});

it('should dispatch onChange', () => {
  const mockOnChange = jest.fn();
  const select = mount(
    <Select name="optionSelect" id="optionSelect" onChange={mockOnChange}>
      <Option value="optionOne">Option One</Option>
    </Select>,
  );

  select.find('select').simulate('change', { target: { value: 'optionOne' } });
  expect(mockOnChange).toHaveBeenCalled();
});

it('has no a11y issues', async () => {
  const output = mount(
    <Select id="optionSelect" name="optionSelect">
      <Option value="optionOne">Option 1</Option>
    </Select>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
