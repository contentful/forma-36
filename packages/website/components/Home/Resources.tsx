import React from 'react';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

const styles = {
  resources: css`
    max-width: 960px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${tokens.spacingXl};
  `,
};

export const Resources = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.resources}>{children}</div>
);
