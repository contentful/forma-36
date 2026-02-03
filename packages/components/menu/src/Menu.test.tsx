import React from 'react';
import {
  render,
  act,
  waitFor,
  fireEvent,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@contentful/f36-components';

import { Menu } from '.';

describe('Menu', function () {
  it('renders the component', async () => {
    render(
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

    const trigger = screen.getByRole('button');

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    });
  });

  it('opens and closes the Menu', async () => {
    const user = userEvent.setup();
    render(
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

    const trigger = screen.getByRole('button');
    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    // open
    await user.click(trigger);
    await waitFor(() => {
      expect(screen.queryByRole('menu')).toBeInTheDocument();
    });

    // close
    await user.click(trigger);
    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('renders open by default', async () => {
    render(
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

    expect(await screen.findByRole('menu')).toBeInTheDocument();
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  it('renders the components with an additional class names', async () => {
    render(
      <Menu defaultIsOpen>
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

    expect(await screen.findByTestId('menu')).toBeInTheDocument();

    const trigger = screen.getByTestId('trigger');
    expect(trigger).toHaveClass('trigger');

    const menu = screen.getByTestId('menu');
    expect(menu).toHaveClass('menu');

    const menuItem = screen.getByTestId('menu-item');
    expect(menuItem).toHaveClass('menu-item');
  });

  describe('controlled menu', () => {
    it('does call onClose when selecting list item', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();

      render(
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
        expect(screen.getByRole('menu')).toBeInTheDocument();
      });

      await user.click(screen.getByTestId('itemToClick'));
      expect(handleClose).toHaveBeenCalled();
    });

    it('does NOT call onClose when selecting list item and closeOnSelect prop is false', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();

      render(
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

      expect(await screen.findByRole('menu')).toBeInTheDocument();

      await user.click(screen.getByTestId('itemToClick'));
      expect(handleClose).not.toHaveBeenCalled();
    });

    it('should call onClose when clicking outside of the menu', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();
      const Controlled = () => {
        const [isOpen, setIsOpen] = React.useState(true);
        return (
          <>
            <Button testId="buttonToClick" />
            <Menu
              isOpen={isOpen}
              onClose={() => {
                handleClose();
                setIsOpen(false);
              }}
            >
              <Menu.Trigger>
                <Button>Toggle</Button>
              </Menu.Trigger>
              <Menu.List>
                <Menu.Item>Create an entry</Menu.Item>
                <Menu.Item>Remove an entry</Menu.Item>
                <Menu.Item>Embed existing entry</Menu.Item>
              </Menu.List>
            </Menu>
          </>
        );
      };
      await act(async () => render(<Controlled />));

      expect(screen.queryByRole('menu')).toBeInTheDocument();

      await user.click(screen.getByTestId('buttonToClick'));
      expect(handleClose).toHaveBeenCalled();
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('should close when clicking outside of the menu with all items disabled', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();

      render(
        <>
          <Button testId="buttonToClick" />
          <Menu isOpen={true} onClose={handleClose}>
            <Menu.Trigger>
              <Button>Toggle</Button>
            </Menu.Trigger>
            <Menu.List>
              <Menu.Item isDisabled>Create an entry</Menu.Item>
              <Menu.Item isDisabled>Remove an entry</Menu.Item>
              <Menu.Item isDisabled>Embed existing entry</Menu.Item>
            </Menu.List>
          </Menu>
        </>,
      );

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument();
      });

      await user.click(screen.getByTestId('buttonToClick'));
      expect(handleClose).toHaveBeenCalled();
    });

    it('calls onOpen callback when opening the menu', async () => {
      const user = userEvent.setup();
      const handleOpen = jest.fn();
      const Controlled = () => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
          <Menu
            isOpen={isOpen}
            onOpen={() => {
              setIsOpen(true);
              handleOpen();
            }}
            onClose={() => setIsOpen(false)}
          >
            <Menu.Trigger>
              <Button testId="toggleButton">Toggle</Button>
            </Menu.Trigger>
            <Menu.List>
              <Menu.Item>Create an entry</Menu.Item>
              <Menu.Item>Remove an entry</Menu.Item>
              <Menu.Item>Embed existing entry</Menu.Item>
            </Menu.List>
          </Menu>
        );
      };

      await act(async () => render(<Controlled />));
      await waitFor(() => {
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      });
      // open the menu
      await user.click(screen.getByTestId('toggleButton'));
      await waitFor(() => {
        expect(screen.queryByRole('menu')).toBeInTheDocument();
      });
      // close menu again
      await user.click(screen.getByTestId('toggleButton'));
      await waitFor(() => {
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      });
      expect(handleOpen).toHaveBeenCalledTimes(1);
    });
  });

  describe('Menu focus behaviour', function () {
    it('should focus FIRST item when menu is open', async () => {
      render(
        <Menu defaultIsOpen>
          <Menu.Trigger>
            <Button>Toggle</Button>
          </Menu.Trigger>
          <Menu.List>
            <Menu.Item testId="first-element">Create an entry</Menu.Item>
            <Menu.Item>Remove an entry</Menu.Item>
            <Menu.Item>Embed existing entry</Menu.Item>
          </Menu.List>
        </Menu>,
      );

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument();

        expect(screen.getByTestId('first-element')).toHaveFocus();
      });
    });

    it('should focus NEXT/PREVIOUS item when ArrowDown/ArrowUp clicked accordingly', async () => {
      render(
        <Menu defaultIsOpen>
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
        expect(document.activeElement).toBe(screen.getByTestId('first-item'));
      });

      fireEvent.keyDown(document.activeElement, {
        key: 'ArrowDown',
      });
      await waitFor(() => {
        expect(document.activeElement).toBe(screen.getByTestId('second-item'));
      });

      fireEvent.keyDown(document.activeElement, {
        key: 'ArrowUp',
      });
      await waitFor(() => {
        expect(document.activeElement).toBe(screen.getByTestId('first-item'));
      });
    });

    it('should focus FIRST item when ArrowDown clicked and focus was on the last item', async () => {
      const user = userEvent.setup();
      render(
        <Menu defaultIsOpen>
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
        expect(document.activeElement).toBe(screen.getByTestId('first-item'));
      });

      user.keyboard('{ArrowDown}');
      user.keyboard('{ArrowDown}');
      await waitFor(() => {
        expect(document.activeElement).toBe(screen.getByTestId('third-item'));
      });

      user.keyboard('{ArrowDown}');
      await waitFor(() => {
        expect(document.activeElement).toBe(screen.getByTestId('first-item'));
      });
    });

    it('should focus LAST item when ArrowUp clicked and focus was on the first item', async () => {
      render(
        <Menu defaultIsOpen>
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
        expect(document.activeElement).toBe(screen.getByTestId('first-item'));
      });

      fireEvent.keyDown(document.activeElement, {
        key: 'ArrowUp',
      });
      await waitFor(() => {
        expect(document.activeElement).toBe(screen.getByTestId('third-item'));
      });
    });

    it('should focus item if isInitiallyFocused prop passed', async () => {
      render(
        <Menu defaultIsOpen>
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
        expect(document.activeElement).toBe(screen.getByTestId('second-item'));
      });
    });
  });

  describe('Menu.Submenu', function () {
    const renderMenuWithSubMenu = () =>
      render(
        <Menu defaultIsOpen>
          <Menu.Trigger>
            <Button>Toggle</Button>
          </Menu.Trigger>
          <Menu.List testId="menu">
            <Menu.Item testId="first-item">Create an entry</Menu.Item>
            <Menu>
              <Menu.SubmenuTrigger testId="second-item">
                Remove an entry
              </Menu.SubmenuTrigger>
              <Menu.List testId="submenu">
                <Menu.Item testId="submenu-item-1">Sub item 1</Menu.Item>
                <Menu.Item testId="submenu-item-2">Sub item 2</Menu.Item>
                <Menu.Item testId="submenu-item-3">Sub item 3</Menu.Item>
              </Menu.List>
            </Menu>
            <Menu.Item testId="third-item">Embed existing entry</Menu.Item>
          </Menu.List>
        </Menu>,
      );

    it('should open submenu if item with submenu clicked', async () => {
      const user = userEvent.setup();
      renderMenuWithSubMenu();

      await waitFor(() => {
        expect(screen.queryByTestId('menu')).toBeInTheDocument();
        expect(screen.queryByTestId('submenu')).not.toBeInTheDocument();
      });

      await user.hover(screen.queryByTestId('second-item'));

      expect(await screen.findByTestId('submenu')).toBeInTheDocument();
    });

    it('should open submenu if item with submenu is hovered and close when its unhovered', async () => {
      const user = userEvent.setup();
      renderMenuWithSubMenu();

      await waitFor(() => {
        expect(screen.queryByTestId('menu')).toBeInTheDocument();
        expect(screen.queryByTestId('submenu')).not.toBeInTheDocument();
      });

      await user.hover(screen.queryByTestId('second-item'));

      await waitFor(() => {
        expect(screen.queryByTestId('submenu')).toBeInTheDocument();
      });

      await user.unhover(screen.queryByTestId('second-item'));

      await waitFor(() => {
        expect(screen.queryByTestId('submenu')).not.toBeInTheDocument();
      });
    });

    it('should open submenu if ArrowRight clicked on item with submenu', async () => {
      renderMenuWithSubMenu();

      await waitFor(() => {
        expect(screen.queryByTestId('menu')).toBeInTheDocument();
        expect(screen.queryByTestId('submenu')).not.toBeInTheDocument();
      });

      await fireEvent.keyDown(screen.queryByTestId('second-item'), {
        key: 'ArrowRight',
      });

      await waitFor(() => {
        expect(screen.queryByTestId('submenu')).toBeInTheDocument();
      });
    });

    it('should close submenu if ArrowLeft clicked on any item in submenu', async () => {
      renderMenuWithSubMenu();

      await waitFor(() => {
        expect(screen.queryByTestId('menu')).toBeInTheDocument();
      });

      // open a submenu first

      fireEvent.keyDown(screen.queryByTestId('second-item'), {
        key: 'ArrowRight',
      });

      // verify it's open
      await waitFor(() => {
        expect(screen.queryByTestId('submenu')).toBeInTheDocument();
      });

      fireEvent.keyDown(screen.queryByTestId('submenu-item-2'), {
        key: 'ArrowLeft',
      });

      await waitFor(() => {
        expect(screen.queryByTestId('submenu')).not.toBeInTheDocument();
      });
    });
  });
});
