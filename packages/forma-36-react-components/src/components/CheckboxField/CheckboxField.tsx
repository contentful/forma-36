import React, { Component } from 'react';
import ControlledInputField, {
  ControlledInputFieldPropTypes,
} from '../ControlledInputField/ControlledInputField';

export class CheckboxField extends Component<ControlledInputFieldPropTypes> {
  static defaultProps = {
    labelIsLight: false,
    checked: false,
    inputType: 'checkbox',
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
