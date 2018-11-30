import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ValidationMessage from '../ValidationMessage';
import FormLabel from '../FormLabel';
import HelpText from '../HelpText';
import Select from '../Select/Select';
import TextLink from '../TextLink';
import styles from './SelectField.css';

class SelectField extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    validationMessage: PropTypes.string,
    testId: PropTypes.string,
    children: PropTypes.node.isRequired,
    extraClassNames: PropTypes.string,
    formLabelProps: PropTypes.object,
    textLinkProps: PropTypes.object,
    selectProps: PropTypes.object,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    helpText: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    validationMessage: undefined,
    extraClassNames: undefined,
    testId: 'cf-ui-select-field',
    formLabelProps: undefined,
    textLinkProps: undefined,
    selectProps: undefined,
    labelText: undefined,
    onChange: undefined,
    helpText: undefined,
    onBlur: undefined,
    value: undefined,
    required: false,
  };

  state = { value: this.props.value };

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  handleOnChange = evt => {
    this.setState({ value: evt.target.value });
    if (this.props.onChange) this.props.onChange(evt);
  };

  render() {
    const {
      validationMessage,
      extraClassNames,
      children,
      selectProps,
      testId,
      formLabelProps,
      textLinkProps,
      labelText,
      helpText,
      required,
      onChange,
      onBlur,
      value,
      name,
      id,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.SelectField, extraClassNames);

    return (
      <div className={classNames} {...otherProps} data-test-id={testId}>
        <div className={styles['SelectField__label-wrapper']}>
          <FormLabel {...{ ...formLabelProps, htmlFor: id, required }}>
            {labelText}
          </FormLabel>
          {textLinkProps && (
            <TextLink
              {...{
                ...textLinkProps,
                extraClassNames: styles['SelectField__label-link'],
              }}
            >
              {textLinkProps.text}
            </TextLink>
          )}
        </div>
        <Select
          {...{
            hasError: !!validationMessage,
            name,
            id,
            onBlur,
            onChange: this.handleOnChange,
            value: this.state.value,
            required,
            ...selectProps,
          }}
        >
          {children}
        </Select>
        {validationMessage && (
          <ValidationMessage
            extraClassNames={styles['SelectField__validation-message']}
          >
            {validationMessage}
          </ValidationMessage>
        )}
        {helpText && (
          <div className={styles.SelectField__hints}>
            {helpText && (
              <HelpText extraClassNames={styles['SelectField__help-text']}>
                {helpText}
              </HelpText>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SelectField;
