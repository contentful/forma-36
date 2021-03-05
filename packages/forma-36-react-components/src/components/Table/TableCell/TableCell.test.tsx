import React from 'react';
import { render } from '@testing-library/react';

import { TableCell } from './TableCell';

it('renders the component', () => {
  const table = document.createElement('table');
  const row = document.createElement('tr');
  document.body.appendChild(table);

  const { container } = render(<TableCell sorting="asc">Foo</TableCell>, {
    container: table.appendChild(row),
  });

  expect(container.firstChild).toMatchSnapshot();
});
