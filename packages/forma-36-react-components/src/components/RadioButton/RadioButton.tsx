import React, { Component } from 'react';
import ControlledInput, { ControlledInputPropTypes } from '../ControlledInput';

export type RadioButtonProps = ControlledInputPropTypes & typeof defaultProps;

const defaultProps = {
  required: false,
  disabled: false,
  type: 'radio',
  testId: 'cf-ui-radio-button',
  willBlurOnEsc: true,
};

export class RadioButton extends Component<RadioButtonProps> {
  static defaultProps = defaultProps;

  render() {
    return <ControlledInput {...this.props} />;
  }
}

RadioButton.defaultProps = defaultProps;

export default RadioButton;
