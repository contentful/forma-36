import React from 'react';
import { css } from 'emotion';
import { LayoutFullSize } from '../components/LayoutFullSize';
import { SandpackRenderer } from '../components/SandpackRenderer';

const styles = {
  root: css({
    height: '100%',
  }),
};

const defaultCode = `
import { Button } from '@contentful/f36-components';

export default function App() {
  return <Button>Click on me!</Button>
}
`.trim();

function Playground() {
  return (
    <div className={styles.root}>
      <SandpackRenderer code={defaultCode} />
    </div>
  );
}

Playground.getLayout = function PlaygroundLayout(props: { page: JSX.Element }) {
  return (
    <LayoutFullSize currentPage="/playground">{props.page}</LayoutFullSize>
  );
};

export default Playground;
