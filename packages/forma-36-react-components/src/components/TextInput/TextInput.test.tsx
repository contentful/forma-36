import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import TextInput from './TextInput';

it('renders the component with all required props', () => {
  const output = shallow(<TextInput id="someInput" name="userEmail" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <TextInput
      id="someInput"
      name="userEmail"
      extraClassNames="my-extra-class"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with disabled prop', () => {
  const output = shallow(
    <TextInput id="someInput" name="userEmail" disabled />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with error prop', () => {
  const output = shallow(<TextInput id="someInput" name="userEmail" error />);

  expect(output).toMatchSnapshot();
});

it('renders the component with value prop', () => {
  const output = shallow(
    <TextInput id="someInput" name="userEmail" value="123" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with onChange prop', () => {
  const output = shallow(
    <TextInput id="someInput" name="userEmail" onChange={() => {}} />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with onBlur prop', () => {
  const output = shallow(
    <TextInput id="someInput" name="userEmail" onBlur={() => {}} />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with the copy button', () => {
  const output = shallow(
    <TextInput id="someInput" name="userEmail" withCopyButton />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with small width', () => {
  const output = shallow(
    <TextInput id="someInput" name="userEmail" width="small" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with maxLength', () => {
  const output = shallow(
    <TextInput id="someInput" name="userEmail" maxLength={10} />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a placeholder text', () => {
  const output = shallow(
    <TextInput
      id="someInput"
      name="userEmail"
      placeholder="placeholder text"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a test id', () => {
  const output = shallow(
    <TextInput id="someInput" name="userEmail" testId="someTestId" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as required', () => {
  const output = shallow(
    <TextInput id="someInput" name="userEmail" testId="someTestId" required />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<TextInput id="someInput" name="userEmail" />).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
