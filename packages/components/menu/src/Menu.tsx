import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { mergeRefs, useId, useControllableState } from '@contentful/f36-core';
import { Popover, type PopoverProps } from '@contentful/f36-popover';

import { useArrowKeyNavigation } from './useArrowKeyNavigation';
import { MenuContextProvider, MenuContextType } from './MenuContext';

const MENU_ITEMS_SELECTOR = '[role="menuitem"]:not(:disabled)';

export interface MenuProps
  extends Omit<PopoverProps, 'autoFocus' | 'id' | 'closeOnBlur'> {
  /**
   * By default, the Menu is uncontrolled (manage it's expanded state by itself)
   * But you can make it controlled by providing boolean (true/false)
   */
  isOpen?: boolean;

  /**
   * If `true`, the Menu will be initially opened.
   */
  defaultIsOpen?: boolean;

  /**
   * Callback fired when the Menu opens
   */
  onOpen?: () => void;

  /**
   * Callback fired when the Menu closes
   */
  onClose?: () => void;

  /**
   * If `true`, the Menu will close when a menu item is
   * clicked
   *
   * Note: This prop will be propagated to all submenus,
   * unless you will override it with props on submenu itself
   *
   * @default true
   */
  closeOnSelect?: boolean;

  /**
   * If true, the menu will close when you blur out it by clicking outside
   *
   * Note: This prop will be propagated to all submenus,
   * unless you will override it with props on submenu itself
   *
   * @default true
   */
  closeOnBlur?: boolean;

  /**
   * If true, the menu will close when you hit the Esc key
   *
   * Note: This prop will be propagated to all submenus,
   * unless you will override it with props on submenu itself
   *
   * @default true
   */
  closeOnEsc?: boolean;
}

export function Menu(props: MenuProps) {
  const {
    closeOnSelect = true,
    closeOnBlur = true,
    closeOnEsc = true,
    children,
    onOpen,
    ...otherProps
  } = props;
  const { isOpen, handleOpen, handleClose, isControlled } =
    useControllableState({
      isOpen: props.isOpen,
      defaultIsOpen: props.defaultIsOpen,
      onOpen,
      onClose: props.onClose,
    });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuListRef = useRef<HTMLDivElement>(null);

  const menuId = useId(null, 'menu');

  const { focusedIndex, handleArrowsKeyDown, setFocusedIndex } =
    useArrowKeyNavigation({
      itemsContainerRef: menuListRef,
      itemsSelector: MENU_ITEMS_SELECTOR,
    });

  useEffect(() => {
    if (isOpen && menuListRef.current) {
      const menuItems =
        menuListRef.current.querySelectorAll<HTMLElement>(MENU_ITEMS_SELECTOR);

      if (menuItems.length > 0 && focusedIndex < menuItems.length) {
        // timeout trick to prevent scroll from jumping
        // when the popover is not positioned correctly yet in the opening phase
        setTimeout(() => {
          menuItems[focusedIndex].focus({ preventScroll: false });
        }, 0);
      } else {
        setTimeout(() => {
          menuListRef.current?.focus({ preventScroll: false });
        }, 0);
      }
    }
  }, [isOpen, focusedIndex]);

  const focusMenuItem = useCallback(
    (item: HTMLElement) => {
      const menuItems =
        menuListRef.current.querySelectorAll(MENU_ITEMS_SELECTOR);

      const itemIndex = [...menuItems].findIndex(
        (menuItem) => item === menuItem,
      );

      if (itemIndex !== -1) {
        setFocusedIndex(itemIndex);
      }
    },
    [setFocusedIndex],
  );

  const closeAndFocusTrigger = useCallback(() => {
    handleClose();
    triggerRef.current?.focus({ preventScroll: true });
  }, [handleClose]);

  const handleMenuListKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        closeAndFocusTrigger();
        return;
      }

      // we don't want to propagate other keydown events except `Tab`
      event.stopPropagation();

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        closeAndFocusTrigger();
        return;
      }

      handleArrowsKeyDown(event);
    },
    [closeAndFocusTrigger, handleArrowsKeyDown],
  );

  // Safari has an issue with the relatedTarget that we use on the onBlur for menuListProps,
  // which was causing the menu to close and reopen when clicking on the trigger.
  // We will use the isMouseDown to prevent triggering blur in the cases where the user clicks on the trigger.
  const isMouseDown = useRef<Boolean>(false);

  const contextValue: MenuContextType = useMemo(
    () => ({
      isOpen,
      menuId,
      focusMenuItem,
      getTriggerProps: (_props = {}, _ref = null) => ({
        onMouseDown: (event) => {
          isMouseDown.current = true;
          _props.onMouseDown?.(event);
        },
        onMouseUp: (event) => {
          isMouseDown.current = false;
          _props.onMouseUp?.(event);
        },
        onClick: (event) => {
          // if the user made component controlled by providing isOpen prop
          // but onOpen callback is not provided, we won't add toggle logic
          // to the trigger component. So they can make any toggle logic on their own.
          const isFullyControlled = isControlled && !onOpen;

          if (!isFullyControlled) {
            if (isOpen) {
              handleClose();
            } else {
              handleOpen();
            }
          }

          _props.onClick?.(event);
        },
        ref: mergeRefs(triggerRef, _ref),
      }),
      getMenuListProps: (_props = {}, _ref = null) => ({
        ref: mergeRefs(menuListRef, _ref),
        onKeyDown: (event) => {
          handleMenuListKeyDown(event);
          _props.onKeyDown?.(event);
        },
        onBlur: (event) => {
          _props.onBlur?.(event);

          if (!closeOnBlur) {
            return;
          }

          const activeElement = document.activeElement;
          const relatedTarget = event.relatedTarget || activeElement;

          const targetIsMenu =
            menuListRef.current === relatedTarget ||
            menuListRef.current?.contains(relatedTarget);
          const targetIsTrigger =
            triggerRef.current === relatedTarget ||
            triggerRef.current?.contains(relatedTarget) ||
            isMouseDown.current;
          const targetIsSubmenu =
            relatedTarget?.parentElement?.dataset.parentMenu === menuId;

          if (targetIsMenu || targetIsTrigger || targetIsSubmenu) {
            event.stopPropagation();
            return;
          }

          handleClose();
        },
      }),
      getMenuItemProps: (_props = {}) => ({
        onClick: (event) => {
          _props.onClick?.(event);

          const isSubmenuTrigger = Boolean(
            (event.target as HTMLElement).getAttribute('aria-haspopup'),
          );
          if (closeOnSelect && !isSubmenuTrigger) {
            closeAndFocusTrigger();
          }
        },
      }),
      propsToPropagateToSubmenus: {
        closeOnSelect,
        closeOnBlur,
        closeOnEsc,
      },
    }),
    [
      menuId,
      isOpen,
      handleMenuListKeyDown,
      closeOnSelect,
      handleClose,
      handleOpen,
      focusMenuItem,
      closeOnBlur,
      closeOnEsc,
      closeAndFocusTrigger,
      isControlled,
      onOpen,
    ],
  );

  return (
    <MenuContextProvider value={contextValue}>
      <Popover
        {...otherProps}
        isOpen={isOpen}
        onClose={handleClose}
        id={menuId}
        closeOnEsc={closeOnEsc}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={false}
        closeOnBlur={false}
      >
        {children}
      </Popover>
    </MenuContextProvider>
  );
}
