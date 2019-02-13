import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./ModalControls.css');

interface ModalControlsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  testId?: string;
  extraClassNames?: string;
  children: React.ReactNode;
}

export class ModalControls extends Component<ModalControlsProps> {
  static defaultProps = {
    testId: 'cf-ui-modal-controls',
  };

  render() {
    const { testId, extraClassNames, children, ...rest } = this.props;
    return (
      <div
        {...rest}
        className={cn(styles.ModalControls, extraClassNames)}
        data-test-id={testId}
      >
        {children}
      </div>
    );
  }
}

export default ModalControls;
