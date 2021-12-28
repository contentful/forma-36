/* eslint-disable import/no-default-export */
import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import qs from 'qs';
import tokens from '@contentful/f36-tokens';

import { SandpackRenderer } from '../SandpackRenderer';
import { PlaygroundTopBar } from './PlaygroundTopBar';
import * as coder from '../../utils/coder';

const styles = {
  root: css({
    height: '100%',
  }),
  topbar: css({
    height: '50px',
    paddingLeft: tokens.spacingM,
    paddingRight: tokens.spacingM,
  }),
  divider: css({
    height: '50px',
    width: '1px',
    backgroundColor: '#e4e7eb',
  }),
};

function tryDecode(encoded?: unknown) {
  if (typeof encoded === 'string') {
    try {
      return coder.decode(encoded);
    } catch (err) {
      console.error('Could not decode query:', err);
    }
  }

  return null;
}

export default function Playground() {
  const [code, setCode] = useState('');

  useEffect(() => {
    const query = qs.parse(window.location.search.slice(1));
    const decoded = tryDecode(query.code);
    setCode(decoded || defaultCode);
  }, []);

  return (
    <div className={styles.root}>
      {code && <SandpackRenderer code={code} topbar={<PlaygroundTopBar />} />}
    </div>
  );
}

const defaultCode = `
import { Button } from '@contentful/f36-components';

export default function App() {
  return <Button>Click on me!</Button>
}
`.trim();
