import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { EntityList } from '.';

const TEST_ID = 'entity-list';

it('renders the component with EntityList.Item', () => {
  const { getByTestId, getByText } = render(
    <EntityList testId={TEST_ID}>
      <EntityList.Item
        title="Entry 1"
        description="Description 1"
        contentType="My content type"
      />
    </EntityList>,
  );

  expect(getByTestId(TEST_ID)).toBeInTheDocument();
  expect(getByText('Entry 1')).toBeInTheDocument();
});

it('renders the component with an additional class name', () => {
  const { getByTestId } = render(
    <EntityList testId={TEST_ID} className="my-extra-class" />,
  );

  expect(getByTestId(TEST_ID)).toHaveClass('my-extra-class');
});

it('has no a11y issues', async () => {
  const { container } = render(<EntityList />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('has no a11y issues with children', async () => {
  const { container } = render(
    <EntityList>
      <EntityList.Item
        title="Entry 1"
        description="Description 1"
        contentType="My content type"
      />
      <EntityList.Item
        title="Entry 2"
        description="Description 2"
        contentType="My content type"
      />
      <EntityList.Item
        title="Entry 3"
        description="Description 2"
        contentType="My content type"
      />
    </EntityList>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
