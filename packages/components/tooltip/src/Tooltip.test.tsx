import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Tooltip } from './Tooltip';
import { Paragraph } from '@contentful/f36-typography';
import { StarIcon } from '@contentful/f36-icons';
import { Icon } from '../../icon/src';
import { Button } from '@contentful/f36-button';

jest.mock('@contentful/f36-core', () => {
  const actual = jest.requireActual('@contentful/f36-core');

  return {
    ...actual,
    useId: (id) => id,
  };
});

describe('Tooltip', () => {
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

  it('renders around an Custom Icon', async () => {
    render(
      <Tooltip content="Tooltip content">
        <Icon as={StarIcon} testId="hover-me" />
      </Tooltip>,
    );

    await userEvent.hover(screen.getByTestId('hover-me'));
    await waitFor(() =>
      expect(screen.getByRole('tooltip').textContent).toBe('Tooltip content'),
    );
  });

  it('renders around an Icon', async () => {
    render(
      <Tooltip content="Tooltip content">
        <StarIcon testId="hover-me" />
      </Tooltip>,
    );

    await userEvent.hover(screen.getByTestId('hover-me'));
    await waitFor(() =>
      expect(screen.getByRole('tooltip').textContent).toBe('Tooltip content'),
    );
  });

  it('renders around an Button', async () => {
    render(
      <Tooltip content="Tooltip content">
        <Button testId="hover-me">Hover me</Button>
      </Tooltip>,
    );
    await userEvent.hover(screen.getByTestId('hover-me'));
    await waitFor(() =>
      expect(screen.getByRole('tooltip').textContent).toBe('Tooltip content'),
    );
  });

  it('renders around a disabled Button', async () => {
    render(
      <Tooltip content="Tooltip content">
        <Button isDisabled testId="hover-me">
          Hover me
        </Button>
      </Tooltip>,
    );
    await userEvent.hover(screen.getByTestId('hover-me'));
    await waitFor(() =>
      expect(screen.getByRole('tooltip').textContent).toBe('Tooltip content'),
    );
  });

  it('renders the component with an additional class name', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip content" className="extra-class-name">
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    await waitFor(() =>
      expect(screen.getByRole('tooltip')).toHaveClass('extra-class-name'),
    );
  });

  it('renders the component with a target wrapper classname', async () => {
    const user = userEvent.setup();
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
  });

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

  it('passes testId to tooltip content element', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip content" testId="custom-trigger-test-id">
        <span>Hover me</span>
      </Tooltip>,
    );

    await user.hover(screen.getByText('Hover me'));

    await waitFor(() =>
      expect(screen.getByTestId('custom-trigger-test-id').textContent).toBe(
        'Tooltip content',
      ),
    );
  });

  it('passes custom props to trigger element', async () => {
    render(
      <Tooltip content="Tooltip content" data-test-id="custom-test-id">
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.getByTestId('custom-test-id')).toHaveTextContent('Hover me');
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

  it('renders without a11y issues when around React Elements', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <Tooltip
        label="With React Element"
        id="Tooltip"
        content={<Paragraph>Ich bin ein Paragraph</Paragraph>}
      >
        <Paragraph>Hover me</Paragraph>
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

  it('renders without a11y issues when around Text', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <Tooltip
        label="With React Element"
        id="Tooltip"
        content="Ich bin ein Paragraph"
      >
        Hover me
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
