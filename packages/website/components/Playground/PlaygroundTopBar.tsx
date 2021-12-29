import React from 'react';
import { useRouter } from 'next/router';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { Flex, Text, Heading, CopyButton } from '@contentful/f36-components';
import { OpenInCodeSandboxButton } from '@codesandbox/sandpack-react';
import { UrlSync } from './UrlSync';

const styles = {
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

function UrlCopyButton() {
  const router = useRouter();
  return (
    <CopyButton
      value={window.location.origin + router.asPath}
      className={css({ button: { border: 'none !important' } })}
      tooltipText="Copy"
    />
  );
}

export function PlaygroundTopBar() {
  return (
    <>
      <UrlSync />
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
          <UrlCopyButton />
        </Flex>
        <div className={styles.divider} />
        <Flex alignItems="center" gap="spacingXs">
          <Text fontColor="gray800">Open in CodeSandbox: </Text>
          <OpenInCodeSandboxButton />
        </Flex>
      </Flex>
    </>
  );
}
