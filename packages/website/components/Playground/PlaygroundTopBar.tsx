import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { css, cx } from 'emotion';
import { UnstyledOpenInCodeSandboxButton } from '@codesandbox/sandpack-react';
import tokens from '@contentful/f36-tokens';
import { Flex, Text, Heading, Tooltip, Icon } from '@contentful/f36-components';
import { useUrlSync } from './useUrlSync';
import { CodeSandboxLogo } from './codesandbox-logo';
import { LinkSimpleIcon } from '@contentful/f36-icons';

const styles = {
  topbar: css({
    height: '50px',
    paddingLeft: tokens.spacingXl,
    borderBottom: `1px solid ${tokens.gray300}`,
    overflow: 'hidden',
    flexShrink: 0,
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
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    gap: tokens.spacingXs,
    padding: `0 ${tokens.spacingM}`,
    textDecoration: 'none',
  }),
};

export function PlaygroundTopBar() {
  const { codeUrl } = useUrlSync();

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
        <UrlCopyButton url={codeUrl} />

        <UnstyledOpenInCodeSandboxButton
          className={cx(styles.embeddedButton, styles.codeSandboxButton)}
        >
          <Icon as={CodeSandboxLogo} color={tokens.gray600} size="medium" />
          <Text fontColor="gray800">Open in CodeSandbox</Text>
        </UnstyledOpenInCodeSandboxButton>
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
          <LinkSimpleIcon />
          <Text fontColor="gray800">Copy Playground URL</Text>
        </Flex>
      </Tooltip>
    </CopyToClipboard>
  );
}
