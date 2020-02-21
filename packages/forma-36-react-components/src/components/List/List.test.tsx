import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import List from './List';
import ListItem from './ListItem';

it('renders the component', () => {
  const output = shallow(
    <List>
      <ListItem>Item</ListItem>
    </List>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <List className="my-extra-class">
      <ListItem>Item</ListItem>
    </List>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <List>
      <ListItem>Item</ListItem>
    </List>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
