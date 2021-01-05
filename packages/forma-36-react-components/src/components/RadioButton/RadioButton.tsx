import React from 'react';
import ControlledInput, { ControlledInputPropTypes } from '../ControlledInput';
import styles from './RadioButton.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioButtonProps extends ControlledInputPropTypes {}

export const RadioButton = ({
  disabled = false,
  required = false,
  testId = 'cf-ui-radio-button',
  type = 'radio',
  willBlurOnEsc = true,
  ...otherProps
}: RadioButtonProps) => {
  return (
    <ControlledInput
      {...otherProps}
      disabled={disabled}
      required={required}
      data-test-id={testId}
      type={type}
      willBlurOnEsc={willBlurOnEsc}
    />
  );
};
console.log(styles);
export const RadioButton = (props: RadioButtonProps) => {
  return (
    <div className={styles['RadioButton']}>
      <ControlledInput {...props} />
      <label className={styles['RadioButton__ghost']} />
    </div>
  );
};

RadioButton.defaultProps = defaultProps;

export default RadioButton;
