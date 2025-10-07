/* eslint-disable jest/no-commented-out-tests */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Tooltip } from './Tooltip';
import { Paragraph } from '@contentful/f36-typography';

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
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    await waitFor(() =>
      expect(screen.getByRole('tooltip').textContent).toBe('Tooltip content'),
    );
  });

  // Enable again once emotion/jest is compatible again
  // it('renders the component with an additional class name', async () => {
  //   const user = userEvent.setup();
  //   render(
  //     <Tooltip content="Tooltip content" className="extra-class-name">
  //       <span>Hover me</span>
  //     </Tooltip>,
  //   );

  //   await user.hover(screen.getByText('Hover me'));

  //   await waitFor(() =>
  //     expect(screen.getByRole('tooltip')).toHaveClass('extra-class-name'),
  //   );
  // });

  // it('renders the component with a target wrapper classname', async () => {
  //   const user = userEvent.setup();
  //   const { container } = render(
  //     <Tooltip
  //       content="Tooltip content"
  //       targetWrapperClassName="target-wrapper-class-name"
  //     >
  //       <span>Hover me</span>
  //     </Tooltip>,
  //   );

  //   await user.hover(screen.getByText('Hover me'));

  //   expect(
  //     container.querySelector('.target-wrapper-class-name').textContent,
  //   ).toBe('Hover me');
  // });

  it('renders the component with a id attribute', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    await waitFor(() =>
      expect(screen.getByRole('tooltip').getAttribute('id')).toBe('Tooltip'),
    );
  });

  it('renders the component as span with a id attribute', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip as="span" id="Tooltip" content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    await waitFor(() => {
      const tooltip = screen.getByRole('tooltip');
      expect(tooltip.getAttribute('id')).toBe('Tooltip');
      expect(tooltip.nodeName).toMatch(/span/i);
    });
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

  it('render a React Element as children', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <Tooltip
        label="With React Element"
        id="Tooltip"
        content={<Paragraph>Ich bin ein Paragraph</Paragraph>}
      >
        <span>Hover me</span>
      </Tooltip>,
    );
    await user.hover(screen.getByText('Hover me'));

    const results = await axe(container);

    await waitFor(() => {
      expect(results).toHaveNoViolations();
      expect(screen.getByRole('tooltip').textContent).toBe(
        'Ich bin ein Paragraph',
      );
    });
  });
});
