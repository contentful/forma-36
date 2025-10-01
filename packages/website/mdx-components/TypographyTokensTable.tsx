import React from 'react';
import { Table, Text, type TextProps } from '@contentful/f36-components';

import FontSizeTokens from '@contentful/f36-tokens';
import FontStackTokens from '@contentful/f36-tokens';
import FontWeightTokens from '@contentful/f36-tokens';
import LineHeightTokens from '@contentful/f36-tokens';
import LetterSpacingTokens from '@contentful/f36-tokens';
interface Props {
  variant: 'stack' | 'size' | 'lineHeight' | 'letterSpacing' | 'weight';
}

export function TypographyTokensTable({ variant }: Props) {
  let tokenValues;
  const isSizeVariant = variant === 'size';

  switch (variant) {
    case 'size':
      tokenValues = FontSizeTokens;
      break;
    case 'letterSpacing':
      tokenValues = LetterSpacingTokens;
      break;
    case 'lineHeight':
      tokenValues = LineHeightTokens;
      break;
    case 'weight':
      tokenValues = FontWeightTokens;
      break;
    default:
      tokenValues = FontStackTokens;
  }

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>CSS Variable</Table.Cell>
          <Table.Cell>Value</Table.Cell>
          {!isSizeVariant && <Table.Cell>Example</Table.Cell>}
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
                <Text
                  fontSize={
                    isSizeVariant
                      ? (tokenName as TextProps['fontSize'])
                      : 'fontSizeM'
                  }
                  lineHeight="lineHeightDefault"
                >
                  {tokenName}
                </Text>
              </Table.Cell>
              <Table.Cell style={{ verticalAlign: 'middle' }}>
                --{token}
              </Table.Cell>
              <Table.Cell
                style={{ verticalAlign: 'middle', maxWidth: '200px' }}
              >
                {value}
              </Table.Cell>
              {!isSizeVariant && (
                <Table.Cell
                  style={{ verticalAlign: 'middle', maxWidth: '400px' }}
                >
                  {variant !== 'letterSpacing' && (
                    <Text
                      fontStack={
                        variant === 'stack'
                          ? (tokenName as TextProps['fontStack'])
                          : 'fontStackPrimary'
                      }
                      fontWeight={
                        variant === 'weight'
                          ? (tokenName as TextProps['fontWeight'])
                          : 'fontWeightNormal'
                      }
                      lineHeight={
                        variant === 'lineHeight'
                          ? (tokenName as TextProps['lineHeight'])
                          : 'lineHeightDefault'
                      }
                    >
                      Manage content better with infrastructure. It’s the cure
                      for the common CMS. Update once and publish everywhere, so
                      teams build digital products faster.
                    </Text>
                  )}

                  {variant === 'letterSpacing' && (
                    <Text style={{ letterSpacing: value }}>Contentful</Text>
                  )}
                </Table.Cell>
              )}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
