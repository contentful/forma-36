import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { TableNext } from '.';

describe('TableNext', () => {
  it('renders the component', () => {
    const { container, getByRole, getByText, getAllByRole } = render(
      <TableNext>
        <TableNext.Head>
          <TableNext.Row>
            <TableNext.Cell>TableNext heading</TableNext.Cell>
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

    const th = getByRole('columnheader');
    const cells = getAllByRole('cell');
    expect(container.firstChild).toContainElement(th);
    expect(cells).toHaveLength(2);
    expect(th).toEqual(getByText('TableNext heading'));
  });

  describe('accessibility of table component', () => {
    it('has no a11y issues with default layout', async () => {
      const { container } = render(
        <TableNext>
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell>TableNext heading</TableNext.Cell>
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

    it('has no a11y issue with embedded layout', async () => {
      const { container } = render(
        <TableNext layout="embedded">
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell>TableNext heading</TableNext.Cell>
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
              <TableNext.Cell>TableNext heading</TableNext.Cell>
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
              <TableNext.Cell>TableNext heading</TableNext.Cell>
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
              <TableNext.Cell>test</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
        </TableNext>,
      );

      const th = screen.getByRole('columnheader');
      expect(container.firstChild).toContainElement(th);
      expect(th).toHaveStyle({
        position: 'sticky',
      });
    });

    it('renders the component as sticky and with an offset Top', () => {
      const { container } = render(
        <TableNext>
          <TableNext.Head isSticky offsetTop="20px">
            <TableNext.Row>
              <TableNext.Cell>test</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
        </TableNext>,
      );

      const th = screen.getByRole('columnheader');
      expect(container.firstChild).toContainElement(th);
      expect(th).toHaveStyle({
        top: '20px',
      });
    });
  });

  describe('TableNext.Cell', () => {
    it('can render as sortable', async () => {
      const user = userEvent.setup();

      render(
        <TableNext>
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell isSortable>test</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
        </TableNext>,
      );

      const th = screen.getByRole('columnheader');
      expect(th).toHaveAttribute('aria-sort', 'none');

      await user.click(th);
      expect(th).toHaveAttribute('aria-sort', 'none');
    });
  });
});
