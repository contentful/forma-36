import React, { Component } from 'react';
import ControlledInputField, {
  ControlledInputFieldPropTypes,
} from '../ControlledInputField/ControlledInputField';

export class RadioButtonField extends Component<ControlledInputFieldPropTypes> {
  static defaultProps = {
    labelIsLight: false,
    checked: false,
    inputType: 'checkbox',
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
