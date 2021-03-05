import React from 'react';
import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/core';
import { Card, Icon, Subheading, Paragraph } from '@contentful/f36-components';

const styles = {
  wrapper: css`
    display: grid;
    grid-column-gap: ${tokens.spacingM};
    grid-template-columns: 1fr 1fr;
    margin: ${tokens.spacingL} 0;
  `,

  card: css`
    display: flex;
    flex-direction: column;
  `,

  title: css`
    display: flex;
    align-items: center;
  `,

  icon: css`
    margin-right: ${tokens.spacingS};
    flex-shrink: 0;
  `,

  example: css`
    background: ${tokens.colorElementLightest};
    padding: ${tokens.spacingXs};
  `,

  info: css`
    margin: ${tokens.spacingS} 0 0;
    font-style: italic;
  `,
};

const ExampleCards = ({ goodExample, badExample }) => (
  <div css={styles.wrapper}>
    {goodExample && (
      <Card css={styles.card}>
        <Subheading css={styles.title}>
          <Icon icon="CheckCircle" color="positive" css={styles.icon} />
          Do
        </Subheading>
        <div css={styles.example}>{goodExample.example}</div>
        {goodExample.info && (
          <Paragraph css={styles.info}>{goodExample.info}</Paragraph>
        )}
      </Card>
    )}
    {badExample && (
      <Card css={styles.card}>
        <Subheading css={styles.title}>
          <Icon icon="Warning" color="negative" css={styles.icon} />
          {"Don't"}
        </Subheading>
        <div css={styles.example}>{badExample.example}</div>
        {badExample.info && (
          <Paragraph css={styles.info}>{badExample.info}</Paragraph>
        )}
      </Card>
    )}
  </div>
);

export default ExampleCards;
