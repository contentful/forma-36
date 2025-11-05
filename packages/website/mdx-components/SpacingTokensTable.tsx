import React from 'react';
import { Box, Table } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export function SpacingTokensTable() {
  const spacingTokens = {
    'spacing-2xs': tokens.spacing2Xs,
    'spacing-xs': tokens.spacingXs,
    'spacing-s': tokens.spacingS,
    'spacing-m': tokens.spacingM,
    'spacing-l': tokens.spacingL,
    'spacing-xl': tokens.spacingXl,
    'spacing-2xl': tokens.spacing2Xl,
    'spacing-3xl': tokens.spacing3Xl,
    'spacing-4xl': tokens.spacing4Xl,
  };

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
        {Object.keys(spacingTokens).map((token) => {
          const value = spacingTokens[token];
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
