import React from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { Tooltip } from '../src/Tooltip';

jest.mock('@contentful/f36-core', () => ({
  ...jest.requireActual('@contentful/f36-core'),
  useId: (id) => id,
}));

describe('Tooltip', () => {
  it('does not render the component if no mouseover event on child', () => {
    const { queryByText } = render(
      <Tooltip content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(queryByText('Tooltip content')).toBeNull();
  });

  it('renders the component', async () => {
    const { getByText, getByRole } = render(
      <Tooltip content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await act(async () => {
      userEvent.hover(getByText('Hover me'));
    });
    expect(getByRole('tooltip').textContent).toEqual('Tooltip content');
  });

  it('renders the component with an additional class name', async () => {
    const { getByText, getByRole } = render(
      <Tooltip content="Tooltip content" className="extra-class-name">
        <span>Hover me</span>
      </Tooltip>,
    );

    await act(async () => {
      userEvent.hover(getByText('Hover me'));
    });
    expect(getByRole('tooltip')).toHaveClass('extra-class-name');
  });

  it('renders the component with a target wrapper classname', async () => {
    const { container, getByText } = render(
      <Tooltip
        content="Tooltip content"
        targetWrapperClassName="target-wrapper-class-name"
      >
        <span>Hover me</span>
      </Tooltip>,
    );

    await act(async () => {
      userEvent.hover(getByText('Hover me'));
    });
    expect(
      container.querySelector('.target-wrapper-class-name').textContent,
    ).toEqual('Hover me');
  });

  it('renders the component with a placement attribute', async () => {
    const { getByText, getByRole } = render(
      <Tooltip content="Tooltip content" placement="left">
        <span>Hover me</span>
      </Tooltip>,
    );

    await act(async () => {
      userEvent.hover(getByText('Hover me'));
    });
    expect(getByRole('tooltip').getAttribute('data-popper-placement')).toEqual(
      'left',
    );
  });

  it('renders the component with a id attribute', async () => {
    const { getByRole, getByText } = render(
      <Tooltip id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await act(async () => {
      userEvent.hover(getByText('Hover me'));
    });
    expect(getByRole('tooltip').getAttribute('id')).toEqual('Tooltip');
  });

  it('renders the component as span with a id attribute', async () => {
    const { getByText, getByRole } = render(
      <Tooltip as="span" id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await act(async () => {
      userEvent.hover(getByText('Hover me'));
    });
    const tooltip = getByRole('tooltip');
    expect(tooltip.getAttribute('id')).toEqual('Tooltip');
    expect(tooltip.nodeName).toMatch(/span/i);
  });

  it('has no a11y issues', async () => {
    const { container, getByText } = render(
      <Tooltip id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );
    await act(async () => {
      userEvent.hover(getByText('Hover me'));
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
