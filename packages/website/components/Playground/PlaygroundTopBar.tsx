import React from 'react';
import { useRouter } from 'next/router';
import CopyToClipboard from 'react-copy-to-clipboard';
import { css, cx } from 'emotion';
import { OpenInCodeSandboxButton } from '@codesandbox/sandpack-react';
import tokens from '@contentful/f36-tokens';
import { Flex, Text, Heading, Tooltip } from '@contentful/f36-components';
import { LinkAlternateIcon } from '@contentful/f36-icons';
import { useUrlSync } from './useUrlSync';

const styles = {
  topbar: css({
    height: '50px',
    paddingLeft: tokens.spacingXl,
    borderBottom: `1px solid ${tokens.gray300}`,
    overflow: 'hidden',
  }),
  tooltipWrapper: css({
    height: '100%',
  }),
  embeddedButton: css({
    height: '100%',
    backgroundColor: tokens.colorWhite,
    border: 0,
    borderLeft: `1px solid ${tokens.gray300}`,
    transition: `background ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
    ':hover': {
      backgroundColor: tokens.gray100,
    },
  }),
  shareButton: css({
    padding: `0 ${tokens.spacingM}`,
    cursor: 'pointer',
  }),
  codeSandboxButton: css({
    display: 'flex',
    alignItems: 'center',
    '> a': {
      height: '100% !important',
      padding: `0 ${tokens.spacingM} !important`,
    },
  }),
};

export function PlaygroundTopBar() {
  useUrlSync();
  const router = useRouter();

  return (
    <Flex
      className={styles.topbar}
      gap="spacingM"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading as="h1" marginBottom="none">
        Playground
      </Heading>

      <Flex alignItems="center" className={css({ height: '100%' })}>
        <UrlCopyButton url={window.location.origin + router.asPath} />

        <Tooltip
          placement="bottom"
          targetWrapperClassName={cx(
            styles.embeddedButton,
            styles.codeSandboxButton,
          )}
          content="Open in CodeSandbox"
        >
          <OpenInCodeSandboxButton />
        </Tooltip>
      </Flex>
    </Flex>
  );
}

function UrlCopyButton({ url }) {
  const [copied, setCopied] = React.useState(false);

  const handleOnCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text={url} onCopy={handleOnCopy}>
      <Tooltip
        placement="bottom"
        targetWrapperClassName={styles.tooltipWrapper}
        content={copied ? 'Copied' : 'Copy url'}
      >
        <Flex
          as="button"
          alignItems="center"
          gap="spacingXs"
          className={cx(styles.embeddedButton, styles.shareButton)}
        >
          <LinkAlternateIcon variant="muted" />
          <Text fontColor="gray800">Share code</Text>
        </Flex>
      </Tooltip>
    </CopyToClipboard>
  );
}
