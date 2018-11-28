import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import FormLabel from '../FormLabel';
import HelpText from '../HelpText';
import ValidationMessage from '../ValidationMessage';
import ControlledInput from '../ControlledInput/ControlledInput';
import styles from './ControlledInputField.css';

export const ControlledInputFieldPropTypes = {
  extraClassNames: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelIsLight: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  required: PropTypes.bool,
  testId: PropTypes.string,
  helpText: PropTypes.string,
  formLabelProps: PropTypes.object,
  disabled: PropTypes.bool,
  helpTextProps: PropTypes.object,
  validationMessage: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  inputProps: PropTypes.object,
  inputType: PropTypes.oneOf(['radio', 'checkbox']),
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export const ControlledInputFieldDefaultProps = {
  extraClassNames: undefined,
  required: undefined,
  testId: 'cf-ui-controlled-input-field',
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
};

class ControlledInputField extends React.Component {
  static propTypes = ControlledInputFieldPropTypes;
  static defaultProps = ControlledInputFieldDefaultProps;

  render() {
    const {
      id,
      labelIsLight,
      testId,
      required,
      helpText,
      disabled,
      labelText,
      helpTextProps,
      formLabelProps,
      extraClassNames,
      checked,
      value,
      validationMessage,
      onChange,
      children,
      inputType,
      inputProps,
      name,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.ControlledInputField, extraClassNames, {
      [styles['ControlledInputField--disabled']]: disabled,
    });

    return (
      <div data-test-id={testId} className={classNames} {...otherProps}>
        <ControlledInput
          id={id}
          labelText={labelText}
          type={inputType}
          name={name}
          required={required}
          checked={checked}
          disabled={disabled}
          value={value}
          onChange={onChange}
          extraClassNames={styles.ControlledInputField__input}
          {...inputProps}
        />
        <div className={styles['Checkbox__label-wrapper']}>
          <FormLabel
            extraClassNames={cn(styles.ControlledInputField__label, {
              [styles['ControlledInputField__label--light']]: labelIsLight,
            })}
            required={required}
            htmlFor={id}
            {...formLabelProps}
          >
            {labelText}
          </FormLabel>
          {helpText && (
            <HelpText
              extraClassNames={styles['ControlledInputField__help-text']}
              {...helpTextProps}
            >
              {helpText}
            </HelpText>
          )}
          {validationMessage && (
            <ValidationMessage
              extraClassNames={
                styles['ControlledInputField__validation-message']
              }
            >
              {validationMessage}
            </ValidationMessage>
          )}
        </div>
      </div>
    );
  }
}

export default ControlledInputField;
