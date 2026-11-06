import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import React, { useState } from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DndContext, useDraggable } from '@dnd-kit/core';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';
import { Button } from '@contentful/f36-button';
import { Menu } from '@contentful/f36-menu';
import { Modal } from '@contentful/f36-modal';
import { Tooltip } from '@contentful/f36-tooltip';
import { XIcon } from '@contentful/f36-icons';

import { InlineConfigurationPopover, useInlineConfigurationPopover } from '.';
import type { InlineConfigurationPopoverProps } from '.';
import { ANNOUNCER_TEST_ID } from './utils/announcer';
import { resetTriggerNameWarnings } from './utils/accessibleName';

// jsdom has no layout. Give every element a rect inside the viewport, and
// let a test move one element (e.g. the anchor) out of view.
const DEFAULT_RECT = { x: 600, y: 100, width: 120, height: 32 };
const OFFSCREEN_RECT = { x: 600, y: -500, width: 120, height: 32 };

function toDomRect({ x, y, width, height }: typeof DEFAULT_RECT) {
  return {
    x,
    y,
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    toJSON: () => ({}),
  } as DOMRect;
}

beforeEach(() => {
  // Each name is only reported once per page load; start every test fresh
  resetTriggerNameWarnings();
  // Floating UI measures the viewport through the root element
  Object.defineProperty(document.documentElement, 'clientWidth', {
    configurable: true,
    value: 1024,
  });
  Object.defineProperty(document.documentElement, 'clientHeight', {
    configurable: true,
    value: 768,
  });
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(
    function (this: Element) {
      return toDomRect(
        this.closest('[data-offscreen]') ? OFFSCREEN_RECT : DEFAULT_RECT,
      );
    },
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

/** Lets Floating UI position the popover and timers queued by dnd-kit run */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

const getDialog = () => screen.getByRole('dialog');
const queryDialog = () => screen.queryByRole('dialog');
// While the popover is open, the rest of the page (including the trigger) is
// hidden from assistive technology, so these queries include hidden elements.
const getTrigger = () =>
  screen.getByRole('button', {
    name: 'Edit parameter Blog post',
    hidden: true,
  });
const getOutside = () =>
  screen.getByRole('button', { name: 'Outside', hidden: true });

type ExampleProps = Partial<InlineConfigurationPopoverProps> & {
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

function Example({ body, footer, ...props }: ExampleProps) {
  return (
    <>
      <button type="button">Outside</button>
      <InlineConfigurationPopover {...props}>
        <InlineConfigurationPopover.Trigger aria-label="Edit parameter Blog post">
          Edit
        </InlineConfigurationPopover.Trigger>
        <InlineConfigurationPopover.Content>
          <InlineConfigurationPopover.Header
            title="Blog post"
            caption="Reference, required"
          />
          <InlineConfigurationPopover.Body>
            {body ?? (
              <>
                <Button size="small">Add to path</Button>
                <Button size="small">Select content manually</Button>
              </>
            )}
          </InlineConfigurationPopover.Body>
          {footer}
        </InlineConfigurationPopover.Content>
      </InlineConfigurationPopover>
    </>
  );
}

/** Opens the popover and waits until focus has moved into it */
async function openWithClick(user: ReturnType<typeof userEvent.setup>) {
  await user.click(getTrigger());
  await settle();
  const dialog = getDialog();
  await waitFor(() =>
    expect(dialog).toContainElement(document.activeElement as HTMLElement),
  );
  return dialog;
}

describe('InlineConfigurationPopover', () => {
  describe('closing on outside press', () => {
    it('closes when pressing outside', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(<Example onClose={onClose} />);

      await openWithClick(user);
      await user.click(getOutside());

      expect(queryDialog()).not.toBeInTheDocument();
      expect(onClose).toHaveBeenLastCalledWith('outside-press');
    });

    it('stays open when closeOnBlur is false', async () => {
      const user = userEvent.setup();
      render(<Example closeOnBlur={false} />);

      await openWithClick(user);
      await user.click(getOutside());

      expect(getDialog()).toBeInTheDocument();
    });

    it('stays open when pressing inside a nested F36 Menu', async () => {
      const user = userEvent.setup();
      const onDuplicate = vi.fn();
      render(
        <Example
          body={
            <Menu>
              <Menu.Trigger>
                <Button size="small">More actions</Button>
              </Menu.Trigger>
              <Menu.List>
                <Menu.Item onClick={onDuplicate}>Duplicate</Menu.Item>
              </Menu.List>
            </Menu>
          }
        />,
      );

      await openWithClick(user);
      await user.click(screen.getByRole('button', { name: 'More actions' }));
      await user.click(
        await screen.findByRole('menuitem', { name: 'Duplicate' }),
      );

      expect(onDuplicate).toHaveBeenCalled();
      expect(getDialog()).toBeInTheDocument();
    });

    it('stays open when pressing a raw overlay appended after it opened', async () => {
      const user = userEvent.setup();
      render(<Example />);

      await openWithClick(user);

      const overlay = document.createElement('div');
      overlay.setAttribute('role', 'presentation');
      const modalButton = document.createElement('button');
      modalButton.textContent = 'Select entry';
      overlay.appendChild(modalButton);
      document.body.appendChild(overlay);

      await user.click(modalButton);

      expect(getDialog()).toBeInTheDocument();
      overlay.remove();
    });

    it('treats a press on the anchor as inside, and the trigger toggles once', async () => {
      const user = userEvent.setup();
      const onOpen = vi.fn();
      const onClose = vi.fn();
      render(
        <InlineConfigurationPopover onOpen={onOpen} onClose={onClose}>
          <InlineConfigurationPopover.Anchor>
            <div data-test-id="row">
              <span data-test-id="row-label">Blog post</span>
              <InlineConfigurationPopover.Trigger aria-label="Edit parameter Blog post">
                Edit
              </InlineConfigurationPopover.Trigger>
            </div>
          </InlineConfigurationPopover.Anchor>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Header title="Blog post" />
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>,
      );

      await openWithClick(user);
      expect(onOpen).toHaveBeenCalledTimes(1);

      await user.click(screen.getByTestId('row-label'));
      expect(getDialog()).toBeInTheDocument();
      expect(onClose).not.toHaveBeenCalled();

      await user.click(getTrigger());
      expect(queryDialog()).not.toBeInTheDocument();
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenLastCalledWith('trigger');
    });
  });

  describe('keyboard on the trigger', () => {
    it('opens with Enter and with Space on the focused trigger', async () => {
      const user = userEvent.setup();
      render(<Example />);

      getTrigger().focus();
      await user.keyboard('{Enter}');
      await settle();
      expect(getDialog()).toBeInTheDocument();

      await user.keyboard('{Escape}');
      expect(queryDialog()).not.toBeInTheDocument();

      getTrigger().focus();
      await user.keyboard(' ');
      await settle();
      expect(getDialog()).toBeInTheDocument();
    });

    it('toggles once per key press, without a double toggle', async () => {
      const user = userEvent.setup();
      const onOpen = vi.fn();
      const onClose = vi.fn();
      render(<Example onOpen={onOpen} onClose={onClose} />);

      getTrigger().focus();
      await user.keyboard('{Enter}');
      await settle();
      expect(getDialog()).toBeInTheDocument();
      expect(onOpen).toHaveBeenCalledTimes(1);

      await user.keyboard('{Escape}');
      expect(onClose).toHaveBeenCalledTimes(1);

      getTrigger().focus();
      await user.keyboard(' ');
      await settle();
      expect(getDialog()).toBeInTheDocument();
      expect(onOpen).toHaveBeenCalledTimes(2);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('trigger', () => {
    function Controlled({
      onOpen,
      onClose,
    }: {
      onOpen?: () => void;
      onClose?: () => void;
    }) {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <InlineConfigurationPopover
          isOpen={isOpen}
          onOpen={() => {
            onOpen?.();
            setIsOpen(true);
          }}
          onClose={() => {
            onClose?.();
            setIsOpen(false);
          }}
        >
          <InlineConfigurationPopover.Trigger aria-label="Edit parameter Blog post">
            Edit
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Header title="Blog post" />
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>
      );
    }

    it('renders a ToggleButton with the visible label, testId and className', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(
        <InlineConfigurationPopover>
          <InlineConfigurationPopover.Trigger
            aria-label="Edit parameter Blog post"
            className="custom-trigger"
            testId="blog-post-trigger"
            icon={<XIcon />}
            ref={ref}
          >
            Edit
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content />
        </InlineConfigurationPopover>,
      );

      const trigger = getTrigger();
      expect(trigger.tagName).toBe('BUTTON');
      expect(trigger).toHaveAttribute('type', 'button');
      expect(trigger).toHaveTextContent('Edit');
      expect(trigger).toHaveAttribute('data-state', 'off');
      expect(trigger).toHaveAttribute('data-test-id', 'blog-post-trigger');
      expect(trigger).toHaveClass('custom-trigger');
      expect(trigger.querySelector('svg')).toBeInTheDocument();
      expect(ref.current).toBe(trigger);
    });

    it('is active while open, uncontrolled, with aria-expanded and no aria-pressed', async () => {
      const user = userEvent.setup();
      render(<Example />);

      const trigger = getTrigger();
      expect(trigger).toHaveAttribute('data-state', 'off');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).not.toHaveAttribute('aria-pressed');

      await openWithClick(user);
      expect(trigger).toHaveAttribute('data-state', 'on');
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(trigger).not.toHaveAttribute('aria-pressed');

      await user.keyboard('{Escape}');
      expect(trigger).toHaveAttribute('data-state', 'off');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).not.toHaveAttribute('aria-pressed');
    });

    it('is active while open, controlled, and toggles once per click', async () => {
      const user = userEvent.setup();
      const onOpen = vi.fn();
      const onClose = vi.fn();
      render(<Controlled onOpen={onOpen} onClose={onClose} />);

      const trigger = getTrigger();
      expect(trigger).toHaveAttribute('data-state', 'off');

      await user.click(trigger);
      await settle();
      expect(getDialog()).toBeInTheDocument();
      expect(trigger).toHaveAttribute('data-state', 'on');
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(trigger).not.toHaveAttribute('aria-pressed');
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onClose).not.toHaveBeenCalled();

      await user.click(trigger);
      expect(queryDialog()).not.toBeInTheDocument();
      expect(trigger).toHaveAttribute('data-state', 'off');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('follows isOpen set by the parent', () => {
      const { rerender } = render(<Example isOpen={false} />);
      expect(getTrigger()).toHaveAttribute('data-state', 'off');

      rerender(<Example isOpen />);
      expect(getTrigger()).toHaveAttribute('data-state', 'on');
      expect(getTrigger()).toHaveAttribute('aria-expanded', 'true');

      rerender(<Example isOpen={false} />);
      expect(getTrigger()).toHaveAttribute('data-state', 'off');
    });

    it('toggles once with Enter and once with Space, controlled', async () => {
      const user = userEvent.setup();
      const onOpen = vi.fn();
      const onClose = vi.fn();
      render(<Controlled onOpen={onOpen} onClose={onClose} />);

      getTrigger().focus();
      await user.keyboard('{Enter}');
      await settle();
      expect(getDialog()).toBeInTheDocument();
      expect(onOpen).toHaveBeenCalledTimes(1);

      // Escape returns focus to the trigger
      await user.keyboard('{Escape}');
      await waitFor(() => expect(getTrigger()).toHaveFocus());
      expect(onClose).toHaveBeenCalledTimes(1);

      await user.keyboard(' ');
      await settle();
      expect(getDialog()).toBeInTheDocument();
      expect(onOpen).toHaveBeenCalledTimes(2);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not open when disabled', async () => {
      const user = userEvent.setup();
      const onOpen = vi.fn();
      render(
        <InlineConfigurationPopover onOpen={onOpen}>
          <InlineConfigurationPopover.Trigger
            aria-label="Edit parameter Blog post"
            isDisabled
          >
            Edit
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content />
        </InlineConfigurationPopover>,
      );

      const trigger = getTrigger();
      expect(trigger).toBeDisabled();
      await user.click(trigger);
      expect(queryDialog()).not.toBeInTheDocument();
      expect(onOpen).not.toHaveBeenCalled();
    });

    it('does not take onToggle or the disclosure ARIA: the popover owns them', async () => {
      const user = userEvent.setup();
      const onToggle = vi.fn();
      render(
        <InlineConfigurationPopover>
          <InlineConfigurationPopover.Trigger
            aria-label="Edit parameter Blog post"
            // @ts-expect-error use onOpen and onClose on InlineConfigurationPopover
            onToggle={onToggle}
          >
            Edit
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Header title="Blog post" />
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>,
      );

      await user.click(getTrigger());
      await settle();
      expect(getDialog()).toBeInTheDocument();
      expect(onToggle).not.toHaveBeenCalled();
    });

    it('chains event handlers passed to it', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      const onFocus = vi.fn();
      render(
        <InlineConfigurationPopover>
          <InlineConfigurationPopover.Trigger
            aria-label="Edit parameter Blog post"
            onClick={onClick}
            onFocus={onFocus}
          >
            Edit
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Header title="Blog post" />
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>,
      );

      await user.click(getTrigger());
      await settle();
      expect(getDialog()).toBeInTheDocument();
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onFocus).toHaveBeenCalled();
    });
  });

  describe('focus management', () => {
    it('moves focus to the first setting and traps Tab inside', async () => {
      const user = userEvent.setup();
      render(<Example />);

      const dialog = await openWithClick(user);
      await waitFor(() =>
        expect(
          screen.getByRole('button', { name: 'Add to path' }),
        ).toHaveFocus(),
      );

      // Focus guards around the dialog send focus back to its first or last
      // element, so focus never stays outside.
      const expectFocusInside = () =>
        waitFor(() =>
          expect(dialog).toContainElement(
            document.activeElement as HTMLElement,
          ),
        );
      for (let i = 0; i < 6; i++) {
        await user.tab();
        await expectFocusInside();
      }
      for (let i = 0; i < 6; i++) {
        await user.tab({ shift: true });
        await expectFocusInside();
      }
    });

    it('focuses initialFocusRef when given', async () => {
      const user = userEvent.setup();

      function WithInitialFocus() {
        const ref = React.useRef<HTMLButtonElement>(null);
        return (
          <Example
            initialFocusRef={ref}
            body={
              <>
                <Button size="small">First</Button>
                <Button size="small" ref={ref}>
                  Second
                </Button>
              </>
            }
          />
        );
      }

      render(<WithInitialFocus />);
      await openWithClick(user);

      await waitFor(() =>
        expect(screen.getByRole('button', { name: 'Second' })).toHaveFocus(),
      );
    });

    it('returns focus to the trigger when closed with Escape', async () => {
      const user = userEvent.setup();
      render(<Example />);

      await openWithClick(user);
      await user.keyboard('{Escape}');

      expect(queryDialog()).not.toBeInTheDocument();
      await waitFor(() => expect(getTrigger()).toHaveFocus());
    });

    it('keeps focus on the trigger when closed with a click on it', async () => {
      const user = userEvent.setup();
      render(<Example />);

      await openWithClick(user);
      await user.click(getTrigger());
      await settle();

      expect(queryDialog()).not.toBeInTheDocument();
      expect(getTrigger()).toHaveAttribute('data-state', 'off');
      await waitFor(() => expect(getTrigger()).toHaveFocus());
    });

    it('returns focus to the trigger when closed with the close button', async () => {
      const user = userEvent.setup();
      render(<Example />);

      await openWithClick(user);
      await user.click(
        screen.getByRole('button', { name: 'Close Blog post settings' }),
      );

      expect(queryDialog()).not.toBeInTheDocument();
      await waitFor(() => expect(getTrigger()).toHaveFocus());
    });

    it('leaves focus on the element pressed outside, e.g. another row', async () => {
      const user = userEvent.setup();
      render(<Example />);

      await openWithClick(user);
      await user.click(getOutside());
      await settle();

      expect(queryDialog()).not.toBeInTheDocument();
      expect(getOutside()).toHaveFocus();
    });

    it('returns focus to the trigger when pressing a blank area outside', async () => {
      const user = userEvent.setup();
      render(
        <>
          <p>Blank area</p>
          <Example />
        </>,
      );

      await openWithClick(user);
      // Pressing an element that can't take focus moves focus to <body>
      // after the popover has already closed on pointerdown
      await user.click(screen.getByText('Blank area'));
      await settle();

      expect(queryDialog()).not.toBeInTheDocument();
      await waitFor(() => expect(getTrigger()).toHaveFocus());
    });

    it('returns focus to the trigger after a touch tap on a blank area', async () => {
      const user = userEvent.setup();
      render(
        <>
          <p>Blank area</p>
          <Example />
        </>,
      );

      await openWithClick(user);
      // Touch: compatibility mouse events follow pointerup
      await user.pointer([
        { keys: '[TouchA>]', target: screen.getByText('Blank area') },
        { keys: '[/TouchA]' },
      ]);
      await settle();

      expect(queryDialog()).not.toBeInTheDocument();
      await waitFor(() => expect(getTrigger()).toHaveFocus());
    });
  });

  describe('Escape', () => {
    it('closes with Escape', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(<Example onClose={onClose} />);

      await openWithClick(user);
      await user.keyboard('{Escape}');

      expect(queryDialog()).not.toBeInTheDocument();
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenLastCalledWith('escape-key');
    });

    it('stays open with Escape when closeOnEsc is false', async () => {
      const user = userEvent.setup();
      render(<Example closeOnEsc={false} />);

      await openWithClick(user);
      await user.keyboard('{Escape}');

      expect(getDialog()).toBeInTheDocument();
    });

    it('does not let Escape reach page-level listeners', async () => {
      const user = userEvent.setup();
      const pageListener = vi.fn();
      document.addEventListener('keydown', pageListener);
      render(<Example />);

      await openWithClick(user);
      await user.keyboard('{Escape}');

      expect(queryDialog()).not.toBeInTheDocument();
      expect(pageListener).not.toHaveBeenCalledWith(
        expect.objectContaining({ key: 'Escape' }),
      );
      document.removeEventListener('keydown', pageListener);
    });

    it('closes only a nested Menu when Escape is pressed inside it', async () => {
      const user = userEvent.setup();
      render(
        <Example
          body={
            <Menu>
              <Menu.Trigger>
                <Button size="small">More actions</Button>
              </Menu.Trigger>
              <Menu.List>
                <Menu.Item>Duplicate</Menu.Item>
              </Menu.List>
            </Menu>
          }
        />,
      );

      await openWithClick(user);
      await user.click(screen.getByRole('button', { name: 'More actions' }));
      const item = await screen.findByRole('menuitem', { name: 'Duplicate' });
      await waitFor(() => expect(item).toHaveFocus());

      await user.keyboard('{Escape}');

      await waitFor(() =>
        expect(screen.queryByRole('menu')).not.toBeInTheDocument(),
      );
      expect(getDialog()).toBeInTheDocument();
    });
  });

  describe('trigger semantics and name', () => {
    it('sets aria-haspopup, aria-expanded and aria-controls', async () => {
      const user = userEvent.setup();
      render(<Example id="blog-post-settings" />);

      const trigger = getTrigger();
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).not.toHaveAttribute('aria-controls');

      const dialog = await openWithClick(user);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(trigger).toHaveAttribute('aria-controls', 'blog-post-settings');
      expect(dialog).toHaveAttribute('id', 'blog-post-settings');
    });

    it('warns in development when the trigger name is a generic verb', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(
        <InlineConfigurationPopover>
          <InlineConfigurationPopover.Trigger aria-label="Override">
            Override
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content />
        </InlineConfigurationPopover>,
      );

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('"Override" doesn\'t say which item it opens'),
      );
    });

    it('warns in development when the trigger has no name', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(
        <InlineConfigurationPopover>
          {/* An empty label on an icon-only trigger, e.g. from missing data */}
          <InlineConfigurationPopover.Trigger aria-label="" icon={<XIcon />} />
          <InlineConfigurationPopover.Content />
        </InlineConfigurationPopover>,
      );

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('has no accessible name'),
      );
    });

    it('warns in development when the name does not start with the visible text', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(
        <InlineConfigurationPopover>
          <InlineConfigurationPopover.Trigger aria-label="Blog post settings">
            Set
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content />
        </InlineConfigurationPopover>,
      );

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining(
          'the accessible name "Blog post settings" doesn\'t start with the visible text "Set"',
        ),
      );
    });

    it('does not warn for meaningful names', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(
        <>
          <Example />
          <InlineConfigurationPopover>
            <InlineConfigurationPopover.Trigger aria-label="Set parameter Limit">
              Set
            </InlineConfigurationPopover.Trigger>
            <InlineConfigurationPopover.Content />
          </InlineConfigurationPopover>
        </>,
      );

      expect(warn).not.toHaveBeenCalled();
    });
  });

  describe('names, descriptions and announcements', () => {
    it('names the dialog after the header title and describes it with the caption', async () => {
      const user = userEvent.setup();
      render(<Example />);

      const dialog = await openWithClick(user);

      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(dialog).toHaveAccessibleName('Blog post settings');
      expect(dialog).toHaveAccessibleDescription('Reference, required');
      expect(
        within(dialog).getByRole('button', {
          name: 'Close Blog post settings',
        }),
      ).toBeInTheDocument();
    });

    it('does not repeat "settings" when the title already ends with it', async () => {
      const user = userEvent.setup();
      render(
        <InlineConfigurationPopover>
          <InlineConfigurationPopover.Trigger aria-label="Edit display settings">
            Edit
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Header title="Display settings" />
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>,
      );

      await user.click(
        screen.getByRole('button', { name: 'Edit display settings' }),
      );
      expect(getDialog()).toHaveAccessibleName('Display settings');
    });

    it('has no axe violations when open', async () => {
      const user = userEvent.setup();
      const { container } = render(<Example isDraggable />);

      await expectNoA11yViolations(container);
      const dialog = await openWithClick(user);
      await expectNoA11yViolations(dialog);
    });

    it('announces messages in a polite live region that outlives the popover', async () => {
      const user = userEvent.setup();

      function ResetButton() {
        const { announce, close } = useInlineConfigurationPopover();
        return (
          <Button
            size="small"
            onClick={() => {
              close();
              announce('Blog post reset to default');
            }}
          >
            Reset
          </Button>
        );
      }

      render(
        <Example
          footer={
            <InlineConfigurationPopover.Footer>
              <ResetButton />
            </InlineConfigurationPopover.Footer>
          }
        />,
      );

      const region = screen.getByTestId(ANNOUNCER_TEST_ID);
      expect(region).toHaveAttribute('role', 'status');
      expect(region).toHaveAttribute('aria-live', 'polite');

      await openWithClick(user);
      await user.click(screen.getByRole('button', { name: 'Reset' }));

      expect(queryDialog()).not.toBeInTheDocument();
      await waitFor(() =>
        expect(region).toHaveTextContent('Blog post reset to default'),
      );
      await waitFor(() => expect(getTrigger()).toHaveFocus());
    });
  });

  describe('positioning', () => {
    it('hides the popover while its anchor is scrolled out of view', async () => {
      const user = userEvent.setup();
      render(
        <InlineConfigurationPopover>
          <InlineConfigurationPopover.Anchor>
            <div data-offscreen="">
              <InlineConfigurationPopover.Trigger aria-label="Edit parameter Blog post">
                Edit
              </InlineConfigurationPopover.Trigger>
            </div>
          </InlineConfigurationPopover.Anchor>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Header title="Blog post" />
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>,
      );

      await user.click(getTrigger());
      await settle();

      const popover = screen.getByTestId('cf-ui-inline-configuration-popover');
      await waitFor(() =>
        expect(popover).toHaveAttribute('data-anchor-hidden', 'true'),
      );
      expect(queryDialog()).not.toBeInTheDocument();
    });

    it('limits the height to the space in the viewport', async () => {
      const user = userEvent.setup();
      render(<Example />);

      const dialog = await openWithClick(user);
      await waitFor(() => expect(dialog.style.maxHeight).toMatch(/px$/));
    });
  });

  describe('dragging', () => {
    const getHandle = () =>
      screen.getByRole('button', { name: 'Move Blog post settings' });
    /**
     * Drags with the pointer. After a drag, dnd-kit swallows clicks for 50ms
     * (browsers fire one after pointerup), so wait that out before the test
     * clicks again.
     */
    const pointerDrag = async (
      element: HTMLElement,
      to: { x: number; y: number },
    ) => {
      const from = { x: 10, y: 10 };
      fireEvent.pointerDown(element, {
        isPrimary: true,
        button: 0,
        clientX: from.x,
        clientY: from.y,
      });
      // The first move activates the drag (after 4px), the next one moves it
      fireEvent.pointerMove(document, {
        isPrimary: true,
        clientX: from.x + 5,
        clientY: from.y + 5,
      });
      fireEvent.pointerMove(document, {
        isPrimary: true,
        clientX: to.x,
        clientY: to.y,
      });
      await settle();
      const transform = getDialog().style.transform;
      fireEvent.pointerUp(document, {
        isPrimary: true,
        clientX: to.x,
        clientY: to.y,
      });
      fireEvent.click(element);
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 60));
      });
      return transform;
    };
    /** dnd-kit swallows clicks for 50ms after a pointer drag ends */
    const waitOutClickGuard = () =>
      act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 60));
      });
    const getPosition = (element: HTMLElement) => ({
      left: Number.parseFloat(element.style.left),
      top: Number.parseFloat(element.style.top),
    });

    it('renders an F36 DragHandle with a meaningful name', async () => {
      const user = userEvent.setup();
      render(<Example isDraggable />);

      await openWithClick(user);

      const handle = getHandle();
      expect(handle).toHaveAttribute('aria-roledescription', 'draggable');
      expect(handle).toHaveAccessibleDescription(
        expect.stringContaining('Press Space or Enter to pick up'),
      );
    });

    it('has no drag handle when isDraggable is false', async () => {
      const user = userEvent.setup();
      render(<Example />);

      await openWithClick(user);
      expect(
        screen.queryByRole('button', { name: 'Move Blog post settings' }),
      ).not.toBeInTheDocument();
    });

    it('moves with the keyboard: Space picks up, arrows move 16px or 64px with Shift, Space drops', async () => {
      const user = userEvent.setup();
      render(<Example isDraggable />);

      const dialog = await openWithClick(user);
      const start = getPosition(dialog);

      getHandle().focus();
      await user.keyboard(' ');
      await settle();
      expect(dialog).toHaveAttribute('data-state', 'dragging');
      // The trigger stays active while the popover is dragged
      expect(getTrigger()).toHaveAttribute('data-state', 'on');
      expect(getTrigger()).toHaveAttribute('aria-expanded', 'true');

      await user.keyboard('{ArrowRight}');
      await waitFor(() =>
        expect(dialog.style.transform).toBe('translate3d(16px, 0px, 0)'),
      );

      await user.keyboard('{Shift>}{ArrowDown}{/Shift}');
      await waitFor(() =>
        expect(dialog.style.transform).toBe('translate3d(16px, 64px, 0)'),
      );

      await user.keyboard(' ');
      await settle();

      expect(dialog).not.toHaveAttribute('data-state');
      expect(dialog.style.transform).toBe('');
      await waitFor(() =>
        expect(getPosition(dialog)).toEqual({
          left: start.left + 16,
          top: start.top + 64,
        }),
      );
      expect(getDialog()).toBeInTheDocument();
      expect(getTrigger()).toHaveAttribute('data-state', 'on');
    });

    it('cancels a keyboard drag with Escape without closing the popover', async () => {
      const user = userEvent.setup();
      const pageListener = vi.fn();
      document.addEventListener('keydown', pageListener);
      render(<Example isDraggable />);

      const dialog = await openWithClick(user);
      const start = getPosition(dialog);

      getHandle().focus();
      await user.keyboard(' ');
      await settle();
      await user.keyboard('{ArrowRight}');
      await user.keyboard('{Escape}');
      await settle();

      expect(getDialog()).toBeInTheDocument();
      expect(dialog).not.toHaveAttribute('data-state');
      expect(getPosition(dialog)).toEqual(start);
      expect(pageListener).not.toHaveBeenCalledWith(
        expect.objectContaining({ key: 'Escape' }),
      );
      document.removeEventListener('keydown', pageListener);

      // The next Escape closes the popover
      await user.keyboard('{Escape}');
      expect(queryDialog()).not.toBeInTheDocument();
    });

    it('moves with the pointer from the header and resets when it closes', async () => {
      const user = userEvent.setup();
      render(<Example isDraggable />);

      const dialog = await openWithClick(user);
      const start = getPosition(dialog);

      const transform = await pointerDrag(
        screen.getByTestId('cf-ui-inline-configuration-popover-header'),
        { x: 60, y: 40 },
      );
      expect(transform).toBe('translate3d(50px, 30px, 0)');

      await waitFor(() =>
        expect(getPosition(dialog)).toEqual({
          left: start.left + 50,
          top: start.top + 30,
        }),
      );
      expect(dialog.style.transform).toBe('');
      expect(getDialog()).toBeInTheDocument();

      await user.keyboard('{Escape}');
      expect(queryDialog()).not.toBeInTheDocument();

      const reopened = await openWithClick(user);
      await waitFor(() => expect(getPosition(reopened)).toEqual(start));
    });

    it('does not start a drag from controls in the header', async () => {
      const user = userEvent.setup();
      render(<Example isDraggable />);

      const dialog = await openWithClick(user);
      const close = screen.getByRole('button', {
        name: 'Close Blog post settings',
      });

      fireEvent.pointerDown(close, {
        isPrimary: true,
        button: 0,
        clientX: 10,
        clientY: 10,
      });
      fireEvent.pointerMove(document, {
        isPrimary: true,
        clientX: 60,
        clientY: 40,
      });
      await settle();

      expect(dialog).not.toHaveAttribute('data-state');
      expect(dialog.style.transform).toBe('');
      fireEvent.pointerUp(document, { isPrimary: true });
    });

    it('works inside a page-level DndContext without starting its drags', async () => {
      const user = userEvent.setup();
      const onOuterDragStart = vi.fn();

      function SortableRow() {
        const { attributes, listeners, setNodeRef, setActivatorNodeRef } =
          useDraggable({ id: 'outer-row' });
        return (
          <div ref={setNodeRef}>
            <button
              type="button"
              ref={setActivatorNodeRef}
              {...attributes}
              {...listeners}
            >
              Reorder Blog post
            </button>
            <Example isDraggable />
          </div>
        );
      }

      render(
        <DndContext onDragStart={onOuterDragStart}>
          <SortableRow />
        </DndContext>,
      );

      const dialog = await openWithClick(user);
      const start = getPosition(dialog);

      getHandle().focus();
      await user.keyboard(' ');
      await settle();
      await user.keyboard('{ArrowRight}');
      await user.keyboard(' ');
      await settle();

      await pointerDrag(
        screen.getByTestId('cf-ui-inline-configuration-popover-header'),
        {
          x: 60,
          y: 40,
        },
      );

      expect(onOuterDragStart).not.toHaveBeenCalled();
      await waitFor(() =>
        expect(getPosition(dialog)).toEqual({
          left: start.left + 16 + 50,
          top: start.top + 30,
        }),
      );
    });

    it('cancels a pointer drag with Escape without closing the popover or reaching page-level listeners', async () => {
      const user = userEvent.setup();
      const pageListener = vi.fn();
      document.addEventListener('keydown', pageListener);
      render(<Example isDraggable />);

      const dialog = await openWithClick(user);
      const handle = getHandle();
      fireEvent.pointerDown(handle, {
        isPrimary: true,
        button: 0,
        clientX: 10,
        clientY: 10,
      });
      fireEvent.pointerMove(document, {
        isPrimary: true,
        clientX: 20,
        clientY: 20,
      });
      await settle();
      expect(dialog).toHaveAttribute('data-state', 'dragging');

      fireEvent.keyDown(handle, { key: 'Escape', code: 'Escape' });
      await settle();

      expect(getDialog()).toBeInTheDocument();
      expect(dialog).not.toHaveAttribute('data-state');
      expect(pageListener).not.toHaveBeenCalledWith(
        expect.objectContaining({ key: 'Escape' }),
      );
      document.removeEventListener('keydown', pageListener);
      await waitOutClickGuard();
    });

    it('gives key instructions only for keyboard drags', async () => {
      const user = userEvent.setup();
      render(<Example isDraggable />);

      const dialog = await openWithClick(user);
      const getLiveRegion = () =>
        dialog.querySelector('[aria-live="assertive"]') as HTMLElement;

      fireEvent.pointerDown(
        screen.getByTestId('cf-ui-inline-configuration-popover-header'),
        {
          isPrimary: true,
          button: 0,
          clientX: 10,
          clientY: 10,
        },
      );
      fireEvent.pointerMove(document, {
        isPrimary: true,
        clientX: 20,
        clientY: 20,
      });
      await settle();
      expect(getLiveRegion()).toHaveTextContent(
        'Picked up Blog post settings.',
      );
      expect(getLiveRegion()).not.toHaveTextContent('arrow keys');
      fireEvent.pointerUp(document, {
        isPrimary: true,
        clientX: 20,
        clientY: 20,
      });
      await waitOutClickGuard();

      getHandle().focus();
      await user.keyboard(' ');
      await settle();
      expect(getLiveRegion()).toHaveTextContent(
        'Use the arrow keys to move, Space to drop, Escape to cancel.',
      );
      await user.keyboard(' ');
      await settle();
      await waitOutClickGuard();
    });

    it('limits the height to the space left where it was dragged to', async () => {
      const user = userEvent.setup();
      render(<Example isDraggable />);

      const dialog = await openWithClick(user);
      await waitFor(() => expect(dialog.style.maxHeight).toMatch(/px$/));
      const before = Number.parseFloat(dialog.style.maxHeight);

      await pointerDrag(
        screen.getByTestId('cf-ui-inline-configuration-popover-header'),
        {
          x: 10,
          y: 410,
        },
      );

      await waitFor(() =>
        expect(Number.parseFloat(dialog.style.maxHeight)).toBeLessThan(before),
      );
      // Viewport 768px, dragged from top 100px to 500px, 16px padding
      expect(dialog.style.maxHeight).toBe('252px');
    });
  });

  describe('while the anchor is scrolled out of view', () => {
    function ScrollingList(props: Partial<InlineConfigurationPopoverProps>) {
      return (
        <>
          <InlineConfigurationPopover {...props}>
            <InlineConfigurationPopover.Anchor>
              <div data-test-id="row">
                <InlineConfigurationPopover.Trigger aria-label="Edit parameter Blog post">
                  Edit
                </InlineConfigurationPopover.Trigger>
              </div>
            </InlineConfigurationPopover.Anchor>
            <InlineConfigurationPopover.Content>
              <InlineConfigurationPopover.Header title="Blog post" />
              <InlineConfigurationPopover.Body>
                <Button size="small">Add to path</Button>
                <Button size="small">Select content manually</Button>
              </InlineConfigurationPopover.Body>
            </InlineConfigurationPopover.Content>
          </InlineConfigurationPopover>
          <button type="button">Next row</button>
        </>
      );
    }

    const scrollRow = async (isOutOfView: boolean) => {
      screen.getByTestId('row').toggleAttribute('data-offscreen', isOutOfView);
      fireEvent.scroll(window);
      await settle();
    };
    const getPopover = () =>
      screen.getByTestId('cf-ui-inline-configuration-popover');

    it('stops being modal: focus goes to the trigger and the page is exposed', async () => {
      const user = userEvent.setup();
      const { container } = render(<ScrollingList />);

      await openWithClick(user);
      expect(container).toHaveAttribute('aria-hidden', 'true');

      await scrollRow(true);

      expect(getPopover()).toHaveAttribute('data-anchor-hidden', 'true');
      expect(container).not.toHaveAttribute('aria-hidden');
      await waitFor(() => expect(getTrigger()).toHaveFocus());
      expect(
        screen.getByRole('button', { name: 'Next row' }),
      ).toBeInTheDocument();
    });

    it('moves focus back into the popover when the anchor returns', async () => {
      const user = userEvent.setup();
      const { container } = render(<ScrollingList />);

      await openWithClick(user);
      screen.getByRole('button', { name: 'Select content manually' }).focus();

      await scrollRow(true);
      await waitFor(() => expect(getTrigger()).toHaveFocus());

      await scrollRow(false);
      expect(getPopover()).not.toHaveAttribute('data-anchor-hidden');
      await waitFor(() =>
        expect(
          screen.getByRole('button', { name: 'Select content manually' }),
        ).toHaveFocus(),
      );
      expect(container).toHaveAttribute('aria-hidden', 'true');
    });

    it('closes when focus moves elsewhere on the page', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(<ScrollingList onClose={onClose} />);

      await openWithClick(user);
      await scrollRow(true);
      await waitFor(() => expect(getTrigger()).toHaveFocus());

      await user.tab();

      expect(screen.getByRole('button', { name: 'Next row' })).toHaveFocus();
      expect(onClose).toHaveBeenCalledWith('focus-out');
      expect(
        screen.queryByTestId('cf-ui-inline-configuration-popover'),
      ).not.toBeInTheDocument();
    });

    it('closes with Escape on the trigger without reaching page-level listeners', async () => {
      const user = userEvent.setup();
      const pageListener = vi.fn();
      document.addEventListener('keydown', pageListener);
      render(<ScrollingList />);

      await openWithClick(user);
      await scrollRow(true);
      await waitFor(() => expect(getTrigger()).toHaveFocus());

      await user.keyboard('{Escape}');

      expect(
        screen.queryByTestId('cf-ui-inline-configuration-popover'),
      ).not.toBeInTheDocument();
      expect(pageListener).not.toHaveBeenCalledWith(
        expect.objectContaining({ key: 'Escape' }),
      );
      document.removeEventListener('keydown', pageListener);
    });
  });

  describe('initial focus on elements that cannot take focus', () => {
    it('skips a field in a disabled fieldset', async () => {
      const user = userEvent.setup();
      render(
        <Example
          body={
            <>
              <fieldset disabled>
                <input aria-label="Locked" />
              </fieldset>
              <Button size="small">Unlock</Button>
            </>
          }
        />,
      );

      await user.click(getTrigger());
      await settle();

      await waitFor(() =>
        expect(screen.getByRole('button', { name: 'Unlock' })).toHaveFocus(),
      );
    });

    it('falls back when initialFocusRef points at a disabled element', async () => {
      const user = userEvent.setup();

      function WithDisabledInitialFocus() {
        const ref = React.useRef<HTMLInputElement>(null);
        return (
          <Example
            initialFocusRef={ref}
            body={
              <>
                <input aria-label="Locked" disabled ref={ref} />
                <Button size="small">First enabled</Button>
              </>
            }
          />
        );
      }

      render(<WithDisabledInitialFocus />);
      await user.click(getTrigger());
      await settle();

      await waitFor(() =>
        expect(
          screen.getByRole('button', { name: 'First enabled' }),
        ).toHaveFocus(),
      );
    });

    it('focuses the dialog when nothing in the body can take focus', async () => {
      const user = userEvent.setup();
      render(
        <Example
          body={
            <fieldset disabled>
              <input aria-label="Locked" />
            </fieldset>
          }
        />,
      );

      await user.click(getTrigger());
      await settle();

      await waitFor(() => expect(getDialog()).toHaveFocus());
    });
  });

  describe('with a Tooltip', () => {
    it('keeps the ARIA on the button when the Tooltip is around the trigger', async () => {
      const user = userEvent.setup();
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(
        <InlineConfigurationPopover>
          <Tooltip content="Edit">
            <InlineConfigurationPopover.Trigger
              icon={<XIcon />}
              aria-label="Edit parameter Blog post"
            />
          </Tooltip>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Header title="Blog post" />
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>,
      );

      const trigger = getTrigger();
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-describedby');
      expect(trigger).not.toHaveAttribute('aria-pressed');

      await user.click(trigger);
      await settle();
      expect(getDialog()).toBeInTheDocument();
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(trigger).toHaveAttribute('data-state', 'on');
      expect(warn).not.toHaveBeenCalled();
    });

    it.each([
      ['the default wrapper', true],
      ['withTriggerWrapper={false}', false],
    ])(
      'keeps the summary in aria-describedby next to the Tooltip, with %s',
      async (_, withTriggerWrapper) => {
        render(
          <InlineConfigurationPopover>
            <span id="blog-post-summary">In path, Slug field</span>
            <Tooltip
              content="Where the value comes from"
              withTriggerWrapper={withTriggerWrapper}
              showDelay={0}
            >
              <InlineConfigurationPopover.Trigger
                aria-label="Edit parameter Blog post"
                describedBy="blog-post-summary"
              >
                Edit
              </InlineConfigurationPopover.Trigger>
            </Tooltip>
            <InlineConfigurationPopover.Content>
              <InlineConfigurationPopover.Header title="Blog post" />
            </InlineConfigurationPopover.Content>
          </InlineConfigurationPopover>,
        );

        const trigger = getTrigger();
        act(() => trigger.focus());
        const tooltip = await screen.findByRole('tooltip');
        expect(trigger.getAttribute('aria-describedby')?.split(' ')).toEqual([
          'blog-post-summary',
          tooltip.id,
        ]);
        expect(trigger).toHaveAccessibleDescription(
          'In path, Slug field Where the value comes from',
        );
      },
    );

    it('forwards the Tooltip props and ref with withTriggerWrapper={false}', async () => {
      const user = userEvent.setup();
      render(
        <InlineConfigurationPopover>
          <Tooltip content="Edit" withTriggerWrapper={false} showDelay={0}>
            <InlineConfigurationPopover.Trigger
              icon={<XIcon />}
              aria-label="Edit parameter Blog post"
            />
          </Tooltip>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Header title="Blog post" />
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>,
      );

      const trigger = getTrigger();
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');

      // The Tooltip's focus handler and ref reach the button
      act(() => trigger.focus());
      const tooltip = await screen.findByRole('tooltip');
      expect(tooltip).toHaveTextContent('Edit');
      expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);

      await user.click(trigger);
      await settle();
      expect(getDialog()).toBeInTheDocument();
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('development warnings for names', () => {
    it('warns when two triggers have the same name', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(
        <>
          {['Title', 'Limit'].map((name) => (
            <InlineConfigurationPopover key={name}>
              <InlineConfigurationPopover.Trigger aria-label="Edit parameter">
                Edit
              </InlineConfigurationPopover.Trigger>
              <InlineConfigurationPopover.Content />
            </InlineConfigurationPopover>
          ))}
        </>,
      );

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining(
          'more than one trigger is named "Edit parameter"',
        ),
      );
    });

    it('does not warn for a single page-level "Settings" trigger', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(
        <InlineConfigurationPopover>
          <InlineConfigurationPopover.Trigger aria-label="Settings">
            Settings
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content />
        </InlineConfigurationPopover>,
      );

      expect(warn).not.toHaveBeenCalled();
    });

    it('warns when the dialog has no name', async () => {
      const user = userEvent.setup();
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(
        <InlineConfigurationPopover>
          <InlineConfigurationPopover.Trigger aria-label="Edit parameter Blog post">
            Edit
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Body>
              <Button size="small">Add to path</Button>
            </InlineConfigurationPopover.Body>
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>,
      );

      await user.click(getTrigger());
      await settle();

      expect(getDialog()).toHaveAccessibleName('');
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('the dialog has no accessible name'),
      );
    });

    it('does not warn about the dialog name with a header or aria-label', async () => {
      const user = userEvent.setup();
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(
        <>
          <Example />
          <InlineConfigurationPopover>
            <InlineConfigurationPopover.Trigger aria-label="Edit parameter Limit">
              Edit
            </InlineConfigurationPopover.Trigger>
            <InlineConfigurationPopover.Content aria-label="Limit settings">
              <InlineConfigurationPopover.Body>
                <Button size="small">Clear</Button>
              </InlineConfigurationPopover.Body>
            </InlineConfigurationPopover.Content>
          </InlineConfigurationPopover>
        </>,
      );

      await openWithClick(user);
      await user.keyboard('{Escape}');
      await user.click(
        screen.getByRole('button', { name: 'Edit parameter Limit' }),
      );
      await settle();

      expect(getDialog()).toHaveAccessibleName('Limit settings');
      expect(warn).not.toHaveBeenCalled();
    });
  });

  describe('open state callbacks', () => {
    it('does not call onClose when the parent keeps it open, and close() does nothing while closed', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      let closeFromOutside: () => void = () => {};

      function CloseRef() {
        const { close } = useInlineConfigurationPopover();
        closeFromOutside = close;
        return null;
      }

      render(
        <InlineConfigurationPopover onClose={onClose}>
          <CloseRef />
          <InlineConfigurationPopover.Trigger aria-label="Edit parameter Blog post">
            Edit
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Header title="Blog post" />
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>,
      );

      act(() => closeFromOutside());
      expect(onClose).not.toHaveBeenCalled();

      await openWithClick(user);
      act(() => closeFromOutside());
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenLastCalledWith('api');
    });

    it('asks to close with a reason when controlled, and the parent decides', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();

      function Controlled() {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <InlineConfigurationPopover
            isOpen={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={onClose}
          >
            <InlineConfigurationPopover.Trigger aria-label="Edit parameter Blog post">
              Edit
            </InlineConfigurationPopover.Trigger>
            <InlineConfigurationPopover.Content>
              <InlineConfigurationPopover.Header title="Blog post" />
            </InlineConfigurationPopover.Content>
          </InlineConfigurationPopover>
        );
      }

      render(<Controlled />);
      await openWithClick(user);
      await user.keyboard('{Escape}');

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenLastCalledWith('escape-key');
      expect(getDialog()).toBeInTheDocument();
    });
  });

  describe('nested inline Menu', () => {
    it('closes only the menu when Escape is pressed in a non-portaled Menu', async () => {
      const user = userEvent.setup();
      render(
        <Example
          body={
            <Menu usePortal={false}>
              <Menu.Trigger>
                <Button size="small">More actions</Button>
              </Menu.Trigger>
              <Menu.List>
                <Menu.Item>Duplicate</Menu.Item>
              </Menu.List>
            </Menu>
          }
        />,
      );

      await openWithClick(user);
      await user.click(screen.getByRole('button', { name: 'More actions' }));
      const item = await screen.findByRole('menuitem', { name: 'Duplicate' });
      await waitFor(() => expect(item).toHaveFocus());

      await user.keyboard('{Escape}');

      await waitFor(() =>
        expect(screen.queryByRole('menu')).not.toBeInTheDocument(),
      );
      expect(getDialog()).toBeInTheDocument();

      // The next Escape closes the popover
      await user.keyboard('{Escape}');
      expect(queryDialog()).not.toBeInTheDocument();
    });
  });

  describe('with a Modal', () => {
    it('opens a modal that is exposed and usable when the popover closes first', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();

      function WithModal() {
        const [isShown, setIsShown] = useState(false);

        function SelectManually() {
          const { close } = useInlineConfigurationPopover();
          return (
            <Button
              size="small"
              onClick={() => {
                close();
                setIsShown(true);
              }}
            >
              Select content manually
            </Button>
          );
        }

        return (
          <>
            <Example body={<SelectManually />} />
            <Modal
              isShown={isShown}
              onClose={() => setIsShown(false)}
              title="Select entry"
            >
              {() => (
                <Modal.Content>
                  <Button onClick={onSelect}>Entry A</Button>
                </Modal.Content>
              )}
            </Modal>
          </>
        );
      }

      render(<WithModal />);
      await openWithClick(user);
      await user.click(
        screen.getByRole('button', { name: 'Select content manually' }),
      );

      expect(
        screen.queryByTestId('cf-ui-inline-configuration-popover'),
      ).not.toBeInTheDocument();
      const entry = await screen.findByRole('button', { name: 'Entry A' });
      expect(entry.closest('[aria-hidden="true"]')).toBeNull();
      await user.click(entry);
      expect(onSelect).toHaveBeenCalled();
    });
  });

  describe('announcements after the popover unmounts', () => {
    it('still announces when an action removes the last popover', async () => {
      const user = userEvent.setup();

      function RemoveButton({ onRemove }: { onRemove: () => void }) {
        const { close, announce } = useInlineConfigurationPopover();
        return (
          <Button
            size="small"
            onClick={() => {
              close();
              announce('Blog post removed');
              onRemove();
            }}
          >
            Remove
          </Button>
        );
      }

      function App() {
        const [isShown, setIsShown] = useState(true);
        return isShown ? (
          <Example body={<RemoveButton onRemove={() => setIsShown(false)} />} />
        ) : null;
      }

      render(<App />);
      await openWithClick(user);
      await user.click(screen.getByRole('button', { name: 'Remove' }));

      expect(
        screen.queryByRole('button', { name: 'Outside', hidden: true }),
      ).not.toBeInTheDocument();
      await waitFor(() =>
        expect(screen.getByTestId(ANNOUNCER_TEST_ID)).toHaveTextContent(
          'Blog post removed',
        ),
      );
    });
  });

  describe('header', () => {
    it('renders the title as a heading, spreads props and forwards its ref', async () => {
      const user = userEvent.setup();
      const ref = React.createRef<HTMLDivElement>();
      render(
        <InlineConfigurationPopover>
          <InlineConfigurationPopover.Trigger aria-label="Edit parameter Blog post">
            Edit
          </InlineConfigurationPopover.Trigger>
          <InlineConfigurationPopover.Content>
            <InlineConfigurationPopover.Header
              title="Blog post"
              data-foo="x"
              ref={ref}
            />
          </InlineConfigurationPopover.Content>
        </InlineConfigurationPopover>,
      );

      await user.click(getTrigger());
      await settle();

      const header = screen.getByTestId(
        'cf-ui-inline-configuration-popover-header',
      );
      expect(header).toHaveAttribute('data-foo', 'x');
      expect(ref.current).toBe(header);
      expect(
        within(getDialog()).getByRole('heading', {
          level: 2,
          name: 'Blog post',
        }),
      ).toBeInTheDocument();
    });
  });
});
