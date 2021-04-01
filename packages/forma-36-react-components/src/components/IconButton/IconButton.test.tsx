import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ArrowDown } from '@contentful/f36-icons';

import { axe } from '../../utils/axeHelper';
import { IconButton } from './IconButton';

it('renders the component', () => {
  const { container } = render(
    <IconButton iconProps={{ as: ArrowDown }} label="My Icon" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a link', () => {
  const { container } = render(
    <IconButton href="#" iconProps={{ as: ArrowDown }} label="My Icon" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "primary" link type', () => {
  const { container } = render(
    <IconButton
      iconProps={{ as: ArrowDown }}
      label="My Icon"
      buttonType="primary"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "positive" link type', () => {
  const { container } = render(
    <IconButton
      iconProps={{ as: ArrowDown }}
      label="My Icon"
      buttonType="positive"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "negative" link type', () => {
  const { container } = render(
    <IconButton
      iconProps={{ as: ArrowDown }}
      label="My Icon"
      buttonType="negative"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "secondary" link type', () => {
  const { container } = render(
    <IconButton
      iconProps={{ as: ArrowDown }}
      label="My Icon"
      buttonType="secondary"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "muted" link type', () => {
  const { container } = render(
    <IconButton
      iconProps={{ as: ArrowDown }}
      label="My Icon"
      buttonType="muted"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('calls an onClick function', () => {
  const onClickFunc = jest.fn();
  const { container } = render(
    <IconButton
      iconProps={{ as: ArrowDown }}
      label="My Icon"
      onClick={onClickFunc}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();

  userEvent.click(screen.getByText('My Icon'));
  expect(onClickFunc).toHaveBeenCalled();
});

it('prevents an onClick function from being called when disabled', () => {
  const onClickFunc = jest.fn();
  const { container } = render(
    <IconButton
      iconProps={{ as: ArrowDown }}
      label="My Icon"
      onClick={onClickFunc}
      disabled
    />,
  );

  expect(container.firstChild).toMatchSnapshot();

  userEvent.click(screen.getByText('My Icon'));
  expect(onClickFunc).not.toHaveBeenCalled();
});

it('allows passing additional props not consumed by the component', () => {
  const { container } = render(
    <IconButton
      iconProps={{ as: ArrowDown }}
      label="My Icon"
      data-test-id="Testing ID"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders with a dropdown indicator', () => {
  const { container } = render(
    <IconButton iconProps={{ as: ArrowDown }} label="My Icon" withDropdown />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <IconButton
      iconProps={{ as: ArrowDown }}
      label="My Icon"
      className="my-extra-class"
    >
      IconButton
    </IconButton>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <IconButton iconProps={{ as: ArrowDown }} label="My Icon" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('has no a11y issues when rendered as a link', async () => {
  const { container } = render(
    <IconButton iconProps={{ as: ArrowDown }} label="My Icon" href="#" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
