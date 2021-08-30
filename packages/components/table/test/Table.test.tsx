import React from 'react';
import { render } from '@testing-library/react';

import { Table } from '../src';

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

  describe('Table.Head', () => {
    it('renders the component as sticky', () => {
      const { container, getByRole } = render(
        <Table>
          <Table.Head isSticky>
            <Table.Row>
              <Table.Cell>test</Table.Cell>
            </Table.Row>
          </Table.Head>
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
          <Table.Head isSticky offsetTop="20px">
            <Table.Row>
              <Table.Cell>test</Table.Cell>
            </Table.Row>
          </Table.Head>
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
