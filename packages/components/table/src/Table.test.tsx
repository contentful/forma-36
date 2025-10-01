import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Table } from '.';

describe('Table', () => {
  it('renders the component', () => {
    const { container, getByRole, getByText, getAllByRole } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Table heading</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell 1</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell 2</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );

    const th = getByRole('columnheader');
    const cells = getAllByRole('cell');
    expect(container.firstChild).toContainElement(th);
    expect(cells).toHaveLength(2);
    expect(th).toEqual(getByText('Table heading'));
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Table heading</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell 1</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell 2</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('Table.Head', () => {
    it('renders the component as sticky', () => {
      const { container } = render(
        <Table>
          <Table.Head isSticky>
            <Table.Row>
              <Table.Cell>test</Table.Cell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const th = screen.getByRole('columnheader');
      expect(container.firstChild).toContainElement(th);
      expect(th).toHaveStyle({
        position: 'sticky',
      });
    });

    it('renders the component as sticky and with an offset Top', () => {
      const { container } = render(
        <Table>
          <Table.Head isSticky offsetTop="20px">
            <Table.Row>
              <Table.Cell>test</Table.Cell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const th = screen.getByRole('columnheader');
      expect(container.firstChild).toContainElement(th);
      expect(th).toHaveStyle({
        top: '20px',
      });
    });
  });

  describe('Table.Cell', () => {
    it('can render as sortable', async () => {
      const user = userEvent.setup();

      render(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell isSortable>test</Table.Cell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const th = screen.getByRole('columnheader');
      expect(th).toHaveAttribute('aria-sort', 'none');

      await user.click(th);
      expect(th).toHaveAttribute('aria-sort', 'none');
    });
  });
});
