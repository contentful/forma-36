import React, { Component } from 'react';
import ControlledInput, {
  ControlledInputPropTypes,
} from '../ControlledInput/ControlledInput';

export type RadioButtonProps = ControlledInputPropTypes & typeof defaultProps;

const defaultProps = {
  required: false,
  isDisabled: false,
  testId: 'cf-ui-radio-button',
};

export class RadioButton extends Component<RadioButtonProps> {
  static defaultProps = defaultProps;

  render() {
    return <ControlledInput {...this.props} type="radio" />;
  }
}

RadioButton.defaultProps = defaultProps;

export default RadioButton;
