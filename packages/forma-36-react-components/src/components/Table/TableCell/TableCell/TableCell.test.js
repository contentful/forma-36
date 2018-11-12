import React from 'react';
import { shallow } from 'enzyme';
import TableCell from './TableCell';

it('renders the component', () => {
  const output = shallow(
    <TableCell active direction="asc">
      Foo
    </TableCell>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component inactive', () => {
  const output = shallow(<TableCell sorting="asc">Foo</TableCell>);

  expect(output).toMatchSnapshot();
});
