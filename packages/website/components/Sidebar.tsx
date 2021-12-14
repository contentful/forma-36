import React from 'react';
import { css } from 'emotion';
import Link from 'next/link';
import tokens from '@contentful/f36-tokens';
import { TextInput } from '@contentful/f36-components';

const styles = {
  sidemenu: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 70px);
    border-right: 1px solid ${tokens.gray300};
  `,

  search: css`
    padding: ${tokens.spacingS};
  `,
  navList: css`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${tokens.gray300};
    padding: ${tokens.spacingM} 0;
    overflow-y: auto;
    color: ${tokens.gray700};
  `,
};

export const Sidebar = () => {
  return (
    <div className={styles.sidemenu}>
      <div className={styles.search}>
        <TextInput />
      </div>
      <nav className={styles.navList} aria-label="Main Navigation">
        <Link href="/getting-started">Getting started</Link>
        <Link href="/contributing">Contributing to Forma 36</Link>
        <Link href="/migration-v3-to-v4">Migration Guide</Link>
      </nav>
    </div>
  );
};
