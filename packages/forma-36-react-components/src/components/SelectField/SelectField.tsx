import React, {
  Component,
  ChangeEvent,
  FocusEventHandler,
  ChangeEventHandler,
} from 'react';
import cn from 'classnames';
import ValidationMessage from '../ValidationMessage';
import FormLabel, { FormLabelProps } from '../FormLabel/FormLabel';
import HelpText from '../HelpText';
import Select, { SelectProps } from '../Select/Select/Select';
import TextLink, { TextLinkProps } from '../TextLink/TextLink';
import styles from './SelectField.css';

export type SelectFieldProps = {
  name: string;
  id: string;
  labelText: string;
  children: React.ReactNode;
  value?: string;
  validationMessage?: string;
  formLabelProps?: Partial<FormLabelProps>;
  textLinkProps?: Partial<TextLinkProps>;
  selectProps?: Partial<SelectProps>;
  helpText?: string;
  required?: boolean;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  testId?: string;
  className?: string;
} & typeof defaultProps;

export interface SelectFieldState {
  value?: string;
}

const defaultProps = {
  testId: 'cf-ui-select-field',
  required: false,
};

export class SelectField extends Component<SelectFieldProps, SelectFieldState> {
  static defaultProps = defaultProps;

  state = { value: this.props.value };

  componentWillReceiveProps(nextProps: SelectFieldProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  handleOnChange = (evt: ChangeEvent) => {
    this.setState({ value: (evt.target as HTMLSelectElement).value });
    if (this.props.onChange) {
      this.props.onChange(evt);
    }
  };

  render() {
    const {
      validationMessage,
      className,
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

    const classNames = cn(styles['SelectField'], className);

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
                className: styles['SelectField__label-link'],
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
            className={styles['SelectField__validation-message']}
          >
            {validationMessage}
          </ValidationMessage>
        )}
        {helpText && (
          <div className={styles['SelectField__hints']}>
            {helpText && (
              <HelpText className={styles['SelectField__help-text']}>
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
