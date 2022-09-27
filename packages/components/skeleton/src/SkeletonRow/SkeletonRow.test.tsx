import React from 'react';
import { render } from '@testing-library/react';
import { Table, TableBody } from '@contentful/f36-table';
import { axe } from '@/scripts/test/axeHelper';

import { Skeleton } from '../index';

describe('SkeletonRow', () => {
  it('has no a11y issues', async () => {
    // Workaround for https://github.com/dequelabs/axe-core/issues/3055
    jest.useRealTimers();

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
