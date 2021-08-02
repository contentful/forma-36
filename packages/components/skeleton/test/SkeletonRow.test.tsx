import React from 'react';
import { render } from '@testing-library/react';
import { Table, TableBody } from '@contentful/f36-table';
import { axe } from '@/scripts/test/axeHelper';

import { SkeletonRow } from '../src/SkeletonRow/SkeletonRow';

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
