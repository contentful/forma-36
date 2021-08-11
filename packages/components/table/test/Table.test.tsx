import React from 'react';
import { render } from '@testing-library/react';

import { Table, TableCell, TableHead, TableRow, TableBody } from '../src/';

describe('Table', () => {
  it('renders the component', () => {
    const { container, getByRole, getByText, getAllByRole } = render(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table heading</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const th = getByRole('columnheader');
    const cells = getAllByRole('cell');
    expect(container.firstChild).toContainElement(th);
    expect(cells).toHaveLength(2);
    expect(th).toEqual(getByText('Table heading'));
  });

  describe('TableHead', () => {
    it('renders the component as sticky', () => {
      const { container, getByRole } = render(
        <Table>
          <TableHead isSticky>
            <TableRow>
              <TableCell>test</TableCell>
            </TableRow>
          </TableHead>
        </Table>,
      );

      const th = getByRole('columnheader');
      expect(container.firstChild).toContainElement(th);
      expect(th).toHaveStyle({
        position: 'sticky',
      });
    });

    it('renders the component as sticky and with an offset Top', () => {
      const { container, getByRole } = render(
        <Table>
          <TableHead isSticky offsetTop="20px">
            <TableRow>
              <TableCell>test</TableCell>
            </TableRow>
          </TableHead>
        </Table>,
      );

      const th = getByRole('columnheader');
      expect(container.firstChild).toContainElement(th);
      expect(th).toHaveStyle({
        top: '20px',
      });
    });
  });
});
