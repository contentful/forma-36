import React from 'react';
import { Table, Text, type TextProps } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

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
  const fontBaseTokens = {
    'font-base-default': tokens.fontBaseDefault,
  };

  const fontSizeTokens = {
    'font-size-4xl': tokens.fontSize4Xl,
    'font-size-3xl': tokens.fontSize3Xl,
    'font-size-2xl': tokens.fontSize2Xl,
    'font-size-xl': tokens.fontSizeXl,
    'font-size-xl-high': tokens.fontSizeXlHigh,
    'font-size-l': tokens.fontSizeL,
    'font-size-l-high': tokens.fontSizeLHigh,
    'font-size-m': tokens.fontSizeM,
    'font-size-m-high': tokens.fontSizeMHigh,
    'font-size-s': tokens.fontSizeS,
    'font-size-s-high': tokens.fontSizeSHigh,
  };

  const fontStackTokens = {
    'font-stack-primary': tokens.fontStackPrimary,
    'font-stack-monospace': tokens.fontStackMonospace,
  };

  const fontWeightTokens = {
    'font-weight-normal': tokens.fontWeightNormal,
    'font-weight-medium': tokens.fontWeightMedium,
    'font-weight-demi-bold': tokens.fontWeightDemiBold,
  };

  const letterSpacingTokens = {
    'letter-spacing-default': tokens.letterSpacingDefault,
    'letter-spacing-wide': tokens.letterSpacingWide,
  };

  const lineHeightTokens = {
    'line-height-default': tokens.lineHeightDefault,
    'line-height-condensed': tokens.lineHeightCondensed,
    'line-height-4xl': tokens.lineHeight4Xl,
    'line-height-3xl': tokens.lineHeight3Xl,
    'line-height-2xl': tokens.lineHeight2Xl,
    'line-height-xl': tokens.lineHeightXl,
    'line-height-xl-high': tokens.lineHeightXlHigh,
    'line-height-l': tokens.lineHeightL,
    'line-height-l-high': tokens.lineHeightLHigh,
    'line-height-m': tokens.lineHeightM,
    'line-height-m-high': tokens.lineHeightMHigh,
    'line-height-s': tokens.lineHeightS,
    'line-height-s-high': tokens.lineHeightSHigh,
  };

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
