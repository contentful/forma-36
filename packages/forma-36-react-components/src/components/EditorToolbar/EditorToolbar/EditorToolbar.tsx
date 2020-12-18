import React from 'react';
import cn from 'classnames';
import styles from './EditorToolbar.css';

export interface EditorToolbarProps {
  className?: string;
  children: React.ReactNode;
  testId?: string;
  style?: React.CSSProperties;
}

export function EditorToolbar({
  className,
  children,
  testId,
  ...otherProps
}: EditorToolbarProps): React.ReactElement {
  const classNames = cn(styles['EditorToolbar'], className);

  return (
    <div className={classNames} {...otherProps} data-test-id={testId}>
      {children}
    </div>
  );
}

EditorToolbar.defaultProps = {
  testId: 'cf-ui-editor-toolbar',
};

export default EditorToolbar;
