import React from 'react';
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

export const CheckboxField = (props: CheckboxFieldProps) => {
  const { testId, ...otherProps } = props;

  return (
    <ControlledInputField
      testId={testId}
      {...otherProps}
      inputType="checkbox"
    />
  );
};

CheckboxField.defaultProps = defaultProps;

export default CheckboxField;
