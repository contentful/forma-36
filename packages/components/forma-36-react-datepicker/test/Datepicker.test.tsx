import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Datepicker from '../src/Datepicker';

describe('Datepicker', () => {
  afterEach(cleanup);

  const build = () => {
    const props = {
      labelText: 'label text',
      value: new Date('2017-01-01'),
      onChange: jest.fn(),
      disabled: false,
      required: false,
      testId: 'date-input',
    };
    return [render(<Datepicker {...props} />), props];
  };

  it('renders datepicker on focus', () => {
    const [renderResult] = build();
    // @ts-ignore
    const dateInput = renderResult.container.querySelector(
      '[data-test-id="date-input"]'
    );
    expect(
      getDatepicker(renderResult).classList.contains('is-hidden')
    ).toBeTruthy();

    fireEvent.focus(dateInput);

    expect(
      getDatepicker(renderResult).classList.contains('is-hidden')
    ).toBeFalsy();

    const yearSelect = getDatepicker(renderResult).querySelector(
      '.pika-select-year'
    );
    fireEvent.focus(yearSelect);

    expect(
      getDatepicker(renderResult).classList.contains('is-hidden')
    ).toBeFalsy();

    fireEvent.blur(dateInput);

    expect(
      getDatepicker(renderResult).classList.contains('is-hidden')
    ).toBeTruthy();
  });
});
// @ts-ignore
function getDatepicker(renderResult) {
  return renderResult.baseElement.getRootNode().querySelector('.pika-single');
}
