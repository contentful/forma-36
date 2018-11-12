import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ValidationMessage from '../ValidationMessage';
import FormLabel from '../FormLabel';
import HelpText from '../HelpText';
import TextInput from '../TextInput';
import styles from './TextField.css';
import TextLink from '../TextLink';
import Textarea from '../Textarea';

class TextField extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    validationMessage: PropTypes.string,
    testId: PropTypes.string,
    extraClassNames: PropTypes.string,
    formLabelProps: PropTypes.object,
    textLinkProps: PropTypes.object,
    textInputProps: PropTypes.object,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    helpText: PropTypes.string,
    required: PropTypes.bool,
    textarea: PropTypes.bool,
    countCharacters: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    validationMessage: undefined,
    extraClassNames: undefined,
    testId: 'cf-ui-text-field',
    formLabelProps: undefined,
    textLinkProps: undefined,
    textInputProps: undefined,
    labelText: undefined,
    onChange: undefined,
    helpText: undefined,
    onBlur: undefined,
    value: undefined,
    textarea: false,
    required: false,
    countCharacters: false,
  };

  state = { value: this.props.value };

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
      textInputProps,
      testId,
      formLabelProps,
      textLinkProps,
      labelText,
      helpText,
      textarea,
      countCharacters,
      required,
      onChange,
      onBlur,
      value,
      name,
      id,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.TextField, extraClassNames);

    const Element = textarea ? Textarea : TextInput;
    return (
      <div className={classNames} {...otherProps} data-test-id={testId}>
        <div className={styles['TextField__label-wrapper']}>
          <FormLabel {...{ ...formLabelProps, htmlFor: id, required }}>
            {labelText}
          </FormLabel>
          {textLinkProps && (
            <TextLink
              {...{
                ...textLinkProps,
                extraClassNames: styles['TextField__label-link'],
              }}
            >
              {textLinkProps.text}
            </TextLink>
          )}
        </div>
        <Element
          {...{
            error: !!validationMessage,
            name,
            id,
            onBlur,
            onChange: this.handleOnChange,
            value,
            required,
            ...textInputProps,
          }}
        />
        {validationMessage && (
          <ValidationMessage
            extraClassNames={styles['TextField__validation-message']}
          >
            {validationMessage}
          </ValidationMessage>
        )}
        {(helpText || countCharacters) && (
          <div className={styles.TextField__hints}>
            {helpText && (
              <HelpText extraClassNames={styles['TextField__help-text']}>
                {helpText}
              </HelpText>
            )}
            {countCharacters &&
              textInputProps &&
              textInputProps.maxLength && (
                <HelpText
                  extraClassNames={cn(
                    styles['TextField__help-text'],
                    styles.TextField__count,
                  )}
                >
                  {this.state.value ? this.state.value.length : 0}
                  /
                  {textInputProps.maxLength}
                </HelpText>
              )}
          </div>
        )}
      </div>
    );
  }
}

export default TextField;
