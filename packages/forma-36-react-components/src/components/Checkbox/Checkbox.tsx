import React, { Component } from 'react';
import ControlledInput, { ControlledInputPropTypes } from '../ControlledInput';

export type CheckboxProps = ControlledInputPropTypes &
  Partial<typeof defaultProps>;

const defaultProps = {
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
