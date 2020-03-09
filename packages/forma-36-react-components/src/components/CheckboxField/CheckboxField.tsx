import React, { Component } from 'react';
import ControlledInputField, {
  ControlledInputFieldPropTypes,
} from '../ControlledInputField';

export type CheckboxFieldProps = ControlledInputFieldPropTypes &
  typeof defaultProps;

const defaultProps = {
  labelIsLight: false,
  checked: false,
  inputType: 'checkbox',
  testId: 'cf-ui-checkbox-field',
};

export class CheckboxField extends Component<CheckboxFieldProps> {
  static defaultProps = defaultProps;

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
