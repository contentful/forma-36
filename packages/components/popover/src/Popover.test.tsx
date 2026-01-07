import React, { useState } from 'react';
import { render, act, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Popover } from '.';
import { Button } from '@contentful/f36-button';

const renderWithAct = async (props) => {
  let result: ReturnType<typeof render>;
  await act(async () => {
    result = render(
      <Popover {...props}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );
  });
  return result;
};

describe('Popover', function () {
  it('renders the component', async () => {
    await renderWithAct({});

    const trigger = screen.getByRole('button');

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    });
  });

  it('renders the components as open', async () => {
    await renderWithAct({ isOpen: true });

    const trigger = screen.getByRole('button', { name: 'Toggle' });

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('dialog')).toBeTruthy();
    });
  });

  it('renders the components with an additional class names', async () => {
    await act(async () =>
      render(
        <Popover isOpen={true}>
          <Popover.Trigger>
            <Button className="trigger">Toggle</Button>
          </Popover.Trigger>
          <Popover.Content className="popover">
            This is the content.
          </Popover.Content>
        </Popover>,
      ),
    );

    const trigger = screen.getByRole('button', { name: 'Toggle' });
    const popover = screen.getByRole('dialog');

    await waitFor(() => {
      expect(trigger).toHaveClass('trigger');
      expect(popover).toHaveClass('popover');
    });
  });

  it('call onClose when pressing Esc key', async () => {
    const handleClose = jest.fn();
    const user = userEvent.setup();

    await renderWithAct({ isOpen: true, onClose: handleClose });

    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });

  it('do NOT call onClose when pressing Esc key and closeOnEsc prop is false', async () => {
    const handleClose = jest.fn();
    const user = userEvent.setup();

    await renderWithAct({
      isOpen: true,
      onClose: handleClose,
      closeOnEsc: false,
    });

    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  it('call onClose when clicking outside of popover', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();

    await renderWithAct({
      isOpen: true,
      onClose: handleClose,
    });

    await user.click(document.body);

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });

  it('do NOT call onClose when clicking inside of popover', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();

    await renderWithAct({
      isOpen: true,
      onClose: handleClose,
    });

    await user.click(screen.getByRole('dialog'));

    await waitFor(() => {
      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  it('do NOT call onClose when clicking outside of popover and closeOnBlur is false', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();

    await renderWithAct({
      isOpen: true,
      onClose: handleClose,
      closeOnBlur: false,
    });

    await user.click(document.body);

    await waitFor(() => {
      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  it('popover should receive focus when open by default (autoFocus=true)', async () => {
    await renderWithAct({ isOpen: true });
    const dialog = await screen.findByRole('dialog');
    await waitFor(() => {
      expect(dialog).toHaveFocus();
    });
  });

  it('popover should receive focus after opening', async () => {
    function Controlled() {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Popover.Trigger>
            <Button className="trigger" onClick={() => setIsOpen(true)}>
              Toggle
            </Button>
          </Popover.Trigger>
          <Popover.Content className="popover">
            This is the content.
          </Popover.Content>
        </Popover>
      );
    }

    await act(async () => render(<Controlled />));
    const user = userEvent.setup();
    await user.click(screen.getByTestId('cf-ui-button'));
    expect(screen.queryByTestId('cf-ui-popover-content')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveFocus();
    });
  });

  it('popover should NOT receive focus when autoFocus=false', async () => {
    await renderWithAct({ isOpen: true, autoFocus: false });
    await waitFor(() => {
      expect(screen.getByRole('dialog')).not.toHaveFocus();
    });
  });

  it('popover should NOT be rendered in the DOM by default (when renderOnlyWhenOpen=true)', async () => {
    await renderWithAct({});

    await waitFor(() => {
      expect(
        screen.queryByTestId('cf-ui-popover-content'),
      ).not.toBeInTheDocument();
    });
  });

  it('popover should be rendered in the DOM when renderOnlyWhenOpen=false', async () => {
    await renderWithAct({
      renderOnlyWhenOpen: false,
    });
    await waitFor(() => {
      expect(screen.queryByTestId('cf-ui-popover-content')).toBeInTheDocument();
    });
  });

  it('has no a11y issues', async () => {
    const { container } = await renderWithAct({});

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
