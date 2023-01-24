import React from 'react';
import { addYears, format } from 'date-fns';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Timepicker } from './Timepicker';

describe('TimePicker', () => {
  let dateNowSpy: any;

  beforeEach(() => {
    dateNowSpy = jest.spyOn(Date, 'now');
  });

  afterEach(() => {
    dateNowSpy.mockRestore();
  });

  describe('Recognises 12h and 24h formats', () => {
    it.each([
      ['15:00', '3:00 PM', '15:00', '2017-01-01T00:01'],
      ['09:30 AM', '9:30 AM', '09:30', '2017-01-01T00:01'],
      ['02:30', '2:30 AM', '02:30', '2017-01-01T11:59'],
      ['02:30 PM', '2:30 PM', '14:30', '2017-01-01T12:01'],
    ])(
      'allows valid 24 and 12 hour formats',
      (received, expectedDisplayValue, expectedValue, now) => {
        dateNowSpy.mockImplementation(jest.fn(() => new Date(now).valueOf()));
        const onChange = jest.fn();
        render(
          <Timepicker
            date={format(addYears(new Date(), 1), 'yyyy/MM/dd')}
            onChange={onChange}
            value="12:00"
          />,
        );

        const timepicker = screen.getByTestId('time');
        userEvent.clear(timepicker);
        userEvent.type(timepicker, received);
        expect(screen.getByTestId('time')).toHaveValue(received);
        expect(onChange).toHaveBeenCalledWith(expectedValue);

        timepicker.blur();
        expect(timepicker).toHaveValue(expectedDisplayValue);
      },
    );

    it.each([
      ['Invalid Date', '15:30', '3:30 PM'],
      ['-120', '15:30', '3:30 PM'],
    ])(
      'falls back to value if input is invalid',
      (input, value, expectedDisplayValue) => {
        render(
          <Timepicker
            date={format(addYears(new Date(), 1), 'yyyy/MM/dd')}
            onChange={jest.fn}
            value={value}
          />,
        );

        const timepicker = screen.getByTestId('time');
        userEvent.type(timepicker, input);
        timepicker.blur();

        expect(timepicker).toHaveValue(expectedDisplayValue);
      },
    );
  });
});
