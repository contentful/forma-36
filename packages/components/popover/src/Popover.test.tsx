import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Popover } from '.';
import { Button } from '@contentful/f36-button';

describe('Popover', function () {
  it('renders the component', async () => {
    render(
      <Popover>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    const trigger = screen.getByRole('button');

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    });
  });

  it('renders the components as open', async () => {
    render(
      <Popover isOpen={true}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    const trigger = screen.getByRole('button');

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('dialog')).toBeTruthy();
    });
  });

  it('renders the components with an additional class names', async () => {
    render(
      <Popover isOpen={true}>
        <Popover.Trigger>
          <Button className="trigger">Toggle</Button>
        </Popover.Trigger>
        <Popover.Content className="popover">
          This is the content.
        </Popover.Content>
      </Popover>,
    );

    const trigger = screen.getByRole('button');
    const popover = screen.getByRole('dialog');

    await waitFor(() => {
      expect(trigger).toHaveClass('trigger');
      expect(popover).toHaveClass('popover');
    });
  });

  it('call onClose when pressing Esc key', async () => {
    const handleClose = jest.fn();

    render(
      <Popover isOpen={true} onClose={handleClose}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    fireEvent.keyDown(document.activeElement, {
      key: 'Escape',
    });

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });

  it('do NOT call onClose when pressing Esc key and closeOnEsc prop is false', async () => {
    const handleClose = jest.fn();

    render(
      <Popover isOpen={true} onClose={handleClose} closeOnEsc={false}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    fireEvent.keyDown(document.activeElement, {
      key: 'Escape',
    });

    await waitFor(() => {
      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  it('call onClose when clicking outside of popover', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();

    render(
      <Popover isOpen={true} onClose={handleClose}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    await user.click(document.body);

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });

  it('do NOT call onClose when clicking inside of popover', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();

    render(
      <Popover isOpen={true} onClose={handleClose}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    await user.click(screen.getByRole('dialog'));

    await waitFor(() => {
      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  it('do NOT call onClose when clicking outside of popover and closeOnBlur is false', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();

    render(
      <Popover isOpen={true} onClose={handleClose} closeOnBlur={false}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    await user.click(document.body);

    await waitFor(() => {
      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  it('popover should receive focus when open', async () => {
    render(
      <Popover isOpen={true}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveFocus();
    });
  });

  it('popover should NOT receive focus when open and autoFocus is false', async () => {
    render(
      // eslint-disable-next-line jsx-a11y/no-autofocus
      <Popover isOpen={true} autoFocus={false}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    await waitFor(() => {
      expect(screen.getByRole('dialog')).not.toHaveFocus();
    });
  });

  it('popover should NOT be rendered in the DOM by default (when renderOnlyWhenOpen=true)', async () => {
    render(
      <Popover>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    await waitFor(() => {
      expect(
        screen.queryByTestId('cf-ui-popover-content'),
      ).not.toBeInTheDocument();
    });
  });

  it('popover should be rendered in the DOM when renderOnlyWhenOpen=false', async () => {
    render(
      <Popover renderOnlyWhenOpen={false}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('cf-ui-popover-content')).toBeInTheDocument();
    });
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Popover isOpen={true}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
