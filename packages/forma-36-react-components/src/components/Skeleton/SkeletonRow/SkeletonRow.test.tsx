import React from 'react';
import { render } from '@testing-library/react';
import { Table, TableBody } from '@contentful/f36-table';
import { axe } from '@/scripts/test/axeHelper';

import { SkeletonRow } from './SkeletonRow';

it('renders the component', () => {
  const { container } = render(
    <Table>
      <TableBody>
        <SkeletonRow />
      </TableBody>
    </Table>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with 10 rows', () => {
  const { container } = render(
    <Table>
      <TableBody>
        <SkeletonRow rowCount={10} />
      </TableBody>
    </Table>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with 10 cells', () => {
  const { container } = render(
    <Table>
      <TableBody>
        <SkeletonRow columnCount={10} />
      </TableBody>
    </Table>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <Table>
      <TableBody>
        <SkeletonRow />
      </TableBody>
    </Table>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
