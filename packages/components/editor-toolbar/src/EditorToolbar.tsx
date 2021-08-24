import React from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';
import { styles } from './EditorToolbar.styles';

export interface EditorToolbarProps extends CommonProps {
  children: React.ReactNode;
}

function _EditorToolbar(
  props: EditorToolbarProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.editorToolbar, props.className)}
    >
      {props.children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
export const EditorToolbar = React.forwardRef(_EditorToolbar);
