import React, { Component } from 'react';
import cn from 'classnames';
import styles from './EditorToolbar.css';

export interface EditorToolbarProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
  style?: React.CSSProperties;
}

export class EditorToolbar extends Component<EditorToolbarProps> {
  static defaultProps = {
    testId: 'cf-ui-editor-toolbar',
  };

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles['EditorToolbar'], extraClassNames);

    return (
      <div className={classNames} {...otherProps} data-test-id={testId}>
        {children}
      </div>
    );
  }
}

export default EditorToolbar;
