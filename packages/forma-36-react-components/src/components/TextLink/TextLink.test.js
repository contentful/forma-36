import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import TextLink from './TextLink';
import { iconName } from './../Icon/constants';

it('renders as a button', () => {
  const output = shallow(<TextLink>Text Link</TextLink>);

  expect(output).toMatchSnapshot();
});

it('renders as a link', () => {
  const output = shallow(<TextLink href="#">Text Link</TextLink>);

  expect(output).toMatchSnapshot();
});

it('renders as a "primary" link type', () => {
  const output = shallow(<TextLink linkType="primary">Text Link</TextLink>);

  expect(output).toMatchSnapshot();
});

it('renders as a "positive" link type', () => {
  const output = shallow(<TextLink linkType="positive">Text Link</TextLink>);

  expect(output).toMatchSnapshot();
});

it('renders as a "negative" link type', () => {
  const output = shallow(<TextLink linkType="negative">Text Link</TextLink>);

  expect(output).toMatchSnapshot();
});

it('renders as a "secondary" link type', () => {
  const output = shallow(<TextLink linkType="secondary">Text Link</TextLink>);

  expect(output).toMatchSnapshot();
});

it('renders as a "muted" link type', () => {
  const output = shallow(<TextLink linkType="muted">Text Link</TextLink>);

  expect(output).toMatchSnapshot();
});

it('calls an onClick function', () => {
  const onClickFunc = jest.fn();
  const output = shallow(<TextLink onClick={onClickFunc}>Text Link</TextLink>);

  output.simulate('click');

  expect(output).toMatchSnapshot();
  expect(onClickFunc).toBeCalled();
});

it('prevents onClick function from being called when disabled', () => {
  const onClickFunc = jest.fn();
  const output = shallow(
    <TextLink disabled onClick={onClickFunc}>
      Text Link
    </TextLink>,
  );

  output.simulate('click');

  expect(output).toMatchSnapshot();
  expect(onClickFunc).not.toBeCalled();
});

it('allows passing additional props not consumed by component', () => {
  const output = shallow(
    <TextLink data-test-id="Testing Id">Text Link</TextLink>,
  );

  expect(output).toMatchSnapshot();
});

it('allows passing additional class names to component', () => {
  const output = shallow(
    <TextLink extraClassNames="testing">Text Link</TextLink>,
  );

  expect(output).toMatchSnapshot();
});

it('allows passing a test id', () => {
  const output = shallow(<TextLink testId="test-id">Text Link</TextLink>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<TextLink>Text Link</TextLink>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('has no a11y issues when rendered as a link', async () => {
  const output = mount(<TextLink href="#">Text Link</TextLink>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('renders with an icon', () => {
  const output = shallow(
    <TextLink icon={iconName[Object.keys(iconName)[0]]}>Text Link</TextLink>,
  );

  expect(output).toMatchSnapshot();
});
