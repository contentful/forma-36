/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import * as dateFns from 'date-fns';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import { Timepicker } from './Timepicker';

describe('TimePicker', () => {
  let dateNowSpy: any;

  beforeEach(() => {
    dateNowSpy = jest.spyOn(Date, 'now');
  });

  afterEach(() => {
    dateNowSpy.mockRestore();
  });

  // @ts-ignore
  const build = ({ value }) => {
    const props = {
      onChange: jest.fn(),
      onBlur: () => {},
      date: dateFns.format(dateFns.addYears(new Date(), 1), 'yyyy/MM/dd'),
      value,
      isRequired: true,
      disabled: false,
    };
    return [render(<Timepicker {...props} />), props];
  };

  describe('Recognises 12h and 24h formats', () => {
    it.each([
      ['15:00', '3:00 PM', '15:00', '2017-01-01T00:01'],
      ['09:30 AM', '9:30 AM', '09:30', '2017-01-01T00:01'],
      ['02:30', '2:30 AM', '02:30', '2017-01-01T11:59'],
      ['02:30 PM', '2:30 PM', '14:30', '2017-01-01T12:01'],
    ])(
      'allows valid 24 and 12 hour formats',
      (received, expectedDisplayValue, expectedValue, now) => {
        mockDate(dateNowSpy, now);
        const [renderResult, props] = build({ value: '12:00' });
        fireChangeEvent(getByTestId(renderResult, 'time'), received);
        expect(getByTestId(renderResult, 'time').value).toBe(received);
        // @ts-ignore
        expect(props.onChange).toHaveBeenCalledWith(expectedValue);
        fireBlurEvent(getByTestId(renderResult, 'time'));
        expect(getByTestId(renderResult, 'time').value).toBe(
          expectedDisplayValue,
        );
      },
    );

    it.each([
      ['Invalid Date', '15:30', '3:30 PM'],
      ['-120', '15:30', '3:30 PM'],
    ])(
      'falls back to value if input is invalid',
      (input, value, expectedDisplayValue) => {
        const [renderResult] = build({ value });
        fireChangeEvent(getByTestId(renderResult, 'time'), input);
        fireBlurEvent(getByTestId(renderResult, 'time'));
        expect(getByTestId(renderResult, 'time').value).toBe(
          expectedDisplayValue,
        );
      },
    );

    it('increases the time by half an hour on arrow up', () => {
      const [renderResult, props] = build({ value: '12:00' });
      fireEvent.focus(getByTestId(renderResult, 'time'));
      fireEvent.keyUp(getByTestId(renderResult, 'time'), {
        key: 'up arrow',
        keyCode: 38,
      });
      // @ts-ignore
      expect(props.onChange).toHaveBeenCalledWith('23:30');
    });

    it('increases the time by half an hour on arrow down', () => {
      const [renderResult, props] = build({ value: '12:00' });
      fireEvent.focus(getByTestId(renderResult, 'time'));
      fireEvent.keyUp(getByTestId(renderResult, 'time'), {
        key: 'down arrow',
        keyCode: 40,
      });
      // @ts-ignore
      expect(props.onChange).toHaveBeenCalledWith('00:30');
    });
  });
});

// @ts-ignore
function fireChangeEvent(element, value) {
  fireEvent.change(element, {
    target: { value: value },
  });
}

// @ts-ignore
function fireBlurEvent(element) {
  fireEvent.blur(element);
}

// @ts-ignore
function mockDate(dateNowSpy, now) {
  dateNowSpy.mockImplementation(jest.fn(() => new Date(now).valueOf()));
}

function getByTestId(renderResult: any, testId: string) {
  return renderResult.container.querySelector(`[data-test-id="${testId}"]`);
}
