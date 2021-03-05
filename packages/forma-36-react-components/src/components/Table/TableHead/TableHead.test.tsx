import React from 'react';
import { render } from '@testing-library/react';

import { TableHead } from './TableHead';
import { TableCell } from '../TableCell/TableCell';
import { TableRow } from '../TableRow/TableRow';

it('renders the component', () => {
  const table = document.createElement('table');

  const { container } = render(
    <TableHead>
      <TableRow>
        <TableCell>test</TableCell>
      </TableRow>
    </TableHead>,
    { container: document.body.appendChild(table) },
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with additional className', () => {
  const table = document.createElement('table');
  const { container } = render(
    <TableHead className="extra-class-name">
      <TableRow>
        <TableCell>test</TableCell>
      </TableRow>
    </TableHead>,
    { container: document.body.appendChild(table) },
  );

  expect(container.firstChild).toMatchSnapshot();
});

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
