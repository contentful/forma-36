import React, { Component } from 'react';
import cn from 'classnames';
import styles from './EditorToolbarDivider.css';

export type EditorToolbarDividerProps = {
  testId?: string;
  className?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
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
