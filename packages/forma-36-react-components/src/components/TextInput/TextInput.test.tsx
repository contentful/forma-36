import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../utils/axeHelper';
import { TextInput } from './TextInput';

it('renders the component with all required props', () => {
  const { container } = render(<TextInput id="someInput" name="userEmail" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" className="my-extra-class" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with disabled prop', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" disabled />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with error prop', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" error />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with value prop', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" value="123" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with onChange prop', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" onChange={() => {}} />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with onBlur prop', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" onBlur={() => {}} />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with the copy button', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" withCopyButton />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with small width', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" width="small" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with maxLength', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" maxLength={10} />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a placeholder text', () => {
  const { container } = render(
    <TextInput
      id="someInput"
      name="userEmail"
      placeholder="placeholder text"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a test id', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" testId="someTestId" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as required', () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" testId="someTestId" required />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <TextInput id="someInput" name="userEmail" labelText="userEmail" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
