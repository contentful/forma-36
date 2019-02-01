import React, { Component } from 'react';
import ControlledInputField, {
  ControlledInputFieldPropTypes,
} from '../ControlledInputField/ControlledInputField';

export class CheckboxField extends Component<ControlledInputFieldPropTypes> {
  static defaultProps: Partial<ControlledInputFieldPropTypes> = {
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
    testId: 'cf-ui-checkbox-field',
  };

  render() {
    const { testId, ...otherProps } = this.props;

    return (
      <ControlledInputField
        testId={testId}
        {...otherProps}
        inputType="checkbox"
      />
    );
  }
}

export default CheckboxField;
