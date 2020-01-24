import React, { Component } from 'react';
import cn from 'classnames';

import styles from './ModalContent.css';

export type ModalContentProps = {
  testId?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-modal-content',
};

export class ModalContent extends Component<ModalContentProps> {
  static defaultProps = defaultProps;
  render() {
    const { testId, className, children, ...rest } = this.props;
    return (
      <div
        {...rest}
        className={cn(styles.ModalContent, className)}
        data-test-id={testId}
      >
        {children}
      </div>
    );
  }
}

export default ModalContent;
