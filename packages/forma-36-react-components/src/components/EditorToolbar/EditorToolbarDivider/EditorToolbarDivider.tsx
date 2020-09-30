import React, { Component } from 'react';
import cn from 'classnames';
import styles from './EditorToolbarDivider.css';

export interface EditorToolbarDividerProps {
  testId?: string;
  className?: string;
}

const defaultProps: Partial<EditorToolbarDividerProps> = {
  testId: 'cf-editor-toolbar-divider',
};

export class EditorToolbarDivider extends Component<EditorToolbarDividerProps> {
  static defaultProps = defaultProps;
  render() {
    const { className, testId, ...otherProps } = this.props;

    const classNames = cn(styles['EditorToolbarDivider'], className);

    return (
      <span data-test-id={testId} className={classNames} {...otherProps} />
    );
  }
}

export default EditorToolbarDivider;
