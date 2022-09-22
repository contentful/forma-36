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
import { axe } from 'jest-axe';

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

  it('opens calendar when button is clicked', async () => {
    render(<Datepicker selected={testDate} onSelect={jest.fn()} />);

    await userEvent.click(screen.getByRole('button'));

    expect(
      await screen.findByTestId('cf-ui-datepicker-button'),
    ).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByTestId('cf-ui-popover-content')).toBeInTheDocument();
    expect(screen.getByText(format(testDate, 'LLLL yyyy'))).toBeTruthy();
  });

  it('renders the calendar initialy open', () => {
    render(
      <Datepicker selected={testDate} onSelect={jest.fn()} defaultIsOpen />,
    );

    const popoverContent = screen.getByTestId('cf-ui-popover-content');
    const datepickerTrigger = screen.getByTestId('cf-ui-datepicker-button');

    expect(datepickerTrigger).toHaveAttribute('aria-expanded', 'true');
    expect(popoverContent).toBeInTheDocument();
  });

  it('should close the calendar when esc is pressed', async () => {
    render(
      <Datepicker selected={testDate} onSelect={jest.fn()} defaultIsOpen />,
    );
    const popoverContent = screen.getByTestId('cf-ui-popover-content');
    const datepickerTrigger = screen.getByTestId('cf-ui-datepicker-button');

    fireEvent.keyDown(document.activeElement, {
      key: 'Escape',
    });

    await waitFor(() => {
      expect(datepickerTrigger).toHaveAttribute('aria-expanded', 'false');
      expect(popoverContent).not.toBeInTheDocument();
    });
  });

  it('updates value and trigger onSelect when clicking a day on calendar', async () => {
    const onSelect = jest.fn();
    const newDate = new Date('2022-04-22');
    render(
      <Datepicker selected={testDate} onSelect={onSelect} defaultIsOpen />,
    );

    const popover = screen.getByTestId('cf-ui-popover-content');

    await userEvent.click(within(popover).getByText(newDate.getDay()));

    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('should not open calendar if datepicker is disabled', async () => {
    render(
      <Datepicker
        selected={testDate}
        onSelect={jest.fn()}
        inputProps={{ isDisabled: true }}
      />,
    );

    expect(screen.getByTestId('cf-ui-datepicker-input')).toBeDisabled();

    await userEvent.click(screen.getByRole('button'));

    expect(screen.queryByTestId('cf-ui-popover-content')).toBeNull();
  });

  it('should set error state if date is invalid', async () => {
    render(<Datepicker selected={testDate} onSelect={jest.fn()} />);
    const input = screen.getByTestId('cf-ui-datepicker-input');

    await userEvent.type(input, 'invalid date');

    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Datepicker selected={testDate} onSelect={jest.fn()} defaultIsOpen />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
