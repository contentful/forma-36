import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Textarea } from './Textarea';

it('renders the component', () => {
  const { container } = render(<Textarea id="someInput" name="userEmail" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Textarea id="someInput" name="userEmail" className="my-extra-class" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with disabled prop', () => {
  const { container } = render(
    <Textarea
      id="someInput"
      name="userEmail"
      className="my-extra-class"
      disabled
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with value prop', () => {
  const { container } = render(
    <Textarea
      id="someInput"
      name="userEmail"
      className="my-extra-class"
      value="1234"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with error prop', () => {
  const { container } = render(
    <Textarea
      id="someInput"
      name="userEmail"
      className="my-extra-class"
      error
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an onChange prop', () => {
  const { container } = render(
    <Textarea
      id="someInput"
      name="userEmail"
      className="my-extra-class"
      onChange={() => {}}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an onBlur prop', () => {
  const { container } = render(
    <Textarea
      id="someInput"
      name="userEmail"
      className="my-extra-class"
      onBlur={() => {}}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with small width', () => {
  const { container } = render(
    <Textarea
      id="someInput"
      name="userEmail"
      className="my-extra-class"
      width="small"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a max length', () => {
  const { container } = render(
    <Textarea
      id="someInput"
      name="userEmail"
      className="my-extra-class"
      maxLength={10}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with rows defined', () => {
  const { container } = render(
    <Textarea
      id="someInput"
      name="userEmail"
      className="my-extra-class"
      rows={2}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as required', () => {
  const { container } = render(
    <Textarea
      id="someInput"
      name="userEmail"
      className="my-extra-class"
      required
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a test id', () => {
  const { container } = render(
    <Textarea
      id="someInput"
      name="userEmail"
      className="my-extra-class"
      testId="someTestId"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Textarea id="someInput" name="userEmail" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
