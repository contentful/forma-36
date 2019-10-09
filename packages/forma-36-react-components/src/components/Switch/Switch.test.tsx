import React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';

it('renders the component', () => {
  const output = shallow(<Switch id="testCheckbox" labelText="foobar" />);

  expect(output).toMatchSnapshot();
});

it('renders the component as checked', () => {
  const output = shallow(<Switch id="testCheckbox" labelText="foobar" isChecked />);

  expect(output).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const output = shallow(<Switch id="testCheckbox" labelText="foobar" isDisabled />);

  expect(output).toMatchSnapshot();
});

it('renders the component as disabled and checked', () => {
  const output = shallow(<Switch id="testCheckbox" labelText="foobar" isDisabled isChecked />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Switch id="testCheckbox" labelText="foobar" className="my-extra-class" />,
  );

  expect(output).toMatchSnapshot();
});
