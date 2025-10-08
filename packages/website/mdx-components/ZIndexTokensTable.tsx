import React from 'react';
import { Table } from '@contentful/f36-components';

import zIndexTokens from '@contentful/f36-tokens/src/tokens/z-index';

export function ZIndexTokensTable() {
  const tokenValues = zIndexTokens;

  return (
    <Table style={{ maxWidth: '960px' }}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>CSS Variable</Table.Cell>
          <Table.Cell>Value</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {Object.keys(tokenValues).map((token) => {
          const value = tokenValues[token];
          const tokenName = token.replace(/-\d?[a-z]/g, (match) =>
            match.toUpperCase().replace('-', ''),
          );

          return (
            <Table.Row key={token}>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                {tokenName}
              </Table.Cell>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                --{token}
              </Table.Cell>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                {value}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
