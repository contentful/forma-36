import React, { Component } from 'react';
import cn from 'classnames';
import styles from './EditorToolbarDivider.css';

export interface EditorToolbarDividerProps {
  testId?: string;
  extraClassNames?: string;
}

export class EditorToolbarDivider extends Component<EditorToolbarDividerProps> {
  static defaultProps = {
    testId: 'cf-editor-toolbar-divider',
  };

  render() {
    const { extraClassNames, testId, ...otherProps } = this.props;

    const classNames = cn(styles['EditorToolbarDivider'], extraClassNames);

    return (
      <span data-test-id={testId} className={classNames} {...otherProps} />
    );
  }
}

export default EditorToolbarDivider;
