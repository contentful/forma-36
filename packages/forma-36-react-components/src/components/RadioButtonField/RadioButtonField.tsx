import React, { Component } from 'react';
import ControlledInputField, {
  ControlledInputFieldPropTypes,
} from '../ControlledInputField/ControlledInputField';

export class RadioButtonField extends Component<ControlledInputFieldPropTypes> {
  static defaultProps = {
    extraClassNames: undefined,
    required: undefined,
    labelIsLight: false,
    helpText: undefined,
    disabled: undefined,
    formLabelProps: undefined,
    helpTextProps: undefined,
    validationMessage: undefined,
    value: undefined,
    name: undefined,
    checked: false,
    onChange: undefined,
    inputProps: undefined,
    inputType: 'checkbox',
    children: undefined,
    testId: 'cf-ui-radio-button-field',
  };

  render() {
    const { testId, ...otherProps } = this.props;

    return (
      <ControlledInputField testId={testId} {...otherProps} inputType="radio" />
    );
  }
}

export default RadioButtonField;
