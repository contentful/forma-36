import React from 'react';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import { CheckCircleIcon, WarningIcon } from '@contentful/f36-icons';
import { Card, Subheading, Paragraph } from '@contentful/f36-components';

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
  <div className={styles.wrapper}>
    {goodExample && (
      <Card className={styles.card}>
        <Subheading className={styles.title}>
          <CheckCircleIcon color="positive" className={styles.icon} />
          Do
        </Subheading>
        <div className={styles.example}>{goodExample.example}</div>
        {goodExample.info && (
          <Paragraph className={styles.info}>{goodExample.info}</Paragraph>
        )}
      </Card>
    )}
    {badExample && (
      <Card className={styles.card}>
        <Subheading className={styles.title}>
          <WarningIcon color="negative" className={styles.icon} />
          {"Don't"}
        </Subheading>
        <div className={styles.example}>{badExample.example}</div>
        {badExample.info && (
          <Paragraph className={styles.info}>{badExample.info}</Paragraph>
        )}
      </Card>
    )}
  </div>
);

export default ExampleCards;
