import React from 'react';
import { Box, Table } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import borderRadius from '@contentful/f36-tokens';

export function BorderRadiusTable() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>Value in px</Table.Cell>
          <Table.Cell>Example</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {Object.keys(borderRadius).map((token) => {
          const value = borderRadius[token];
          const tokenName = token.replace(/-\d?[a-z]{1}/, (match) =>
            match.toUpperCase().replace('-', ''),
          );

          return (
            <Table.Row key={token}>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                <strong>{tokenName}</strong>
              </Table.Cell>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                <pre>{value}</pre>
              </Table.Cell>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                <Box
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: tokens.blue500,
                    borderRadius: value,
                  }}
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
