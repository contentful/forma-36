import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Datepicker } from '../src/';

describe('Datepicker', () => {
  it('renders', () => {
    const { container } = render(<Datepicker />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('shows the datepicker on focus', () => {
    render(<Datepicker />);

    expect(document.querySelector('.pika-single')).toHaveClass('is-hidden');

    userEvent.click(screen.getByTestId('cf-ui-datepicker'));

    expect(document.querySelector('.pika-single')).not.toHaveClass('is-hidden');
  });
});
