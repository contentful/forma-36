import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { TableNext } from '.';

const SimpleTable = () => (
  <TableNext>
    <TableNext.Head>
      <TableNext.Row>
        <TableNext.Cell>TableNext Heading</TableNext.Cell>
      </TableNext.Row>
    </TableNext.Head>
    <TableNext.Body>
      <TableNext.Row>
        <TableNext.Cell>Cell 1</TableNext.Cell>
      </TableNext.Row>
      <TableNext.Row>
        <TableNext.Cell>Cell 2</TableNext.Cell>
      </TableNext.Row>
    </TableNext.Body>
  </TableNext>
);

describe('TableNext', () => {
  it('renders the component', () => {
    const { container, getByRole, getByText, getAllByRole } = render(
      <SimpleTable />,
    );

    const th = getByRole('columnheader');
    const cells = getAllByRole('cell');
    expect(container.firstChild).toContainElement(th);
    expect(cells).toHaveLength(2);
    expect(th).toEqual(getByText('TableNext Heading'));
  });

  describe('accessibility of table component', () => {
    it('has no a11y issues with default variant', async () => {
      const { container } = render(<SimpleTable />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y issue with embedded variant', async () => {
      const { container } = render(
        <TableNext variant="embedded">
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell>TableNext Heading</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>Cell 1</TableNext.Cell>
            </TableNext.Row>
            <TableNext.Row>
              <TableNext.Cell>Cell 2</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y issue with scrollable layout', async () => {
      const { container } = render(
        <TableNext layout="scrollable">
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell>TableNext Heading</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>Cell 1</TableNext.Cell>
            </TableNext.Row>
            <TableNext.Row>
              <TableNext.Cell>Cell 2</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y issue with scrollable layout and sticky header and first column', async () => {
      const { container } = render(
        <TableNext layout="scrollable" isFirstColumnSticky>
          <TableNext.Head isSticky>
            <TableNext.Row>
              <TableNext.Cell>TableNext Heading</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>Cell 1</TableNext.Cell>
            </TableNext.Row>
            <TableNext.Row>
              <TableNext.Cell>Cell 2</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('TableNext.Head', () => {
    it('renders the component as sticky', () => {
      const { container } = render(
        <TableNext>
          <TableNext.Head isSticky>
            <TableNext.Row>
              <TableNext.Cell>TableNext Heading</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>test</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      const th = screen.getByRole('columnheader');
      expect(container.firstChild).toContainElement(th);
      expect(th).toHaveStyle({
        position: 'sticky',
      });
    });
  });
});
