import React from 'react';
import { render } from '@testing-library/react';

import ListItem from './ListItem';

it('renders the component', () => {
  const { container } = render(<ListItem>ListItem</ListItem>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <ListItem className="my-extra-class">ListItem</ListItem>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
