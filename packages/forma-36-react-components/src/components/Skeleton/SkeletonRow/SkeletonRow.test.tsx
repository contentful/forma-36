import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../../utils/axeHelper';

import SkeletonRow from './SkeletonRow';
import Table from '../../Table';
import TableBody from '../../Table/TableBody';

it('renders the component', () => {
  const output = shallow(
    <Table>
      <TableBody>
        <SkeletonRow />
      </TableBody>
    </Table>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with 10 cells', () => {
  const output = shallow(
    <Table>
      <TableBody>
        <SkeletonRow columnCount={10} />
      </TableBody>
    </Table>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <Table>
      <TableBody>
        <SkeletonRow />
      </TableBody>
    </Table>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
