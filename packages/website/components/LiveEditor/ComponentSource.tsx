import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  useContext,
} from 'react';
import { css, cx } from 'emotion';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import tokens from '@contentful/f36-tokens';
import * as f36Components from '@contentful/f36-components';
import { Multiselect } from '@contentful/f36-multiselect';
import { NavList } from '@contentful/f36-navlist';
import * as f36utils from '@contentful/f36-utils';
import { Avatar, AvatarGroup } from '@contentful/f36-avatar';
import { Image } from '@contentful/f36-image';
import { useForm, useController } from 'react-hook-form';
import { MdAccessAlarm } from 'react-icons/md';
import { Card, Button, CopyButton, Flex } from '@contentful/f36-components';
import * as f36icons from '@contentful/f36-icons';
import { ExternalLinkIcon } from '@contentful/f36-icons';
import { theme } from './theme';
import { formatSourceCode } from './utils';
import * as coder from '../../utils/coder';
import FocusLock from 'react-focus-lock';
import { DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { format, parse, isValid } from 'date-fns';

const liveProviderScope = {
  ...f36Components,
  ...f36icons,
  ...f36utils,
  Avatar, // Remove when avatar is added to f36-components
  AvatarGroup, // Remove when avatar is added to f36-components
  Image, // Remove when added to f36-components
  Multiselect, // Remove when added to f36-components
  NavList, // Remove when added to f36-components
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
  // react-hook-form
  useForm,
  useController,
  // other
  MdAccessAlarm,
  FocusLock,
  // dnd-kit
  arrayMove,
  CSS,
  DndContext,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  // date-fns
  format,
  parse,
  isValid,
};

const styles = {
  root: css`
    margin-bottom: ${tokens.spacingM};
  `,
  error: css`
    font-family: ${tokens.fontStackMonospace};
    font-size: ${tokens.fontSizeS};
    background: ${tokens.red600};
    color: ${tokens.colorWhite};
    padding: ${tokens.spacingXs};
  `,
  // !important was necessary because these styles are being applied after the Card component styles
  card: css`
    padding: 3rem;
    font-family: ${tokens.fontStackPrimary};
    border-radius: ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0 !important;
  `,
  floatingPanel: css`
    position: absolute;
    bottom: ${tokens.spacingS};
    right: ${tokens.spacingS};
    z-index: 2;
  `,
  toggle: css`
    font-family: ${tokens.fontStackPrimary};
    position: absolute;
    top: ${tokens.spacingS};
    right: ${tokens.spacingS};
    z-index: 2;
  `,
  copyButton: css`
    button {
      border-radius: ${tokens.borderRadiusMedium};
    }
  `,
  playgroundButton: css`
    font-family: ${tokens.fontStackPrimary};
  `,
  // !important is needed to overwrite the react live setup.
  editor: css`
    min-height: 120px;
    padding: ${tokens.spacingL} ${tokens.spacingL} ${tokens.spacingXl} !important;
    border-radius: 0 0 ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium};
    & > textarea {
      padding: inherit !important;
      border-radius: inherit;
    }
    & > pre {
      padding: 0 !important;
    }
  `,
  editorHidden: css`
    position: relative;
    height: 200px;
    overflow: hidden;
  `,
  editorCover: css`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    background: linear-gradient(
      0,
      ${tokens.gray300} 0%,
      rgba(18, 28, 45, 0) 100%
    );
    border-radius: 0 0 ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium};
  `,
};
const ComponentPreviewIcon = f36icons.PreviewIcon;
const ComponentPreviewOffIcon = f36icons.PreviewOffIcon;

export function ComponentSource({
  children,
  file,
}: {
  children: string;
  file?: string;
}) {
  const [showSource, setShowSource] = useState(true);

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
        <div style={{ position: 'relative' }}>
          <LiveError className={styles.error} />
          <div style={{ position: 'relative' }}>
            <Flex
              className={styles.toggle}
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                size="small"
                variant="secondary"
                startIcon={
                  showSource ? (
                    <ComponentPreviewOffIcon />
                  ) : (
                    <ComponentPreviewIcon />
                  )
                }
                onClick={handleToggle}
              >
                {showSource ? 'Hide code' : 'Show code'}
              </Button>
            </Flex>

            <LiveEditor
              className={cx(styles.editor, {
                [styles.editorHidden]: !showSource,
              })}
            />
            <Flex
              className={styles.floatingPanel}
              justifyContent="space-between"
              alignItems="center"
            >
              {showSource && (
                <Flex gap="spacingXs">
                  <CopyButton
                    tooltipProps={{ placement: 'top' }}
                    className={styles.copyButton}
                    value={children}
                    size="small"
                  />
                  {isExampleFromFile && (
                    <Button
                      as="a"
                      className={styles.playgroundButton}
                      endIcon={<ExternalLinkIcon />}
                      size="small"
                      href={`/playground?code=${coder.encode(children)}`}
                      target="_blank"
                    >
                      Open in Playground
                    </Button>
                  )}
                </Flex>
              )}
            </Flex>
          </div>
          {!showSource && <div className={styles.editorCover} />}
        </div>
      </LiveProvider>
    </Flex>
  );
}
