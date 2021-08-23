import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { Popover, PopoverTrigger, PopoverContent } from '../src/.';
import { Button } from '@contentful/f36-button';

describe('Popover', function () {
  it('renders the component', () => {
    const { getByRole } = render(
      <Popover>
        <PopoverTrigger>
          <Button>Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>This is the content.</PopoverContent>
      </Popover>,
    );

    const trigger = getByRole('button');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('renders the components as open', () => {
    const { getByRole } = render(
      <Popover isOpen={true}>
        <PopoverTrigger>
          <Button>Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>This is the content.</PopoverContent>
      </Popover>,
    );

    const trigger = getByRole('button');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    expect(getByRole('dialog')).toBeTruthy();
  });

  it('renders the components with an additional class names', () => {
    const { getByRole } = render(
      <Popover isOpen={true}>
        <PopoverTrigger>
          <Button className="trigger">Toggle</Button>
        </PopoverTrigger>
        <PopoverContent className="popover">
          This is the content.
        </PopoverContent>
      </Popover>,
    );

    const trigger = getByRole('button');
    expect(trigger).toHaveClass('trigger');

    const popover = getByRole('dialog');
    expect(popover).toHaveClass('popover');
  });

  it('call onClose when pressing Esc key', () => {
    const handleClose = jest.fn();

    render(
      <Popover isOpen={true} onClose={handleClose}>
        <PopoverTrigger>
          <Button>Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>This is the content.</PopoverContent>
      </Popover>,
    );

    fireEvent.keyDown(document.activeElement, {
      key: 'Escape',
    });
    expect(handleClose).toHaveBeenCalled();
  });

  it('do NOT call onClose when pressing Esc key and closeOnEsc prop is false', () => {
    const handleClose = jest.fn();

    render(
      <Popover isOpen={true} onClose={handleClose} closeOnEsc={false}>
        <PopoverTrigger>
          <Button>Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>This is the content.</PopoverContent>
      </Popover>,
    );

    fireEvent.keyDown(document.activeElement, {
      key: 'Escape',
    });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('call onClose when clicking outside of popover', () => {
    const handleClose = jest.fn();

    render(
      <Popover isOpen={true} onClose={handleClose}>
        <PopoverTrigger>
          <Button>Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>This is the content.</PopoverContent>
      </Popover>,
    );

    userEvent.click(document.body);
    expect(handleClose).toHaveBeenCalled();
  });

  it('do NOT call onClose when clicking inside of popover', () => {
    const handleClose = jest.fn();

    const { getByRole } = render(
      <Popover isOpen={true} onClose={handleClose}>
        <PopoverTrigger>
          <Button>Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>This is the content.</PopoverContent>
      </Popover>,
    );

    userEvent.click(getByRole('dialog'));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('do NOT call onClose when clicking outside of popover and closeOnBlur is false', () => {
    const handleClose = jest.fn();

    render(
      <Popover isOpen={true} onClose={handleClose} closeOnBlur={false}>
        <PopoverTrigger>
          <Button>Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>This is the content.</PopoverContent>
      </Popover>,
    );

    userEvent.click(document.body);
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('popover should receive focus when open', () => {
    const { getByRole } = render(
      <Popover isOpen={true}>
        <PopoverTrigger>
          <Button>Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>This is the content.</PopoverContent>
      </Popover>,
    );

    expect(getByRole('dialog')).toHaveFocus();
  });

  it('popover should NOT receive focus when open and autoFocus is false', () => {
    const { getByRole } = render(
      // eslint-disable-next-line jsx-a11y/no-autofocus
      <Popover isOpen={true} autoFocus={false}>
        <PopoverTrigger>
          <Button>Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>This is the content.</PopoverContent>
      </Popover>,
    );

    expect(getByRole('dialog')).not.toHaveFocus();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Popover isOpen={true}>
        <PopoverTrigger>
          <Button>Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>This is the content.</PopoverContent>
      </Popover>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
