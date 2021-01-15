import React from 'react';
import cn from 'classnames';
import ControlledInputField from '../ControlledInputField';
import type { ControlledInputFieldPropTypes } from '../ControlledInputField';
import styles from './RadioButtonField.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type RadioButtonFieldProps = Omit<
  ControlledInputFieldPropTypes,
  'inputType'
>;

export const RadioButtonField = ({
  checked = false,
  labelIsLight = false,
  testId = 'cf-ui-radio-button-field',
  className,
  ...otherProps
}: RadioButtonFieldProps) => {
  const classNames = cn(styles['RadioButtonField'], className);
  return (
    <ControlledInputField
      checked={checked}
      labelIsLight={labelIsLight}
      testId={testId}
      className={classNames}
      {...otherProps}
      inputType="radio"
    />
  );
};

export default RadioButtonField;
