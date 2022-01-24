import React from 'react';
import { useRouter } from 'next/router';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import {
  Flex,
  Text,
  Heading,
  CopyButton,
  Tooltip,
} from '@contentful/f36-components';
import { OpenInCodeSandboxButton } from '@codesandbox/sandpack-react';
import { useUrlSync } from './useUrlSync';

const styles = {
  topbar: css({
    height: '50px',
    paddingLeft: tokens.spacingXl,
    borderBottom: `1px solid ${tokens.gray300}`,
  }),
  codeSandboxButton: css({
    backgroundColor: tokens.colorWhite,
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    borderLeft: `1px solid ${tokens.gray300}`,
    transition: `background ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
    '> a': {
      height: '100% !important',
      padding: `${tokens.spacingM} !important`,
    },
    ':hover': {
      backgroundColor: tokens.gray100,
    },
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
  useUrlSync();

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

      <Flex alignItems="center" gap="spacingXs">
        <Text fontColor="gray800">Share your playground: </Text>
        <UrlCopyButton />
      </Flex>

      <Flex alignItems="center" gap="spacingXs">
        <Tooltip
          placement="bottom"
          targetWrapperClassName={styles.codeSandboxButton}
          content="Open in CodeSandbox"
        >
          <OpenInCodeSandboxButton />
        </Tooltip>
      </Flex>
    </Flex>
  );
}
