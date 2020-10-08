import React, { Component } from 'react';
import ControlledInputField, {
  ControlledInputFieldPropTypes,
} from '../ControlledInputField';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxFieldProps extends ControlledInputFieldPropTypes {}

const defaultProps: Partial<CheckboxFieldProps> = {
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
