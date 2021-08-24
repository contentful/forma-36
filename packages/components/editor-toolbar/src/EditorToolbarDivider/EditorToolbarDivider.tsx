import React from 'react';
import tokens from '@contentful/f36-tokens';
import { Box } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';
import { css, cx } from 'emotion';

function getStyles() {
  return {
    root: css({
      width: `calc(1rem * (21 / ${tokens.fontBaseDefault}))`,
      height: `calc(1rem * (1 / ${tokens.fontBaseDefault}))`,
      background: tokens.gray300,
      margin: `0 ${tokens.spacing2Xs}`,
    }),
  };
}

export function EditorToolbarDivider({
  className,
  testId = 'cf-editor-toolbar-divider',
  ...otherProps
}: CommonProps): React.ReactElement {
  const styles = getStyles();
  const classNames = cx(styles.root, className);
  return (
    <Box as="span" testId={testId} className={classNames} {...otherProps} />
  );
}
