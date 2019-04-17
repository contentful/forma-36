import React, { Component } from 'react';
import ReactDatePicker from 'react-date-picker/dist/entry.nostyle';
import cn from 'classnames';

const styles = require('./DatePicker.css');

export type DatePickerProps = {
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-date-picker',
};

export class DatePicker extends Component<DatePickerProps> {
  static defaultProps = defaultProps;

  state = {
    isOpen: true,
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { className, children, testId, ...otherProps } = this.props;
    const classNames = cn(styles.DatePicker, className);

    return (
      <ReactDatePicker
        onCalendarClose={this.handleClose}
        className={classNames}
        calendarClassName={styles.DatePickerCalendar}
        date-text-id={testId}
        isOpen={this.state.isOpen}
        {...otherProps}
      />
    );
  }
}

export default DatePicker;
