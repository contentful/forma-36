import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import IconButton from './IconButton';

import { iconName } from './../Icon/constants';

it('renders the component', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a link', () => {
  const output = shallow(
    <IconButton
      href="#"
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "primary" link type', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
      buttonType="primary"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "positive" link type', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
      buttonType="positive"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "negative" link type', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
      buttonType="negative"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "secondary" link type', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
      buttonType="secondary"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "muted" link type', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
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
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
      onClick={onClickFunc}
    />,
  );

  output.simulate('click');

  expect(output).toMatchSnapshot();
  expect(onClickFunc).toBeCalled();
});

it('prevents an onClick function from being called when disabled', () => {
  const onClickFunc = jest.fn();
  const output = shallow(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
      onClick={onClickFunc}
      disabled
    />,
  );

  output.simulate('click');

  expect(output).toMatchSnapshot();
  expect(onClickFunc).not.toBeCalled();
});

it('allows passing additional props not consumed by the component', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
      data-test-id="Testing ID"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders with a dropdown indicator', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
      withDropdown
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
      extraClassNames="my-extra-class"
    >
      IconButton
    </IconButton>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
    />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('has no a11y issues when rendered as a link', async () => {
  const output = mount(
    <IconButton
      iconProps={{ icon: iconName[Object.keys(iconName)[0]] }}
      label="My Icon"
      href="#"
    />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
