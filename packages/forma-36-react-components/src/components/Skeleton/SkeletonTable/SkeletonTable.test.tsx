import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';

import SkeletonTable from './SkeletonTable';
import Table from '../../Table';
import TableBody from '../../Table/TableBody';

it('renders the component', () => {
  const output = shallow(
    <Table>
      <TableBody>
        <SkeletonTable />
      </TableBody>
    </Table>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with 10 cells', () => {
  const output = shallow(
    <Table>
      <TableBody>
        <SkeletonTable columnCount={10} />
      </TableBody>
    </Table>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <Table>
      <TableBody>
        <SkeletonTable />
      </TableBody>
    </Table>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
