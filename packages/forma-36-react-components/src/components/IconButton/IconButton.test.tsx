import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import IconButton from './IconButton';

it('renders the component', () => {
  const output = shallow(
    <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a link', () => {
  const output = shallow(
    <IconButton href="#" iconProps={{ icon: 'ArrowDown' }} label="My Icon" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "primary" link type', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: 'ArrowDown' }}
      label="My Icon"
      buttonType="primary"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "positive" link type', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: 'ArrowDown' }}
      label="My Icon"
      buttonType="positive"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "negative" link type', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: 'ArrowDown' }}
      label="My Icon"
      buttonType="negative"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "secondary" link type', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: 'ArrowDown' }}
      label="My Icon"
      buttonType="secondary"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "muted" link type', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: 'ArrowDown' }}
      label="My Icon"
      buttonType="muted"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('calls an onClick function', () => {
  const onClickFunc = jest.fn();
  const output = shallow(
    <IconButton
      iconProps={{ icon: 'ArrowDown' }}
      label="My Icon"
      onClick={onClickFunc}
    />,
  );

  output.simulate('click');

  expect(output).toMatchSnapshot();
  expect(onClickFunc).toHaveBeenCalled();
});

it('prevents an onClick function from being called when disabled', () => {
  const onClickFunc = jest.fn();
  const output = shallow(
    <IconButton
      iconProps={{ icon: 'ArrowDown' }}
      label="My Icon"
      onClick={onClickFunc}
      isDisabled
    />,
  );

  output.simulate('click');

  expect(output).toMatchSnapshot();
  expect(onClickFunc).not.toHaveBeenCalled();
});

it('allows passing additional props not consumed by the component', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: 'ArrowDown' }}
      label="My Icon"
      data-test-id="Testing ID"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders with a dropdown indicator', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: 'ArrowDown' }}
      label="My Icon"
      hasDropdown
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: 'ArrowDown' }}
      label="My Icon"
      className="my-extra-class"
    >
      IconButton
    </IconButton>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('has no a11y issues when rendered as a link', async () => {
  const output = mount(
    <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" href="#" />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
