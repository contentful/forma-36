import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./ModalContent.css');

interface ModalContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  testId?: string;
  extraClassNames?: string;
  children: React.ReactNode;
}

export class ModalContent extends Component<ModalContentProps> {
  static defaultProps = {
    testId: 'cf-ui-modal-content',
  };

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
