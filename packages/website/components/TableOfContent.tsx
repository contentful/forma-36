import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { Subheading } from '@contentful/f36-components';

const styles = {
  root: css({
    display: 'block',
    background: 'white',
    marginBottom: tokens.spacingL,
    padding: tokens.spacingL,
    marginTop: `calc(-1 * ${tokens.spacingL})`,
    '@media (min-width: 1400px)': {
      height: '400px',
      width: '350px',
      marginLeft: '50px',
      marginRight: '-100px',
      display: 'inline-block',
      background: 'white',
      float: 'right',
    },
  }),
  inner: css({
    width: '100%',
  }),
};

export function TableOfContent(props: { toc: any }) {
  if (!props.toc || !props.toc.children || props.toc.children.length < 2) {
    return null;
  }
  console.log(props.toc.children);
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <Subheading as="h2">Table of contents</Subheading>
      </div>
    </div>
  );
}
