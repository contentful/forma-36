import React from 'react';
import { render } from '@testing-library/react';

import { TableCell, TableHead, TableRow } from '../src/';

describe('TableHead', () => {
  it('renders the component as sticky', () => {
    const table = document.createElement('table');

    const { container } = render(
      <TableHead isSticky>
        <TableRow>
          <TableCell>test</TableCell>
        </TableRow>
      </TableHead>,
      { container: document.body.appendChild(table) },
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component as sticky and with an offset Top', () => {
    const table = document.createElement('table');
    const { container } = render(
      <TableHead isSticky offsetTop="20px">
        <TableRow>
          <TableCell>test</TableCell>
        </TableRow>
      </TableHead>,
      { container: document.body.appendChild(table) },
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
