import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { TableNext, TableCellSorting } from '.';

describe('TableNext', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the component', () => {
    const { container, getByRole, getByText, getAllByRole } = render(
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
      </TableNext>,
    );

    const th = getByRole('columnheader');
    const cells = getAllByRole('cell');
    expect(container.firstChild).toContainElement(th);
    expect(cells).toHaveLength(2);
    expect(th).toEqual(getByText('TableNext Heading'));
  });

  it('renders row cells even when there are fewer column titles than cells', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <TableNext layout="stackable" columnTitles={['Name']}>
        <TableNext.Body>
          <TableNext.Row>
            <TableNext.Cell>Jane Doe</TableNext.Cell>
            <TableNext.Cell>Admin</TableNext.Cell>
          </TableNext.Row>
        </TableNext.Body>
      </TableNext>,
    );

    expect(screen.getByRole('cell', { name: 'Jane Doe' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Admin' })).toBeInTheDocument();
  });

  it('warns in development when column titles and row cells do not match', () => {
    const consoleWarnMock = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    render(
      <TableNext layout="stackable" columnTitles={['Name']}>
        <TableNext.Body>
          <TableNext.Row>
            <TableNext.Cell>Jane Doe</TableNext.Cell>
            <TableNext.Cell>Admin</TableNext.Cell>
          </TableNext.Row>
        </TableNext.Body>
      </TableNext>,
    );

    expect(consoleWarnMock).toHaveBeenCalledWith(
      '[TableNext.Row] Some row cells do not have matching column titles, which can make the cell content harder to understand. ' +
        'Received 1 columnTitles for 2 row cells.',
    );
  });

  describe('accessibility of table component', () => {
    it('has no a11y issues with default variant', async () => {
      const { container } = render(
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
        </TableNext>,
      );

      await expectNoA11yViolations(container);
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

      await expectNoA11yViolations(container);
    });

    it('has no a11y issue with stackable layout', async () => {
      const { container } = render(
        <TableNext layout="stackable" columnTitles={['TableNext Heading']}>
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
      await expectNoA11yViolations(container);
    });

    it('has no a11y issue with scrollable layout', async () => {
      const { container } = render(
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
        </TableNext>,
      );

      await expectNoA11yViolations(container);
    });

    it('has no a11y issue with scrollable layout and sticky header and first column', async () => {
      const { container } = render(
        <TableNext isFirstColumnSticky>
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

      await expectNoA11yViolations(container);
    });
  });

  describe('TableNext.Cell sorting', () => {
    it('renders a sort button with aria-sort="none" when isSortable and no direction set', () => {
      render(
        <TableNext>
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell isSortable onClick={() => {}}>
                Name
              </TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>Jane Doe</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      const th = screen.getByRole('columnheader');
      expect(th).toHaveAttribute('aria-sort', 'none');
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('reflects sortDirection on aria-sort', () => {
      const { rerender } = render(
        <TableNext>
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell
                isSortable
                sortDirection={TableCellSorting.Ascending}
                onClick={() => {}}
              >
                Name
              </TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>Jane Doe</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      expect(screen.getByRole('columnheader')).toHaveAttribute(
        'aria-sort',
        'ascending',
      );

      rerender(
        <TableNext>
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell
                isSortable
                sortDirection={TableCellSorting.Descending}
                onClick={() => {}}
              >
                Name
              </TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>Jane Doe</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      expect(screen.getByRole('columnheader')).toHaveAttribute(
        'aria-sort',
        'descending',
      );
    });

    it('calls onClick when the sort button is clicked', async () => {
      const handleClick = vi.fn();

      render(
        <TableNext>
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell isSortable onClick={handleClick}>
                Name
              </TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>Jane Doe</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      await userEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not render a sort button on body cells', () => {
      render(
        <TableNext>
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell>Name</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              {/* isSortable on a body cell is silently ignored */}
              <TableNext.Cell isSortable onClick={() => {}}>
                Jane Doe
              </TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('does not render a sort button on stackable tables', () => {
      render(
        <TableNext layout="stackable">
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell isSortable onClick={() => {}}>
                Name
              </TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>Jane Doe</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('has no a11y issues with a sortable head cell', async () => {
      const { container } = render(
        <TableNext>
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell
                isSortable
                sortDirection={TableCellSorting.Ascending}
                onClick={() => {}}
              >
                Name
              </TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>Jane Doe</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>,
      );

      await expectNoA11yViolations(container);
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
