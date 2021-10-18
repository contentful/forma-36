import React from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Menu } from '../src';
import { Button } from '@contentful/f36-button';

describe('Menu', function () {
  it('renders the component', async () => {
    const { getByRole } = render(
      <Menu>
        <Menu.Trigger>
          <Button testId="trigger">Toggle</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>Create an entry</Menu.Item>
          <Menu.Item>Remove an entry</Menu.Item>
          <Menu.Item>Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>,
    );

    const trigger = getByRole('button');

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    });
  });

  it('renders open by default', async () => {
    const { getByRole, getByTestId } = render(
      <Menu defaultIsOpen>
        <Menu.Trigger>
          <Button testId="trigger">Toggle</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>Create an entry</Menu.Item>
          <Menu.Item>Remove an entry</Menu.Item>
          <Menu.Item>Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>,
    );

    await waitFor(() => {
      expect(getByRole('menu')).toBeInTheDocument();
    });
    expect(getByTestId('trigger')).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders the components with an additional class names', async () => {
    const { getByTestId } = render(
      <Menu isOpen={true}>
        <Menu.Trigger>
          <Button testId="trigger" className="trigger">
            Toggle
          </Button>
        </Menu.Trigger>
        <Menu.List testId="menu" className="menu">
          <Menu.Item testId="menu-item" className="menu-item">
            Create an entry
          </Menu.Item>
          <Menu.Item>Remove an entry</Menu.Item>
          <Menu.Item>Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>,
    );

    await waitFor(() => {
      expect(getByTestId('menu')).toBeInTheDocument();
    });

    const trigger = getByTestId('trigger');
    expect(trigger).toHaveClass('trigger');

    const menu = getByTestId('menu');
    expect(menu).toHaveClass('menu');

    const menuItem = getByTestId('menu-item');
    expect(menuItem).toHaveClass('menu-item');
  });

  it('do call onClose when selecting list item', async () => {
    const handleClose = jest.fn();

    const { getByRole, getByTestId } = render(
      <Menu isOpen={true} onClose={handleClose}>
        <Menu.Trigger>
          <Button>Toggle</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>Create an entry</Menu.Item>
          <Menu.Item testId="itemToClick">Remove an entry</Menu.Item>
          <Menu.Item>Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>,
    );

    await waitFor(() => {
      expect(getByRole('menu')).toBeInTheDocument();
    });

    userEvent.click(getByTestId('itemToClick'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('do NOT call onClose when selecting list item and closeOnSelect prop is false', async () => {
    const handleClose = jest.fn();

    const { getByTestId, getByRole } = render(
      <Menu isOpen={true} onClose={handleClose} closeOnSelect={false}>
        <Menu.Trigger>
          <Button>Toggle</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>Create an entry</Menu.Item>
          <Menu.Item testId="itemToClick">Remove an entry</Menu.Item>
          <Menu.Item>Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>,
    );

    await waitFor(() => {
      expect(getByRole('menu')).toBeInTheDocument();
    });

    userEvent.click(getByTestId('itemToClick'));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('should focus FIRST item when menu is open', async () => {
    const { getByTestId, getByRole } = render(
      <Menu isOpen={true}>
        <Menu.Trigger>
          <Button>Toggle</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item testId="first-item">Create an entry</Menu.Item>
          <Menu.Item>Remove an entry</Menu.Item>
          <Menu.Item>Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>,
    );

    await waitFor(() => {
      expect(getByRole('menu')).toBeInTheDocument();
    });

    expect(document.activeElement).toBe(getByTestId('first-item'));
  });

  it('should focus NEXT/PREVIOUS item when ArrowDown/ArrowUp clicked accordingly', async () => {
    const { getByTestId } = render(
      <Menu isOpen={true}>
        <Menu.Trigger>
          <Button>Toggle</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item testId="first-item">Create an entry</Menu.Item>
          <Menu.Item testId="second-item">Remove an entry</Menu.Item>
          <Menu.Item>Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>,
    );

    await waitFor(() => {
      expect(document.activeElement).toBe(getByTestId('first-item'));
    });

    fireEvent.keyDown(document.activeElement, {
      key: 'ArrowDown',
    });
    await waitFor(() => {
      expect(document.activeElement).toBe(getByTestId('second-item'));
    });

    fireEvent.keyDown(document.activeElement, {
      key: 'ArrowUp',
    });
    await waitFor(() => {
      expect(document.activeElement).toBe(getByTestId('first-item'));
    });
  });

  it('should focus FIRST item when ArrowDown clicked and focus was on the last item', async () => {
    const { getByTestId } = render(
      <Menu isOpen={true}>
        <Menu.Trigger>
          <Button>Toggle</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item testId="first-item">Create an entry</Menu.Item>
          <Menu.Item testId="second-item">Remove an entry</Menu.Item>
          <Menu.Item testId="third-item">Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>,
    );

    await waitFor(() => {
      expect(document.activeElement).toBe(getByTestId('first-item'));
    });

    fireEvent.keyDown(document.activeElement, {
      key: 'ArrowDown',
    });
    fireEvent.keyDown(document.activeElement, {
      key: 'ArrowDown',
    });
    await waitFor(() => {
      expect(document.activeElement).toBe(getByTestId('third-item'));
    });

    fireEvent.keyDown(document.activeElement, {
      key: 'ArrowDown',
    });
    await waitFor(() => {
      expect(document.activeElement).toBe(getByTestId('first-item'));
    });
  });

  it('should focus LAST item when ArrowUp clicked and focus was on the first item', async () => {
    const { getByTestId } = render(
      <Menu isOpen={true}>
        <Menu.Trigger>
          <Button>Toggle</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item testId="first-item">Create an entry</Menu.Item>
          <Menu.Item testId="second-item">Remove an entry</Menu.Item>
          <Menu.Item testId="third-item">Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>,
    );

    await waitFor(() => {
      expect(document.activeElement).toBe(getByTestId('first-item'));
    });

    fireEvent.keyDown(document.activeElement, {
      key: 'ArrowUp',
    });
    await waitFor(() => {
      expect(document.activeElement).toBe(getByTestId('third-item'));
    });
  });

  it('should focus item if isInitiallyFocused prop passed', async () => {
    const { getByTestId } = render(
      <Menu isOpen={true}>
        <Menu.Trigger>
          <Button>Toggle</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item testId="first-item">Create an entry</Menu.Item>
          <Menu.Item testId="second-item" isInitiallyFocused>
            Remove an entry
          </Menu.Item>
          <Menu.Item testId="third-item">Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>,
    );

    await waitFor(() => {
      expect(document.activeElement).toBe(getByTestId('second-item'));
    });
  });

  describe('Menu.Submenu', function () {
    const renderMenuWithSubMenu = () =>
      render(
        <Menu isOpen={true}>
          <Menu.Trigger>
            <Button>Toggle</Button>
          </Menu.Trigger>
          <Menu.List testId="menu">
            <Menu.Item testId="first-item">Create an entry</Menu.Item>
            <Menu.Submenu>
              <Menu.SubmenuTrigger testId="second-item">
                Remove an entry
              </Menu.SubmenuTrigger>
              <Menu.List testId="submenu">
                <Menu.Item testId="submenu-item-1">Sub item 1</Menu.Item>
                <Menu.Item testId="submenu-item-2">Sub item 2</Menu.Item>
                <Menu.Item testId="submenu-item-3">Sub item 3</Menu.Item>
              </Menu.List>
            </Menu.Submenu>
            <Menu.Item testId="third-item">Embed existing entry</Menu.Item>
          </Menu.List>
        </Menu>,
      );

    it('should open submenu if item with submenu clicked', async () => {
      const { getByTestId } = renderMenuWithSubMenu();

      await waitFor(() => {
        expect(getByTestId('menu')).toBeVisible();
        expect(getByTestId('submenu')).not.toBeVisible();
      });

      await act(async () => {
        userEvent.click(getByTestId('second-item'));
      });

      await waitFor(() => {
        expect(getByTestId('submenu')).toBeVisible();
      });
    });

    it('should open submenu if item with submenu is hovered and close when its unhovered', async () => {
      const { getByTestId } = renderMenuWithSubMenu();

      await waitFor(() => {
        expect(getByTestId('menu')).toBeVisible();
        expect(getByTestId('submenu')).not.toBeVisible();
      });

      await act(async () => {
        userEvent.hover(getByTestId('second-item'));
      });
      await waitFor(() => {
        expect(getByTestId('submenu')).toBeVisible();
      });

      await act(async () => {
        userEvent.unhover(getByTestId('second-item'));
      });
      await waitFor(() => {
        expect(getByTestId('submenu')).not.toBeVisible();
      });
    });

    it('should open submenu if ArrowRight clicked on item with submenu', async () => {
      const { getByTestId } = renderMenuWithSubMenu();

      await waitFor(() => {
        expect(getByTestId('menu')).toBeVisible();
        expect(getByTestId('submenu')).not.toBeVisible();
      });

      await act(async () => {
        fireEvent.keyDown(getByTestId('second-item'), {
          key: 'ArrowRight',
        });
      });
      await waitFor(() => {
        expect(getByTestId('submenu')).toBeVisible();
      });
    });

    it('should close submenu if ArrowLeft clicked on any item in submenu', async () => {
      const { getByTestId } = renderMenuWithSubMenu();

      await waitFor(() => {
        expect(getByTestId('menu')).toBeVisible();
        expect(getByTestId('submenu')).not.toBeVisible();
      });

      // open a submenu first
      await act(async () => {
        fireEvent.keyDown(getByTestId('second-item'), {
          key: 'ArrowRight',
        });
      });
      // verify it's open
      await waitFor(() => {
        expect(getByTestId('submenu')).toBeVisible();
      });

      await act(async () => {
        fireEvent.keyDown(getByTestId('submenu-item-2'), {
          key: 'ArrowLeft',
        });
      });
      await waitFor(() => {
        expect(getByTestId('submenu')).not.toBeVisible();
      });
    });
  });
});
