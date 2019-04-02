import React, { Component } from 'react';
import cn from 'classnames';
import styles from './EditorToolbar.css';

export type EditorToolbarProps = {
  className?: string;
  children: React.ReactNode;
  testId?: string;
  style?: React.CSSProperties;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-editor-toolbar',
};

export class EditorToolbar extends Component<EditorToolbarProps> {
  static defaultProps = defaultProps;
  render() {
    const { className, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles['EditorToolbar'], className);

    return (
      <div className={classNames} {...otherProps} data-test-id={testId}>
        {children}
      </div>
    );
  }
}

export default EditorToolbar;
