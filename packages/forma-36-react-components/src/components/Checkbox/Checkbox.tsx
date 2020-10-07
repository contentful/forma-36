import React, { Component } from 'react';
import ControlledInput, { ControlledInputPropTypes } from '../ControlledInput';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxProps extends ControlledInputPropTypes {}

const defaultProps: Partial<CheckboxProps> = {
  required: false,
  disabled: false,
  type: 'checkbox',
  testId: 'ctf-ui-checkbox',
  willBlurOnEsc: true,
};

export class Checkbox extends Component<CheckboxProps> {
  static defaultProps = defaultProps;

  render() {
    return <ControlledInput {...this.props} />;
  }
}

Checkbox.defaultProps = defaultProps;

export default Checkbox;
