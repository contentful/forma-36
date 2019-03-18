import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./ModalContent.css');

export type ModalContentProps = {
  testId?: string;
  extraClassNames?: string;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-modal-content',
};

export class ModalContent extends Component<ModalContentProps> {
  static defaultProps = defaultProps;
  render() {
    const { testId, extraClassNames, children, ...rest } = this.props;
    return (
      <div
        {...rest}
        className={cn(styles.ModalContent, extraClassNames)}
        data-test-id={testId}
      >
        {children}
      </div>
    );
  }
}

export default ModalContent;
