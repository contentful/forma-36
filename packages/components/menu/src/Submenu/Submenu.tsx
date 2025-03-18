import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Menu, MenuProps } from '../Menu';
import { useMenuContext } from '../MenuContext';
import { SubmenuContextProvider, SubmenuContextType } from '../SubmenuContext';
import { mergeRefs } from '@contentful/f36-core';

const SUBMENU_OFFSET: [number, number] = [-8, 2];

export type SubmenuProps = Omit<
  MenuProps,
  | 'placement'
  | 'offset'
  | 'usePortal'
  | 'isOpen'
  | 'isAutoalignmentEnabled'
  | 'defaultIsOpen'
>;

export const Submenu = (props: SubmenuProps) => {
  const { onClose, onOpen, ...otherProps } = props;

  const {
    isOpen: isParentMenuOpen,
    menuId,
    propsToPropagateToSubmenus,
  } = useMenuContext();

  const triggerRef = useRef<HTMLButtonElement>(null);
  const mouseLeaveTimerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    window.clearTimeout(mouseLeaveTimerRef.current);

    onOpen?.();
  }, [onOpen]);
  const handleClose = useCallback(() => {
    setIsOpen(false);
    window.clearTimeout(mouseLeaveTimerRef.current);

    onClose?.();
  }, [onClose]);
  const closeAndFocusTrigger = useCallback(() => {
    handleClose();
    triggerRef.current?.focus({ preventScroll: true });
  }, [handleClose]);

  useEffect(() => {
    // close when parent menu closed
    if (isParentMenuOpen === false) {
      setIsOpen(false);
    }
  }, [isParentMenuOpen]);

  const contextValue: SubmenuContextType = useMemo(
    () => ({
      isOpen,
      getSubmenuListProps: (_props) => ({
        'data-parent-menu': menuId,
        onMouseOver: (event) => {
          handleOpen();

          _props.onMouseOver?.(event);
        },
        onMouseLeave: (event) => {
          closeAndFocusTrigger();

          _props.onMouseLeave?.(event);
        },
      }),
      getSubmenuTriggerProps: (_props, _ref) => ({
        ref: mergeRefs(triggerRef, _ref),
        onKeyDown: (event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            handleOpen();
          }

          _props.onKeyDown?.(event);
        },
        onMouseOver: (event) => {
          handleOpen();

          _props.onMouseOver?.(event);
        },
        onMouseLeave: (event) => {
          mouseLeaveTimerRef.current = window.setTimeout(
            closeAndFocusTrigger,
            300,
          );

          _props.onMouseLeave?.(event);
        },
      }),
    }),
    [isOpen, menuId, handleOpen, closeAndFocusTrigger],
  );

  return (
    <SubmenuContextProvider value={contextValue}>
      <Menu
        {...propsToPropagateToSubmenus}
        {...otherProps}
        isOpen={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        placement="right-start"
        offset={SUBMENU_OFFSET}
      />
    </SubmenuContextProvider>
  );
};
