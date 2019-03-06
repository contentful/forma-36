import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Textarea from './Textarea';

it('renders the component', () => {
  const output = shallow(<Textarea id="someInput" name="userEmail" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with disabled prop', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
      disabled
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with value prop', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
      value="1234"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with error prop', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
      error
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an onChange prop', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
      onChange={() => {}}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an onBlur prop', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
      onBlur={() => {}}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with small width', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
      width="small"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a max length', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
      maxLength={10}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with rows defined', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
      rows={2}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as required', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
      required
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a test id', () => {
  const output = shallow(
    <Textarea
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
      testId="someTestId"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Textarea id="someInput" name="userEmail" />).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
