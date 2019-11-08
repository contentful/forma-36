import React from 'react';
import moment from 'moment';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Timepicker from '../src/Timepicker';

describe('TimePicker', () => {
  // @ts-ignore
  let dateNowSpy;

  afterEach(cleanup);
  beforeEach(() => {
    dateNowSpy = jest.spyOn(Date, 'now');
  });

  afterEach(() => {
    // @ts-ignore
    dateNowSpy.mockRestore();
  });
  // @ts-ignore
  const build = ({ value }) => {
    const props = {
      onChange: jest.fn(),
      onBlur: () => {},
      date: moment()
        .add(1, 'years')
        .format('YYYY/MM/DD'),
      value,
    };
    return [render(<Timepicker {...props} />), props];
  };

  describe('Recognises 12h and 24h formats', () => {
    it.each([
      ['15:30', '3:30 PM', '15:30', '2017-01-01T00:01'],
      ['09:30', '9:30 AM', '09:30', '2017-01-01T00:01'],
      ['2:30', '2:30 AM', '02:30', '2017-01-01T11:59'],
      ['2:30', '2:30 PM', '14:30', '2017-01-01T12:01'],
    ])(
      'allows valid 24 and 12 hour formats',
      (received, expectedDisplayValue, expectedValue, now) => {
        // @ts-ignore
        mockDate(dateNowSpy, now);
        const [renderResult, props] = build({ value: '00:00' });
        // @ts-ignore
        fireChangeEvent(getByTestId(renderResult, 'time'), received);
        // @ts-ignore
        expect(getByTestId(renderResult, 'time').value).toBe(received);
        // @ts-ignore
        expect(props.onChange).toHaveBeenCalledWith(expectedValue);
        // @ts-ignore
        fireBlurEvent(getByTestId(renderResult, 'time'));
        // @ts-ignore
        expect(getByTestId(renderResult, 'time').value).toBe(
          expectedDisplayValue
        );
      }
    );

    it.each([
      ['Invalid Date', '15:30', '3:30 PM'],
      ['It should publish at 2:30 PM', '15:30', '2:30 PM'],
    ])(
      'falls back to value if input is invalid',
      (input, value, expectedDisplayValue) => {
        const [renderResult] = build({ value });
        // @ts-ignore
        fireChangeEvent(getByTestId(renderResult, 'time'), input);
        // @ts-ignore
        fireBlurEvent(getByTestId(renderResult, 'time'));
        // @ts-ignore
        expect(getByTestId(renderResult, 'time').value).toBe(
          expectedDisplayValue
        );
      }
    );

    // it.each([
    //   ['10:00', ['9:00 AM', '8:30 AM']],
    //   ['10:00', ['9:00 AM', '8:30 AM']],
    //   ['15:00', ['2:00 PM', '1:30 PM']],
    // ])(
    //   'sorts the suggestions on given input',
    //   async (value, firstLastSuggestions) => {
    //     const [renderResult] = build({ value });
    //     // @ts-ignore
    //     fireEvent.focus(getByTestId(renderResult, 'time'));

    //     // @ts-ignore
    //     console.log(getByTestId(renderResult, 'time-suggestion'));
    //     const allSuggestionNodes = [
    //       // @ts-ignore
    //       ...(await renderResult.container.querySelectorAll(
    //         `[data-test-id="time-suggestion"]`
    //       )),
    //     ];
    //     // @ts-ignore
    //     const allLabels = allSuggestionNodes.map(node => node.textContent);
    //     // @ts-ignore
    //     const [first] = allSuggestionNodes.map(node => node.textContent);
    //     const last = allLabels[allLabels.length - 1];

    //     expect([first, last]).toEqual(firstLastSuggestions);
    //   }
    // );

    it.each([
      ['10:00', '09:30', '2017-01-01T00:00'],
      ['10:12', '10:00', '2017-01-01T00:00'],
    ])(
      'decreases the time by half an hour on arrow up',
      (value, expectedValue, now) => {
        // @ts-ignore
        mockDate(dateNowSpy, now);
        const [renderResult, props] = build({ value });
        // @ts-ignore
        fireEvent.focus(getByTestId(renderResult, 'time'));
        // @ts-ignore
        fireEvent.keyUp(getByTestId(renderResult, 'time'), {
          key: 'up arrow',
          keyCode: 38,
        });
        // @ts-ignore
        expect(props.onChange).toHaveBeenCalledWith(expectedValue);
      }
    );

    it.each([
      ['10:00', '10:30', '2017-01-01T00:00'],
      ['10:12', '10:30', '2017-01-01T00:00'],
    ])(
      'increases the time by half an hour on arrow down',
      (value, expectedValue, now) => {
        // @ts-ignore
        mockDate(dateNowSpy, now);
        const [renderResult, props] = build({ value });
        // @ts-ignore
        fireEvent.focus(getByTestId(renderResult, 'time'));
        // @ts-ignore
        fireEvent.keyUp(getByTestId(renderResult, 'time'), {
          key: 'down arrow',
          keyCode: 40,
        });
        // @ts-ignore
        expect(props.onChange).toHaveBeenCalledWith(expectedValue);
      }
    );
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
