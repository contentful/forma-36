import React, { Component } from 'react';
import ControlledInputField, {
  ControlledInputFieldPropTypes,
} from '../ControlledInputField';

export type RadioButtonFieldProps = ControlledInputFieldPropTypes &
  typeof defaultProps;

const defaultProps = {
  labelIsLight: false,
  checked: false,
  inputType: 'checkbox',
  testId: 'cf-ui-radio-button-field',
};

export class RadioButtonField extends Component<RadioButtonFieldProps> {
  static defaultProps = defaultProps;

  render() {
    const { testId, ...otherProps } = this.props;

    return (
      <ControlledInputField testId={testId} {...otherProps} inputType="radio" />
    );
  }
}

export default RadioButtonField;
