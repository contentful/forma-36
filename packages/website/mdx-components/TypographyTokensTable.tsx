import React from 'react';
import { Table, Text, type TextProps } from '@contentful/f36-components';

import fontBaseTokens from '@contentful/f36-tokens/src/tokens/typography/font-base';
import fontSizeTokens from '@contentful/f36-tokens/src/tokens/typography/font-size';
import fontStackTokens from '@contentful/f36-tokens/src/tokens/typography/font-stack';
import fontWeightTokens from '@contentful/f36-tokens/src/tokens/typography/font-weight';
import letterSpacingTokens from '@contentful/f36-tokens/src/tokens/typography/letter-spacing';
import lineHeightTokens from '@contentful/f36-tokens/src/tokens/typography/line-height';

interface Props {
  variant:
    | 'stack'
    | 'base'
    | 'size'
    | 'lineHeight'
    | 'letterSpacing'
    | 'weight';
}

export function TypographyTokensTable({ variant }: Props) {
  let tokenValues;
  const isSizeVariant = variant === 'size';

  switch (variant) {
    case 'base':
      tokenValues = fontBaseTokens;
      break;
    case 'size':
      tokenValues = fontSizeTokens;
      break;
    case 'letterSpacing':
      tokenValues = letterSpacingTokens;
      break;
    case 'lineHeight':
      tokenValues = lineHeightTokens;
      break;
    case 'weight':
      tokenValues = fontWeightTokens;
      break;
    default:
      tokenValues = fontStackTokens;
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
