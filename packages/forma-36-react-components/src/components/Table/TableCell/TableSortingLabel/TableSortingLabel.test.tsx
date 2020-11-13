import React from 'react';
import { render } from '@testing-library/react';

import TableSortingLabel from './TableSortingLabel';

it('renders the component', () => {
  const { container } = render(
    <TableSortingLabel active direction="asc">
      Foo
    </TableSortingLabel>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component inactive', () => {
  const { container } = render(
    <TableSortingLabel active={false} direction="desc">
      Foo
    </TableSortingLabel>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
