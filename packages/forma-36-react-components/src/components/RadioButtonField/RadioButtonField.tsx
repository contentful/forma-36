import React from 'react';
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

export const RadioButtonField = (props: RadioButtonFieldProps) => {
  const { testId, ...otherProps } = props;

  return (
    <ControlledInputField testId={testId} {...otherProps} inputType="radio" />
  );
};

RadioButtonField.defaultProps = defaultProps;

export default RadioButtonField;
