import React, { Component, FocusEventHandler, FocusEvent } from 'react';
import Pikaday from 'pikaday';
import * as dateFns from 'date-fns';
import { TextField } from '@contentful/forma-36-react-components';
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
  required?: boolean;
  value?: Date;
  minDate?: Date;
  maxDate?: Date;
  onChange?: (val: Date) => void;
  onBlur?: FocusEventHandler;
  helpText?: string;
  labelText: string;
  id?: string;
  dateFormat?: string;
} & typeof defaultProps;

export interface DatePickerState {
  validationError?: string;
}

const defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  name: 'cf-ui-datepicker',
  id: 'cf-ui-datepicker',
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
      onSelect: value => {
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
    const { labelText, required, name, helpText, id, dateFormat } = this.props;
    return (
      <div className={styles.datePickerWrapper}>
        <TextField
          labelText={labelText}
          helpText={helpText}
          required={required}
          name={name}
          textInputProps={{
            testId: 'date-input',
            readOnly: true,
            inputRef: this.datePickerNode,
          }}
          value={
            this.props.value && dateFns.format(this.props.value, dateFormat)
          }
          validationMessage={this.state.validationError}
          id={id}
          onFocus={this.handleOpen}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default Datepicker;
