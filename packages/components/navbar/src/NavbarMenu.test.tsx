import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuestionIcon } from '@contentful/f36-icons';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';
import { Navbar } from './CompoundNavbar';

describe('Navbar menu triggers', () => {
  it.each(['item', 'account'] as const)(
    'puts menu attributes on the %s button and supports keyboard interaction',
    async (variant) => {
      const user = userEvent.setup();
      const ref = React.createRef<HTMLButtonElement>();
      const handleClick = vi.fn();
      const { container } = render(
        variant === 'item' ? (
          <Navbar.Item
            label="Help menu"
            icon={<QuestionIcon />}
            ref={ref}
            onClick={handleClick}
          >
            <Navbar.MenuItem title="Help center" />
          </Navbar.Item>
        ) : (
          <Navbar.Account username="Test User" ref={ref} onClick={handleClick}>
            <Navbar.MenuItem title="Help center" />
          </Navbar.Account>
        ),
      );
      const trigger = screen.getByRole('button', {
        name: variant === 'item' ? 'Help menu' : 'Account menu',
      });

      expect(ref.current).toBe(trigger);
      expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      await user.hover(trigger);
      expect(await screen.findByRole('tooltip')).toHaveTextContent(
        variant === 'item' ? 'Help menu' : 'Account menu',
      );
      await user.unhover(trigger);
      await expectNoA11yViolations(container);
      trigger.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(await screen.findByRole('menu')).toBeInTheDocument();
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      await waitFor(() => expect(screen.getByRole('menuitem')).toHaveFocus());
      await user.keyboard('{Escape}');
      await waitFor(() =>
        expect(screen.queryByRole('menu')).not.toBeInTheDocument(),
      );
      expect(trigger).toHaveFocus();
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      await user.click(trigger);
      expect(await screen.findByRole('menu')).toBeInTheDocument();
      await user.click(trigger);
      await waitFor(() =>
        expect(screen.queryByRole('menu')).not.toBeInTheDocument(),
      );
    },
  );
});
