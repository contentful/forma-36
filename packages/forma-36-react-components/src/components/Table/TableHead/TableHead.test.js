import React from 'react';
import { shallow } from 'enzyme';
import TableHead from './TableHead';
import TableCell from '../TableCell';

it('renders the component', () => {
  const output = shallow(
    <TableHead>
      <TableCell>test</TableCell>
    </TableHead>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with additional className', () => {
  const output = shallow(
    <TableHead extraClassNames="extra-class-name">
      <TableCell>test</TableCell>
    </TableHead>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as sticky', () => {
  const output = shallow(
    <TableHead isSticky>
      <TableCell>test</TableCell>
    </TableHead>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as sticky and with an offset Top', () => {
  const output = shallow(
    <TableHead isSticky offsetTop="20px">
      <TableCell>test</TableCell>
    </TableHead>,
  );

  expect(output).toMatchSnapshot();
});
