import React from 'react';
import { styled } from '@storybook/theming';
import tokens from '@contentful/forma-36-tokens';

const Container = styled.div`
  padding: 20px;
`;

const ComponentName = styled.h2`
  margin-bottom: 20px;
  margin-top: 0px;
`;

const Table = styled.table`
  border: solid 1px ${tokens.colorElementLight};
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 1200px;

  thead th {
    background-color: ${tokens.colorElementLight};
    border: solid 1px ${tokens.colorElementLight};
    color: ${tokens.colorTextMid};
    padding: 10px;
    text-align: left;
  }
  tbody td {
    border: solid 1px ${tokens.colorElementLight};
    color: ${tokens.colorTextMid};
    padding: 10px;
  }
`;

const TableComponent = ({ propDefinitions, name }) => {
  const children = propDefinitions.map(
    ({ name, type, required, description, defaultValue }) => {
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{required ? 'yes' : ''}</td>
          <td>{type.name}</td>
          <td>{defaultValue ? defaultValue.value : ''}</td>
          <td>{description}</td>
        </tr>
      );
    },
  );

  return (
    <Container>
      <ComponentName>{name}</ComponentName>
      <Table>
        <thead>
          <tr>
            <th width="20%">Name</th>
            <th width="10%">Required</th>
            <th width="25%">Type</th>
            <th width="10%">Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    </Container>
  );
};

export default TableComponent;
