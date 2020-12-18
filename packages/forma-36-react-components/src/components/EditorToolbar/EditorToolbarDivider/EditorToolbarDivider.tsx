import React from 'react';
import cn from 'classnames';

import styles from './EditorToolbarDivider.css';

export interface EditorToolbarDividerProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  testId?: string;
}

export function EditorToolbarDivider({
  className,
  testId,
  ...otherProps
}: EditorToolbarDividerProps): React.ReactElement {
  const classNames = cn(styles['EditorToolbarDivider'], className);

  return <span data-test-id={testId} className={classNames} {...otherProps} />;
}

EditorToolbarDivider.defaultProps = {
  testId: 'cf-editor-toolbar-divider',
};

export default EditorToolbarDivider;
