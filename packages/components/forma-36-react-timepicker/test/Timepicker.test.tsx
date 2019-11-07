import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import moment from 'moment';
import '@testing-library/jest-dom/extend-expect';

import TimePicker from '../src/Timepicker';

describe('TimePicker', () => {
  let dateNowSpy;

  afterEach(cleanup);
  beforeEach(() => {
    dateNowSpy = jest.spyOn(Date, 'now');
  });

  afterEach(() => {
    dateNowSpy.mockRestore();
  });

  const build = ({ value }) => {
    const props = {
      onChange: jest.fn(),
      date: moment()
        .add(1, 'years')
        .format('YYYY/MM/DD'),
      value,
    };
    return [render(<TimePicker {...props} />), props];
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
        mockDate(dateNowSpy, now);
        const [renderResult, props] = build({ value: '00:00' });
        fireChangeEvent(renderResult.getByTestId('time'), received);
        expect(renderResult.getByTestId('time').value).toBe(received);
        expect(props.onChange).toHaveBeenCalledWith(expectedValue);

        fireBlurEvent(renderResult.getByTestId('time'));
        expect(renderResult.getByTestId('time').value).toBe(
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
        fireChangeEvent(renderResult.getByTestId('time'), input);

        fireBlurEvent(renderResult.getByTestId('time'));
        expect(renderResult.getByTestId('time').value).toBe(
          expectedDisplayValue
        );
      }
    );

    it.each([
      ['10:00', ['9:00 AM', '8:30 AM']],
      ['10:00', ['9:00 AM', '8:30 AM']],
      ['15:00', ['2:00 PM', '1:30 PM']],
    ])(
      'sorts the suggestions on given input',
      async (value, firstLastSuggestions) => {
        const [renderResult] = build({ value });

        fireEvent.focus(renderResult.getByTestId('time'));

        const allSuggestionNodes = await renderResult.findAllByTestId(
          'time-suggestion'
        );
        const allLabels = allSuggestionNodes.map(node => node.textContent);
        const [first] = allSuggestionNodes.map(node => node.textContent);
        const last = allLabels[allLabels.length - 1];

        expect([first, last]).toEqual(firstLastSuggestions);
      }
    );

    it.each([
      ['10:00', '09:30', '2017-01-01T00:00'],
      ['10:12', '10:00', '2017-01-01T00:00'],
    ])(
      'decreases the time by half an hour on arrow up',
      (value, expectedValue, now) => {
        mockDate(dateNowSpy, now);
        const [renderResult, props] = build({ value });
        fireEvent.focus(renderResult.getByTestId('time'));
        fireEvent.keyUp(renderResult.getByTestId('time'), {
          key: 'up arrow',
          keyCode: 38,
        });
        expect(props.onChange).toHaveBeenCalledWith(expectedValue);
      }
    );

    it.each([
      ['10:00', '10:30', '2017-01-01T00:00'],
      ['10:12', '10:30', '2017-01-01T00:00'],
    ])(
      'increases the time by half an hour on arrow down',
      (value, expectedValue, now) => {
        mockDate(dateNowSpy, now);
        const [renderResult, props] = build({ value });
        fireEvent.focus(renderResult.getByTestId('time'));
        fireEvent.keyUp(renderResult.getByTestId('time'), {
          key: 'down arrow',
          keyCode: 40,
        });
        expect(props.onChange).toHaveBeenCalledWith(expectedValue);
      }
    );
  });
});

function fireChangeEvent(element, value) {
  fireEvent.change(element, {
    target: { value: value },
  });
}

function fireBlurEvent(element) {
  fireEvent.blur(element);
}

function mockDate(dateNowSpy, now) {
  dateNowSpy.mockImplementation(jest.fn(() => new Date(now).valueOf()));
}
