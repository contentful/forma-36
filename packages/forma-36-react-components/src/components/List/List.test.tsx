import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../utils/axeHelper';
import List from './List';
import ListItem from './ListItem';

it('renders the component', () => {
  const { container } = render(
    <List>
      <ListItem>Item</ListItem>
    </List>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as ordered list', () => {
  const { container } = render(
    <List element="ol">
      <ListItem>Item</ListItem>
    </List>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <List className="my-extra-class">
      <ListItem>Item</ListItem>
    </List>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <List>
      <ListItem>Item</ListItem>
    </List>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
