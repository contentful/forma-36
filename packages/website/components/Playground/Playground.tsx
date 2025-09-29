/* eslint-disable import/no-default-export */
import React, { useEffect, useState } from 'react';
import qs from 'qs';

import { SandpackRenderer } from './SandpackRenderer';
import * as coder from '../../utils/coder';

const defaultCode = `
import { Button } from '@contentful/f36-components';

export default function App() {
  return <Button>Click on me!</Button>
}
`.trim();

function tryDecode(encoded?: unknown) {
  if (typeof encoded === 'string') {
    try {
      return coder.decode(encoded);
    } catch (err) {
      // eslint-disable-next-line no-console
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
    setCode(decoded ?? defaultCode);
  }, []);

  if (!code) {
    return null;
  }

  return <SandpackRenderer code={code} />;
}
