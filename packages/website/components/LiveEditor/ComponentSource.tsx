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
import { useForm, useController } from 'react-hook-form';
import { MdAccessAlarm } from 'react-icons/md';
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
  css,
  f36icons,
  tokens,
  // most used react hooks
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  useContext,
  // other
  useForm,
  useController,
  MdAccessAlarm,
};

const styles = {
  root: css`
    margin-bottom: ${tokens.spacingM};
  `,
  error: css`
    font-family: ${tokens.fontStackMonospace};
    font-size: ${tokens.fontSizeS};
    background: ${tokens.colorNegative};
    color: ${tokens.colorWhite};
    padding: ${tokens.spacingXs};
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
  floatingControls: css`
    position: absolute;
    bottom: ${tokens.spacingS};
    right: ${tokens.spacingS};
    z-index: 2;
  `,
  copyButton: css`
    button {
      border-radius: ${tokens.borderRadiusMedium};
    }
  `,
  playgroundButton: css`
    margin-left: ${tokens.spacingS};
    font-family: ${tokens.fontStackPrimary};
  `,
};

export function ComponentSource({
  children,
  file,
}: {
  children: string;
  file?: string;
}) {
  const [showSource, setShowSource] = useState(true);
  const router = useRouter();

  const handleToggle = () => {
    setShowSource((prevState) => !prevState);
  };

  const isExampleFromFile = Boolean(file);

  return (
    <Flex flexDirection="column" className={styles.root}>
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
              <Flex className={styles.floatingControls}>
                <CopyButton
                  tooltipProps={{ placement: 'left' }}
                  className={styles.copyButton}
                  value={children}
                />
                {isExampleFromFile && (
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
                )}
              </Flex>

              <LiveEditor
                style={{ paddingBottom: '45px', minHeight: '100px' }}
              />
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
