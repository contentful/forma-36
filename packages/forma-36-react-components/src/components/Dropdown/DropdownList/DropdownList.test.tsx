import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../../utils/axeHelper';
import DropdownList from './DropdownList';
import DropdownListItem from '../DropdownListItem/DropdownListItem';

it('renders the component', () => {
  const { container } = render(
    <DropdownList>
      <DropdownListItem>List Item</DropdownListItem>
    </DropdownList>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <DropdownList className="my-extra-class">
      <DropdownListItem>List Item</DropdownListItem>
    </DropdownList>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a border attribute', () => {
  const { container } = render(
    <DropdownList border="top">
      <DropdownListItem>List Item</DropdownListItem>
    </DropdownList>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <DropdownList>
      <DropdownListItem>entry</DropdownListItem>
    </DropdownList>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
