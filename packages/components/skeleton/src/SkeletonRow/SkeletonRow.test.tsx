import React from 'react';
import { render } from '@testing-library/react';
import { Table, TableBody } from '@contentful/f36-table';
import { axe } from 'jest-axe';

import { Skeleton } from '../index';

describe('SkeletonRow', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <Table>
        <TableBody>
          <Skeleton.Row />
        </TableBody>
      </Table>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
