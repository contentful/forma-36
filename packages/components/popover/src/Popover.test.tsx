import { describe, expect, it, vi } from 'vitest';
import React, { useState } from 'react';
import {
  render,
  act,
  waitFor,
  screen,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Popover } from '.';
import { Button } from '@contentful/f36-button';
import { Icon } from '@contentful/f36-icon';
import { StarIcon } from '@contentful/f36-icons';

const renderTrigger = (triggerType: string, buttonProps) => {
  if (triggerType === 'TriggerButton')
    return (
      <Popover.TriggerButton {...buttonProps}>Toggle</Popover.TriggerButton>
    );

  if (triggerType === 'IconTriggerButton')
    return (
      <Popover.TriggerButton
        aria-label="Toggle"
        icon={<Icon as={StarIcon} />}
        {...buttonProps}
      />
    );

  return (
    <Popover.Trigger>
      <Button {...buttonProps}>Toggle</Button>
    </Popover.Trigger>
  );
};

const renderWithAct = async (props, triggerType?: string) => {
  let result: ReturnType<typeof render>;
  await act(async () => {
    result = render(
      <Popover {...props}>
        {renderTrigger(triggerType, {})}
        <Popover.Content>This is the content.</Popover.Content>
      </Popover>,
    );
  });
  return result;
};

describe.each(['Trigger', 'TriggerButton', 'IconTriggerButton'])(
  'Popover with %s',
  (triggerType) => {
    it('renders the component', async () => {
      await renderWithAct({}, triggerType);

      const trigger = screen.getByRole('button');

      await waitFor(() => {
        expect(trigger).toHaveAttribute('aria-expanded', 'false');
        expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
      });
    });

    it('renders the components as open', async () => {
      await renderWithAct({ isOpen: true }, triggerType);

      const trigger = screen.getByRole('button', { name: 'Toggle' });

      await waitFor(() => {
        expect(trigger).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByRole('dialog')).toBeTruthy();
      });
    });

    it('opens and closes the component when clicking on the trigger', async () => {
      function Controlled() {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {renderTrigger(triggerType, {
              className: 'trigger',
              onClick: () => setIsOpen(!isOpen),
            })}

            <Popover.Content className="popover">
              This is the content.
            </Popover.Content>
          </Popover>
        );
      }
      render(<Controlled />);
      expect(
        screen.queryByText('This is the content.'),
      ).not.toBeInTheDocument();
      await userEvent.click(screen.getByRole('button', { name: 'Toggle' }));
      expect(screen.getByRole('button', { name: 'Toggle' })).toHaveAttribute(
        'aria-expanded',
        'true',
      );
      expect(screen.getByText('This is the content.')).toBeVisible();
      await userEvent.click(screen.getByRole('button', { name: 'Toggle' }));
      expect(
        screen.queryByText('This is the content.'),
      ).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Toggle' })).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('renders the components with additional class names', async () => {
      await act(async () =>
        render(
          <Popover isOpen={true}>
            {renderTrigger(triggerType, { className: 'trigger' })}
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
      const handleClose = vi.fn();
      const user = userEvent.setup();

      await renderWithAct({ isOpen: true, onClose: handleClose }, triggerType);

      await user.keyboard('{Escape}');
      await waitFor(() => {
        expect(handleClose).toHaveBeenCalled();
      });
    });

    it('do NOT call onClose when pressing Esc key and closeOnEsc prop is false', async () => {
      const handleClose = vi.fn();
      const user = userEvent.setup();

      await renderWithAct(
        {
          isOpen: true,
          onClose: handleClose,
          closeOnEsc: false,
        },
        triggerType,
      );

      await user.keyboard('{Escape}');
      await waitFor(() => {
        expect(handleClose).not.toHaveBeenCalled();
      });
    });

    it('call onClose when clicking outside of popover', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      await renderWithAct(
        {
          isOpen: true,
          onClose: handleClose,
        },
        triggerType,
      );

      await user.click(document.body);

      await waitFor(() => {
        expect(handleClose).toHaveBeenCalled();
      });
    });

    it('do NOT call onClose when clicking inside of popover', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      await renderWithAct(
        {
          isOpen: true,
          onClose: handleClose,
        },
        triggerType,
      );

      await user.click(screen.getByRole('dialog'));

      await waitFor(() => {
        expect(handleClose).not.toHaveBeenCalled();
      });
    });

    it('do NOT call onClose when clicking outside of popover and closeOnBlur is false', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      await renderWithAct(
        {
          isOpen: true,
          onClose: handleClose,
          closeOnBlur: false,
        },
        triggerType,
      );

      await user.click(document.body);

      await waitFor(() => {
        expect(handleClose).not.toHaveBeenCalled();
      });
    });

    it('call onClose when scrolling an ancestor', async () => {
      const handleClose = vi.fn();

      await renderWithAct(
        {
          isOpen: true,
          onClose: handleClose,
        },
        triggerType,
      );

      fireEvent.scroll(window);

      await waitFor(() => {
        expect(handleClose).toHaveBeenCalled();
      });
    });

    it('do NOT call onClose when scrolling an ancestor and closeOnScroll is false', async () => {
      const handleClose = vi.fn();

      await renderWithAct(
        {
          isOpen: true,
          onClose: handleClose,
          closeOnScroll: false,
        },
        triggerType,
      );

      fireEvent.scroll(window);

      await waitFor(() => {
        expect(handleClose).not.toHaveBeenCalled();
      });
    });

    it('popover should receive focus when open by default (autoFocus=true)', async () => {
      await renderWithAct({ isOpen: true }, triggerType);
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
      await renderWithAct({ isOpen: true, autoFocus: false }, triggerType);
      await waitFor(() => {
        expect(screen.getByRole('dialog')).not.toHaveFocus();
      });
    });

    it('popover should NOT be rendered in the DOM by default (when renderOnlyWhenOpen=true)', async () => {
      await renderWithAct({}, triggerType);

      await waitFor(() => {
        expect(
          screen.queryByTestId('cf-ui-popover-content'),
        ).not.toBeInTheDocument();
      });
    });

    it('popover should be rendered in the DOM when renderOnlyWhenOpen=false', async () => {
      await renderWithAct(
        {
          renderOnlyWhenOpen: false,
        },
        triggerType,
      );
      await waitFor(() => {
        expect(
          screen.queryByTestId('cf-ui-popover-content'),
        ).toBeInTheDocument();
      });
    });

    it('has no a11y issues when closed', async () => {
      const { container } = await renderWithAct({}, triggerType);

      await expectNoA11yViolations(container);
    });
  },
);
