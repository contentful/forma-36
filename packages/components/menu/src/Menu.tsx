import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import { CommonProps, mergeRefs } from '@contentful/f36-core';
import { useArrowKeyNavigation } from '@contentful/f36-utils';
import { Popover, PopoverProps } from '@contentful/f36-popover';
import { MenuContextProvider, MenuContextType } from './MenuContext';

const MENU_ITEMS_SELECTOR = '[role="menuitem"]:not(:disabled)';

export interface MenuProps
  extends CommonProps,
    Omit<PopoverProps, 'autoFocus'> {
  /**
   * If `true`, the Menu will be opened in controlled mode.
   * By default the Menu is uncontrolled
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
   * @default true
   */
  closeOnSelect?: boolean;
}

export function Menu(props: MenuProps) {
  const { closeOnSelect = true } = props;
  const { isOpen, handleOpen, handleClose } = useMenuOpenState(props);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuListRef = useRef<HTMLDivElement>(null);

  const { focusedIndex, handleArrowsKeyDown } = useArrowKeyNavigation({
    itemsContainerRef: menuListRef,
    itemsSelector: MENU_ITEMS_SELECTOR,
  });

  useEffect(() => {
    if (isOpen && menuListRef.current) {
      const availableElements = menuListRef.current.querySelectorAll(
        MENU_ITEMS_SELECTOR,
      );

      if (
        availableElements.length > 0 &&
        focusedIndex < availableElements.length
      ) {
        (availableElements[focusedIndex] as HTMLElement).focus({
          preventScroll: false,
        });
      }
    }
  }, [isOpen, focusedIndex]);

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

      handleArrowsKeyDown(event);
    },
    [closeAndFocusTrigger, handleArrowsKeyDown],
  );

  const contextValue: MenuContextType = useMemo(
    () => ({
      getTriggerProps: (_props = {}, _ref = null) => ({
        onClick: (event) => {
          if (isOpen) {
            handleClose();
          } else {
            handleOpen();
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
      }),
      getMenuItemProps: (_props = {}) => ({
        onClick: (event) => {
          _props.onClick?.(event);
          if (closeOnSelect) {
            handleClose();
          }
        },
      }),
    }),
    [isOpen, handleMenuListKeyDown, closeOnSelect, handleClose, handleOpen],
  );

  return (
    <MenuContextProvider value={contextValue}>
      <Popover
        {...props}
        isOpen={isOpen}
        onClose={closeAndFocusTrigger}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={false}
      >
        {props.children}
      </Popover>
    </MenuContextProvider>
  );
}

type UseMenuOpenStateProps = Pick<
  MenuProps,
  'isOpen' | 'defaultIsOpen' | 'onOpen' | 'onClose'
>;

const useMenuOpenState = (props: UseMenuOpenStateProps) => {
  const { isOpen, defaultIsOpen, onOpen, onClose } = props;
  const [isOpenState, setIsOpen] = useState(defaultIsOpen || false);

  const isControlled = isOpen !== undefined;
  const isOpenValue = isControlled ? isOpen : isOpenState;

  const handleClose = useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onClose?.();
  }, [isControlled, onClose]);

  const handleOpen = useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpen?.();
  }, [isControlled, onOpen]);

  return { isOpen: isOpenValue, isControlled, handleClose, handleOpen };
};
