import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Datepicker } from './Datepicker';
import { format } from 'date-fns';
import { act } from 'react-dom/test-utils';

describe('Datepicker', function () {
  const testDate = new Date('2022-04-15');

  it('renders', () => {
    const tree = render(<Datepicker onSelect={jest.fn()} />);

    expect(tree).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const additionalClassName = 'my-extra-class';
    render(<Datepicker onSelect={jest.fn()} className={additionalClassName} />);

    expect(
      screen
        .getByTestId('cf-ui-datepicker')
        .classList.contains(additionalClassName),
    ).toBeTruthy();
  });

  it('renders with default date set', () => {
    render(<Datepicker selected={testDate} onSelect={jest.fn()} />);

    expect(screen.getByTestId('cf-ui-datepicker-input')).toHaveValue(
      format(testDate, 'dd LLL yyyy'),
    );
  });

  it('opens calendar when button is clicked with', async () => {
    render(<Datepicker selected={testDate} onSelect={jest.fn()} />);

    act(() => {
      userEvent.click(screen.getByRole('button'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('cf-ui-datepicker')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
      expect(screen.getByTestId('cf-ui-popover-content')).toBeInTheDocument();
      expect(screen.getByText(format(testDate, 'LLLL yyyy'))).toBeTruthy();
    });
  });

  it('renders the calendar initialy open and close when esc key is pressed', async () => {
    render(
      <Datepicker selected={testDate} onSelect={jest.fn()} defaultIsOpen />,
    );

    const popoverContent = screen.getByTestId('cf-ui-popover-content');
    const datepicker = screen.getByTestId('cf-ui-datepicker');

    expect(datepicker).toHaveAttribute('aria-expanded', 'true');
    expect(popoverContent).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(document.activeElement, {
        key: 'Escape',
      });
    });

    await waitFor(() => {
      expect(datepicker).toHaveAttribute('aria-expanded', 'false');
      expect(popoverContent).not.toBeInTheDocument();
    });
  });

  it('updates value and and trigger onSelect when clicking a day on calendar', async () => {
    const onSelect = jest.fn();
    const newDate = new Date('2022-04-22');
    const { rerender } = render(
      <Datepicker selected={testDate} onSelect={onSelect} defaultIsOpen />,
    );

    const popover = screen.getByTestId('cf-ui-popover-content');
    act(() => {
      userEvent.click(within(popover).getByText(newDate.getDay()));
      rerender(
        <Datepicker selected={newDate} onSelect={onSelect} defaultIsOpen />,
      );
    });
    expect(screen.getByTestId('cf-ui-datepicker-input')).toHaveValue(
      format(newDate, 'dd LLL yyyy'),
    );
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
