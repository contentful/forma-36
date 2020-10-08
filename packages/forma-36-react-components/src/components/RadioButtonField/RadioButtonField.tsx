import React, { Component } from 'react';
import ControlledInputField, {
  ControlledInputFieldPropTypes,
} from '../ControlledInputField';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioButtonFieldProps extends ControlledInputFieldPropTypes {}

const defaultProps: Partial<RadioButtonFieldProps> = {
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
