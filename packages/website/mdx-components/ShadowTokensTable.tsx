import React from 'react';
import { Box, Table } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import boxShadowTokens from '@contentful/f36-tokens';

export function ShadowTokensTable() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>Value</Table.Cell>
          <Table.Cell>Example</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {Object.keys(boxShadowTokens).map((token) => {
          const value = boxShadowTokens[token];
          const tokenName = token.replace(/-\d?[a-z]/g, (match) =>
            match.toUpperCase().replace('-', ''),
          );

          return (
            <Table.Row key={token}>
              <Table.Cell
                style={{ verticalAlign: 'middle', minWidth: '250px' }}
              >
                <strong>{tokenName}</strong>
              </Table.Cell>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                {value}
              </Table.Cell>
              <Table.Cell style={{ verticalAlign: 'middle', width: '100px' }}>
                <Box
                  style={{
                    width: '100px',
                    height: '100px',
                    border: `1px solid ${tokens.gray100}`,
                    boxShadow: tokens[tokenName],
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
