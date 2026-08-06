import { describe, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { Table, TableBody } from '@contentful/f36-table';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

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
    await expectNoA11yViolations(container);
  });
});
