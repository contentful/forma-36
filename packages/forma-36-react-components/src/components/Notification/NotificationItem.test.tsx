import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { NotificationItem } from './NotificationItem';

it('renders the component', () => {
  const { container } = render(
    <NotificationItem onClose={() => {}} intent="success">
      Notification text
    </NotificationItem>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a title and a body', () => {
  const { container } = render(
    <NotificationItem title="Notification title" intent="success">
      This is the body text.
    </NotificationItem>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a cta', () => {
  const { container } = render(
    <NotificationItem
      cta={{ label: 'This is some label text' }}
      intent="warning"
    >
      This is the body text.
    </NotificationItem>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with "error" intent', () => {
  const { container } = render(
    <NotificationItem onClose={() => {}} intent="error">
      Notification text
    </NotificationItem>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with "warning" intent', () => {
  const { container } = render(
    <NotificationItem onClose={() => {}} intent="warning">
      Notification text
    </NotificationItem>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it(`has no a11y issues`, async () => {
  const { container } = render(
    <NotificationItem onClose={() => {}} intent="success">
      Notification text
    </NotificationItem>,
  );

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
