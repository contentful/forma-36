import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { Tooltip } from './Tooltip';

jest.mock('@contentful/f36-core', () => {
  const actual = jest.requireActual('@contentful/f36-core');

  return {
    ...actual,
    useId: (id) => id,
  };
});

describe('Tooltip', () => {
  it('does not render the component if no mouseover event on child', () => {
    render(
      <Tooltip content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.queryByText('Tooltip content')).toBeNull();
  });

  it('renders the component', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(
      <Tooltip content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    expect(screen.getByRole('tooltip').textContent).toBe('Tooltip content');

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders the component with an additional class name', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(
      <Tooltip content="Tooltip content" className="extra-class-name">
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    expect(screen.getByRole('tooltip')).toHaveClass('extra-class-name');

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders the component with a target wrapper classname', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const { container } = render(
      <Tooltip
        content="Tooltip content"
        targetWrapperClassName="target-wrapper-class-name"
      >
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    expect(
      container.querySelector('.target-wrapper-class-name').textContent,
    ).toBe('Hover me');

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders the component with a placement attribute', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(
      <Tooltip content="Tooltip content" placement="left">
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    expect(
      screen.getByRole('tooltip').getAttribute('data-popper-placement'),
    ).toBe('left');

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders the component with a id attribute', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(
      <Tooltip id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    expect(screen.getByRole('tooltip').getAttribute('id')).toBe('Tooltip');

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders the component as span with a id attribute', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(
      <Tooltip as="span" id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip.getAttribute('id')).toBe('Tooltip');
    expect(tooltip.nodeName).toMatch(/span/i);

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('has no a11y issues', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <Tooltip id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );
    await user.hover(screen.getByText('Hover me'));

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
