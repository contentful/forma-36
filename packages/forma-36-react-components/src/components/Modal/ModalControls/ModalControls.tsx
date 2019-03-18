import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./ModalControls.css');

export type ModalControlsProps = {
  testId?: string;
  extraClassNames?: string;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-modal-controls',
};

export class ModalControls extends Component<ModalControlsProps> {
  static defaultProps = defaultProps;

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
