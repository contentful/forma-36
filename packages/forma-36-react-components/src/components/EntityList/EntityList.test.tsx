import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { EntityList } from './EntityList';
import { EntityListItem } from './EntityListItem/EntityListItem';

it('renders the component', () => {
  const { container } = render(<EntityList />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with EntityListItems as children', () => {
  const { container } = render(
    <EntityList>
      <EntityListItem
        title="Entry 1"
        description="Description 1"
        contentType="My content type"
      />
      <EntityListItem
        title="Entry 2"
        description="Description 2"
        contentType="My content type"
      />
      <EntityListItem
        title="Entry 3"
        description="Description 2"
        contentType="My content type"
      />
    </EntityList>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(<EntityList className="my-extra-class" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<EntityList />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('has no a11y issues with children', async () => {
  const { container } = render(
    <EntityList>
      <EntityListItem
        title="Entry 1"
        description="Description 1"
        contentType="My content type"
      />
      <EntityListItem
        title="Entry 2"
        description="Description 2"
        contentType="My content type"
      />
      <EntityListItem
        title="Entry 3"
        description="Description 2"
        contentType="My content type"
      />
    </EntityList>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
