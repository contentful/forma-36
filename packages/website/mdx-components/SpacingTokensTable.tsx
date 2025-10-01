import React from 'react';
import { Box, Table } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import spacing from '@contentful/f36-tokens';

export function SpacingTokensTable() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell align="right">Value in px</Table.Cell>
          <Table.Cell align="right">Value in rem</Table.Cell>
          <Table.Cell>Example</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {Object.keys(spacing).map((token) => {
          const value = spacing[token];
          const valuePx = parseFloat(value) * 16;
          const tokenName = token.replace(/-\d?[a-z]{1}/, (match) =>
            match.toUpperCase().replace('-', ''),
          );

          return (
            <Table.Row key={token}>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                <strong>{tokenName}</strong>
              </Table.Cell>
              <Table.Cell align="right" style={{ verticalAlign: 'middle' }}>
                <pre>{valuePx}px</pre>
              </Table.Cell>
              <Table.Cell align="right" style={{ verticalAlign: 'middle' }}>
                <pre>{value}</pre>
              </Table.Cell>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                <Box
                  style={{
                    width: value,
                    height: value,
                    backgroundColor: tokens.blue500,
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
