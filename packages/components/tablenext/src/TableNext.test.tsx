import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { TableNext } from '.';

describe('TableNext', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the component', () => {
    const { container, getByRole, getByText, getAllByRole } = render(
      <TableNext columnTitles={['TableNext Heading']}>
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
    jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <TableNext columnTitles={['Name']}>
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
    const consoleWarnMock = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    render(
      <TableNext columnTitles={['Name']}>
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
        <TableNext columnTitles={['TableNext Heading']}>
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

    it('has no a11y issue with embedded variant', async () => {
      const { container } = render(
        <TableNext variant="embedded" columnTitles={['TableNext Heading']}>
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
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y issue with scrollable layout', async () => {
      const { container } = render(
        <TableNext columnTitles={['TableNext Heading']}>
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
        <TableNext
          layout="scrollable"
          isFirstColumnSticky
          isHeaderSticky
          columnTitles={['TableNext Heading']}
        >
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
        <TableNext isHeaderSticky columnTitles={['TableNext Heading']}>
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
