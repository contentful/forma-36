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
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<Datepicker selected={testDate} onSelect={jest.fn()} />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByTestId('cf-ui-datepicker-button')).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(screen.getByTestId('cf-ui-popover-content')).toBeInTheDocument();
    expect(screen.getByText(format(testDate, 'LLLL yyyy'))).toBeTruthy();

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
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
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onSelect = jest.fn();
    const newDate = new Date('2022-04-22');
    render(
      <Datepicker selected={testDate} onSelect={onSelect} defaultIsOpen />,
    );

    const popover = await screen.findByTestId('cf-ui-popover-content');
    const element = await within(popover).findByText(newDate.getDay());

    await user.click(element);

    expect(onSelect).toHaveBeenCalledTimes(1);

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should not open calendar if datepicker is disabled', async () => {
    const user = userEvent.setup();
    render(
      <Datepicker
        selected={testDate}
        onSelect={jest.fn()}
        inputProps={{ isDisabled: true }}
      />,
    );

    expect(screen.getByTestId('cf-ui-datepicker-input')).toBeDisabled();

    await user.click(screen.getByRole('button'));

    expect(screen.queryByTestId('cf-ui-popover-content')).toBeNull();
  });

  it('should set error state if date is invalid', async () => {
    const user = userEvent.setup();
    render(<Datepicker selected={testDate} onSelect={jest.fn()} />);
    const input = screen.getByTestId('cf-ui-datepicker-input');

    await user.type(input, 'invalid date');

    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Datepicker selected={testDate} onSelect={jest.fn()} defaultIsOpen />,
    );

    // aria-command-name test disabled because of a known issue with axe and floating ui https://github.com/floating-ui/floating-ui/issues/2823
    const results = await axe(container, {
      rules: {
        'aria-command-name': {
          enabled: false,
        },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
