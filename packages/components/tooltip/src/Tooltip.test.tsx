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
    render(
      <Tooltip content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText('Hover me'));

    expect(screen.getByRole('tooltip').textContent).toBe('Tooltip content');
  });

  it('renders the component with an additional class name', async () => {
    render(
      <Tooltip content="Tooltip content" className="extra-class-name">
        <span>Hover me</span>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText('Hover me'));

    expect(screen.getByRole('tooltip')).toHaveClass('extra-class-name');
  });

  it('renders the component with a target wrapper classname', async () => {
    const { container } = render(
      <Tooltip
        content="Tooltip content"
        targetWrapperClassName="target-wrapper-class-name"
      >
        <span>Hover me</span>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText('Hover me'));

    expect(
      container.querySelector('.target-wrapper-class-name').textContent,
    ).toBe('Hover me');
  });

  it('renders the component with a placement attribute', async () => {
    render(
      <Tooltip content="Tooltip content" placement="left">
        <span>Hover me</span>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText('Hover me'));

    expect(
      screen.getByRole('tooltip').getAttribute('data-popper-placement'),
    ).toBe('left');
  });

  it('renders the component with a id attribute', async () => {
    render(
      <Tooltip id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText('Hover me'));

    expect(screen.getByRole('tooltip').getAttribute('id')).toBe('Tooltip');
  });

  it('renders the component as span with a id attribute', async () => {
    render(
      <Tooltip as="span" id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText('Hover me'));

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip.getAttribute('id')).toBe('Tooltip');
    expect(tooltip.nodeName).toMatch(/span/i);
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Tooltip id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );
    await userEvent.hover(screen.getByText('Hover me'));

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
