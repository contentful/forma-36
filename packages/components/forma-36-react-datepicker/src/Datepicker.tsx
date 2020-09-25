import React, { Component, FocusEventHandler, FocusEvent } from 'react';
import Pikaday from 'pikaday';
import format from 'date-fns/format';
import {
  TextInput,
  FormLabel,
  ValidationMessage,
} from '@contentful/forma-36-react-components';
import { css, cx } from 'emotion';

const styles = {
  datePickerWrapper: css({
    maxHeight: 70,
  }),
  datePicker: css({
    zIndex: 1002,
    display: 'block',
    '.is-hidden': {
      display: 'none',
    },
  }),
};

export type DatePickerProps = {
  disabled: boolean;
  required: boolean;
  value?: Date;
  minDate?: Date;
  maxDate?: Date;
  onChange?: (val: Date) => void;
  onBlur?: FocusEventHandler;
  helpText?: string;
  labelText?: string;
  id?: string;
  testId?: string;
  dateFormat?: string;
} & Partial<typeof defaultProps>;

export interface DatePickerState {
  validationError?: string;
}

const defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  name: 'cf-ui-datepicker',
  id: 'cf-ui-datepicker',
  testId: 'cf-ui-datepicker',
  dateFormat: 'do MMM yyyy',
};

export class Datepicker extends Component<DatePickerProps, DatePickerState> {
  static defaultProps = defaultProps;
  state = {
    validationError: undefined,
  };
  pikaday?: Pikaday;
  datePickerNode = React.createRef<HTMLInputElement>();

  componentDidMount() {
    this.pikaday = new Pikaday({
      field: this.datePickerNode && this.datePickerNode.current,
      minDate: this.props.minDate,
      maxDate: this.props.maxDate,
      yearRange: 5,
      theme: cx(styles.datePicker, 'hide-carret'),
      onSelect: (value) => {
        this.props.onChange(value);
      },
    });
  }

  componentWillUnmount() {
    if (this.pikaday) {
      this.pikaday.destroy();
    }
  }

  handleOpen = () => {
    if (this.pikaday) {
      this.pikaday.show();
    }
  };

  handleBlur = (e: FocusEvent) => {
    this.props.onBlur();
    if (
      this.pikaday &&
      !this.pikaday.el.contains(e.relatedTarget as HTMLInputElement)
    ) {
      this.pikaday.hide();
    }
  };

  render() {
    const {
      labelText,
      required,
      name,
      id,
      testId,
      dateFormat,
      disabled,
    } = this.props;
    return (
      <div className={styles.datePickerWrapper}>
        {labelText && (
          <FormLabel required={required} htmlFor={id}>
            {labelText}
          </FormLabel>
        )}
        <TextInput
          disabled={disabled}
          required={required}
          name={name}
          testId={testId}
          readOnly={true}
          inputRef={this.datePickerNode}
          value={this.props.value && format(this.props.value, dateFormat)}
          id={id}
          onFocus={this.handleOpen}
          onBlur={this.handleBlur}
          autoComplete="off"
        />
        {this.state.validationError && (
          <ValidationMessage>{this.state.validationError}</ValidationMessage>
        )}
      </div>
    );
  }
}

export default Datepicker;
