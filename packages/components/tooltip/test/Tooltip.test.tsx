import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { Tooltip } from '../src/Tooltip';

it('does not render the component if no mouseover event on child', () => {
  const { container } = render(
    <Tooltip content="Tooltip content">
      <span>Hover me</span>
    </Tooltip>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component', () => {
  const { container } = render(
    <Tooltip content="Tooltip content">
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  userEvent.hover(screen.getByText('Hover me'));
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Tooltip content="Tooltip content" className="extra-class-name">
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  userEvent.hover(screen.getByText('Hover me'));
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a target wrapper classname', () => {
  const { container } = render(
    <Tooltip
      content="Tooltip content"
      targetWrapperClassName="target-wrapper-class-name"
    >
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  userEvent.hover(screen.getByText('Hover me'));
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a place attribute', () => {
  const { container } = render(
    <Tooltip content="Tooltip content" placement="left">
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  userEvent.hover(screen.getByText('Hover me'));
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a id attribute', () => {
  const { container } = render(
    <Tooltip id="Tooltip" content="Tooltip content">
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  userEvent.hover(screen.getByText('Hover me'));
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as span with a id attribute', () => {
  const { container } = render(
    <Tooltip as="span" content="Tooltip content">
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  userEvent.hover(screen.getByText('Hover me'));
  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <Tooltip id="Tooltip" content="Tooltip content">
      <span>Hover me</span>
    </Tooltip>,
  );

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
