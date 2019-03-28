import React from 'react';
import { shallow } from 'enzyme';
import TableSortingLabel from './TableSortingLabel';

it('renders the component', () => {
  const output = shallow(
    <TableSortingLabel active direction="asc">
      Foo
    </TableSortingLabel>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component inactive', () => {
  const output = shallow(
    <TableSortingLabel active={false} direction="desc">
      Foo
    </TableSortingLabel>,
  );

  expect(output).toMatchSnapshot();
});
