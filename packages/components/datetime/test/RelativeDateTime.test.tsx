import React from 'react';
import { render } from '@testing-library/react';
// import dayjs from 'dayjs';
import { set as mockDateSet, reset as mockDateReset } from 'mockdate';

import { RelativeDateTime } from '../src/RelativeDateTime';

describe('RelativeDateTime', function () {
  const mockDate = '2021-08-17T15:45:00Z';

  beforeEach(() => {
    mockDateSet(new Date(mockDate));
  });

  afterEach(() => {
    mockDateReset();
  });

  it('renders', () => {
    const tree = render(<RelativeDateTime date={mockDate} />);

    expect(tree).toBeTruthy();
  });
});
