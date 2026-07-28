import React from 'react';
import { StackableTable } from '../src';

const columnTitles = ['Name', 'Email', 'Organization role', 'Last activity'];

export default function StackableExample() {
  return (
    <StackableTable columnTitles={columnTitles}>
      <StackableTable.Body>
        <StackableTable.Row>
          <StackableTable.Cell>Claus Mitchell</StackableTable.Cell>
          <StackableTable.Cell>
            claus.mitchell@contentful.com
          </StackableTable.Cell>
          <StackableTable.Cell>CEO</StackableTable.Cell>
          <StackableTable.Cell>August 29, 2018</StackableTable.Cell>
        </StackableTable.Row>
        <StackableTable.Row>
          <StackableTable.Cell>Johannes Ramos</StackableTable.Cell>
          <StackableTable.Cell>
            johannes.ramos@contentful.com
          </StackableTable.Cell>
          <StackableTable.Cell>CTO</StackableTable.Cell>
          <StackableTable.Cell>July 27, 2019</StackableTable.Cell>
        </StackableTable.Row>
        <StackableTable.Row>
          <StackableTable.Cell>Alex Kalinoski</StackableTable.Cell>
          <StackableTable.Cell>
            alex.kalinoski@contentful.com
          </StackableTable.Cell>
          <StackableTable.Cell>CDO</StackableTable.Cell>
          <StackableTable.Cell>June 13, 2019</StackableTable.Cell>
        </StackableTable.Row>
      </StackableTable.Body>
    </StackableTable>
  );
}
