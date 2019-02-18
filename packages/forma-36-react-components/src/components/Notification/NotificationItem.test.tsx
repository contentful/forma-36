import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import NotificationItem from './NotificationItem';

it('renders the component', () => {
  const output = shallow(
    <NotificationItem onClose={() => {}} intent="success">
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
