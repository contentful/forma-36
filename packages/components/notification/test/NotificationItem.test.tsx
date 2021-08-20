import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { NotificationItem } from '../src/NotificationItem';

describe('Notification', () => {
  it('renders the component', () => {
    const mockOnClose = jest.fn();
    const { container } = render(
      <NotificationItem onClose={mockOnClose} variant="positive">
        Notification text
      </NotificationItem>,
    );

    expect(container.firstChild).toBeTruthy();
  });

  it('renders the component with a title and a body', () => {
    const title = 'Notification title';
    const body = 'This is the body text.';
    const { container, getByText } = render(
      <NotificationItem title={title} variant="positive">
        {body}
      </NotificationItem>,
    );
    const titleEl = getByText(title);
    const textEl = getByText(body);

    expect(container.firstChild).toContainElement(titleEl);
    expect(container.firstChild).toContainElement(textEl);
  });

  it('renders the component with a cta', () => {
    const label = 'This is some label text';
    const { container, getByText } = render(
      <NotificationItem cta={{ label }} variant="warning">
        This is the body text.
      </NotificationItem>,
    );
    expect(container.firstChild).toContainElement(getByText(label));
  });

  it('renders the component without close button', () => {
    const { queryByRole } = render(
      <NotificationItem withCloseButton={false}>
        This is the body text.
      </NotificationItem>,
    );
    expect(queryByRole('button')).toBeNull();
  });

  it('should trigger onClose when close button is clicked', () => {
    const mockOnClose = jest.fn();
    const { getByRole } = render(
      <NotificationItem variant="negative" onClose={mockOnClose}>
        This is the body text.
      </NotificationItem>,
    );

    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it(`has no a11y issues`, async () => {
    const mockOnClose = jest.fn();
    const { container } = render(
      <NotificationItem
        onClose={mockOnClose}
        title="Notification Title"
        variant="positive"
        cta={{ label: 'CTA label' }}
      >
        Notification text
      </NotificationItem>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
