import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  useContext,
} from 'react';
import { css } from 'emotion';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import tokens from '@contentful/f36-tokens';
import * as f36Components from '@contentful/f36-components';
import * as f36utils from '@contentful/f36-utils';
import { Card, Button, CopyButton } from '@contentful/f36-components';
import * as f36icons from '@contentful/f36-icons';
import { ExternalLinkIcon } from '@contentful/f36-icons';
import { Flex } from '@contentful/f36-core';
import theme from 'prism-react-renderer/themes/github';
import { formatSourceCode } from './utils';
import { useRouter } from 'next/router';
import * as coder from '../../utils/coder';

const liveProviderScope = {
  ...f36icons,
  ...f36Components,
  ...f36utils,
  f36icons,
  tokens,
  // most used react hooks
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  useContext,
};

const styles = {
  error: css`
    font-family: ${tokens.fontStackMonospace};
    font-size: ${tokens.fontSizeS};
    background: ${tokens.colorNegative};
    color: ${tokens.colorWhite};
    padding: ${tokens.spacingXs};
  `,
  editor: css`
    font-family: ${tokens.fontStackMonospace};
    background-color: #222031;
    color: #ffffff;
    min-height: 100px;
  `,
  // !important was necessary because these styles are being applied after the Card component styles
  card: css`
    font-family: ${tokens.fontStackPrimary};
    border-radius: ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0 !important;
  `,
  toggle: css`
    font-family: ${tokens.fontStackPrimary};
    border-radius: 0 0 ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium};
  `,
  copyButton: css`
    position: absolute;
    bottom: ${tokens.spacingS};
    right: calc(200px + ${tokens.spacingS});
    z-index: 1000;
  `,
  playgroundButton: css`
    position: absolute;
    bottom: ${tokens.spacingS};
    right: ${tokens.spacingS};
    z-index: 1000;
    font-family: ${tokens.fontStackPrimary};
  `,
};

export function ComponentSource({ children }: { children: string }) {
  const [showSource, setShowSource] = useState(true);
  const router = useRouter();

  const handleToggle = () => {
    setShowSource((prevState) => !prevState);
  };

  return (
    <Flex flexDirection="column" marginTop="spacingS" marginBottom="spacingM">
      <LiveProvider
        code={formatSourceCode(children)}
        theme={theme}
        // The order is important here
        scope={liveProviderScope}
      >
        <Card className={styles.card}>
          <LivePreview />
        </Card>
        {showSource && (
          <>
            <LiveError className={styles.error} />
            <div style={{ position: 'relative' }}>
              <CopyButton
                tooltipProps={{ placement: 'left' }}
                className={styles.copyButton}
                value={children}
              />
              <Button
                className={styles.playgroundButton}
                endIcon={<ExternalLinkIcon />}
                onClick={() => {
                  const href = `/playground?code=${coder.encode(children)}`;
                  router.push(href, href);
                }}
              >
                Open in Playground
              </Button>
              <LiveEditor className={styles.editor} />
            </div>
          </>
        )}
        <Button
          className={styles.toggle}
          variant="secondary"
          onClick={handleToggle}
          isFullWidth
        >
          {showSource ? 'Hide source' : 'Show source'}
        </Button>
      </LiveProvider>
    </Flex>
  );
}
