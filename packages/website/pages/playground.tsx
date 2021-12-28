import React from 'react';
import { css } from 'emotion';
import { Flex, Text, Heading, CopyButton } from '@contentful/f36-components';
import { OpenInCodeSandboxButton } from '@codesandbox/sandpack-react';
import tokens from '@contentful/f36-tokens';
import { LayoutFullSize } from '../components/LayoutFullSize';
import { SandpackRenderer } from '../components/SandpackRenderer';

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

const defaultCode = `
import { Button } from '@contentful/f36-components';

export default function App() {
  return <Button>Click on me!</Button>
}
`.trim();

function Topbar() {
  return (
    <Flex
      className={styles.topbar}
      gap="spacingM"
      justifyContent="space-between"
    >
      <Flex flexGrow={1} alignItems="center">
        <Heading as="h1" marginBottom="none">
          Playground
        </Heading>
      </Flex>
      <div className={styles.divider} />
      <Flex alignItems="center" gap="spacingXs">
        <Text fontColor="gray800">Share your playground: </Text>
        <CopyButton
          value="// todo: pass a real url value here"
          className={css({ button: { border: 'none !important' } })}
          tooltipText="Copy URL"
        />
      </Flex>
      <div className={styles.divider} />
      <Flex alignItems="center" gap="spacingXs">
        <Text fontColor="gray800">Open in CodeSandbox: </Text>
        <OpenInCodeSandboxButton />
      </Flex>
    </Flex>
  );
}
function Playground() {
  return (
    <div className={styles.root}>
      <SandpackRenderer code={defaultCode} topbar={<Topbar />} />
    </div>
  );
}

Playground.getLayout = function PlaygroundLayout(props: { page: JSX.Element }) {
  return (
    <LayoutFullSize currentPage="/playground">{props.page}</LayoutFullSize>
  );
};

export default Playground;
