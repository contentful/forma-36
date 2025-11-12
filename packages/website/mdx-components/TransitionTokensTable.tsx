import React from 'react';
import { css } from '@emotion/css';
import { Box, Table } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

const styles = {
  container: css({
    width: '80px',
    cursor: 'pointer',
    '&:hover > div': {
      transform: 'translate(80px)',
    },
  }),
  box: css({
    width: '20px',
    height: '20px',
    backgroundColor: tokens.blue500,
  }),
};

interface Props {
  variant: 'duration' | 'easing';
}

export function TransitionTokensTable({ variant }: Props) {
  const durationTokens = {
    'transition-duration-short': tokens.transitionDurationShort,
    'transition-duration-default': tokens.transitionDurationDefault,
    'transition-duration-long': tokens.transitionDurationLong,
  };

  const easingTokens = {
    'transition-easing-default': tokens.transitionEasingDefault,
    'transition-easing-cubic-bezier': tokens.transitionEasingCubicBezier,
  };

  const tokenValues = variant === 'duration' ? durationTokens : easingTokens;

  return (
    <Table style={{ maxWidth: '960px' }}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>CSS Variable</Table.Cell>
          <Table.Cell>Value</Table.Cell>
          <Table.Cell>Example</Table.Cell>
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
              <Table.Cell style={{ verticalAlign: 'middle', width: '140px' }}>
                <div className={styles.container}>
                  <Box
                    className={styles.box}
                    style={{
                      transition:
                        variant === 'duration'
                          ? `ease ${value}`
                          : `${value} 0.5s`,
                    }}
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
