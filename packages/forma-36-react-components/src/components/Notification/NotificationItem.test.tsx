import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import NotificationItem from './NotificationItem';

it('renders the component', () => {
  const output = shallow(
    <NotificationItem onClose={() => {}} intent="success">
      Notification text
    </NotificationItem>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a title and a body', () => {
  const output = shallow(
    <NotificationItem title="Notification title" intent="success">
      This is the body text.
    </NotificationItem>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component with a cta', () => {
  const output = shallow(
    <NotificationItem
      cta={{ label: 'This is some label text' }}
      intent="warning"
    >
      This is the body text.
    </NotificationItem>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component with "error" intent', () => {
  const output = shallow(
    <NotificationItem onClose={() => {}} intent="error">
      Notification text
    </NotificationItem>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with "warning" intent', () => {
  const output = shallow(
    <NotificationItem onClose={() => {}} intent="warning">
      Notification text
    </NotificationItem>,
  );

  expect(output).toMatchSnapshot();
});

it(`has no a11y issues`, async () => {
  const output = mount(
    <NotificationItem onClose={() => {}} intent="success">
      Notification text
    </NotificationItem>,
  ).html();

  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
