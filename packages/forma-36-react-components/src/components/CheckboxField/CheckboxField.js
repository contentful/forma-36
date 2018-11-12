import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './CheckboxField.css';
import FormLabel from '../FormLabel';
import HelpText from '../HelpText';
import Checkbox from '../Checkbox';
import ValidationMessage from '../ValidationMessage';

class CheckboxField extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    id: PropTypes.string.isRequired,
    light: PropTypes.bool,
    labelText: PropTypes.string.isRequired,
    required: PropTypes.bool,
    testId: PropTypes.string,
    helpText: PropTypes.string,
    formLabelProps: PropTypes.object,
    disabled: PropTypes.bool,
    helpTextProps: PropTypes.object,
    validationMessage: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    checked: PropTypes.bool,
    checkboxProps: PropTypes.object,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    extraClassNames: undefined,
    required: undefined,
    testId: 'cf-ui-checkbox-field',
    light: false,
    helpText: undefined,
    disabled: undefined,
    formLabelProps: undefined,
    helpTextProps: undefined,
    validationMessage: undefined,
    value: undefined,
    checked: undefined,
    onChange: undefined,
    checkboxProps: undefined,
  };

  render() {
    const {
      id,
      light,
      testId,
      required,
      helpText,
      disabled,
      labelText,
      helpTextProps,
      formLabelProps,
      extraClassNames,
      checked,
      validationMessage,
      onChange,
      checkboxProps,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.CheckboxField, extraClassNames, {
      [styles['CheckboxField--disabled']]: disabled,
    });

    return (
      <div data-test-id={testId} className={classNames} {...otherProps}>
        <Checkbox
          id={id}
          labelText={labelText}
          required={required}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          extraClassNames={styles.CheckboxField__checkbox}
          {...checkboxProps}
        />
        <div className={styles['Checkbox__label-wrapper']}>
          <FormLabel
            extraClassNames={cn(styles.CheckboxField__label, {
              [styles['CheckboxField__label--light']]: light,
            })}
            required={required}
            htmlFor={id}
            {...formLabelProps}
          >
            {labelText}
          </FormLabel>
          {helpText && (
            <HelpText
              extraClassNames={styles['CheckboxField__help-text']}
              {...helpTextProps}
            >
              {helpText}
            </HelpText>
          )}
          {validationMessage && (
            <ValidationMessage
              extraClassNames={styles['CheckboxField__validation-message']}
            >
              {validationMessage}
            </ValidationMessage>
          )}
        </div>
      </div>
    );
  }
}

export default CheckboxField;
