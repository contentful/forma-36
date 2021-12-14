import React from 'react';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

const styles = {
  root: css`
    display: 'flex';
    flex-direction: 'column';
    width: 960px;
    margin: 0 auto;
    padding-top: ${tokens.spacing2Xl};
  `,
};

export function PageContent(props: { children: React.ReactChild }) {
  return <article className={styles.root}>{props.children}</article>;
}
