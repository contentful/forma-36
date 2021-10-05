import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu, MenuProps } from '../Menu';
import { useMenuContext } from '../MenuContext';
import { SubmenuContextProvider, SubmenuContextType } from '../SubmenuContext';

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

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setIsOpen(true);

    onOpen?.();
  }, [onOpen]);
  const handleClose = useCallback(() => {
    setIsOpen(false);

    onClose?.();
  }, [onClose]);

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
          handleClose();

          _props.onMouseLeave?.(event);
        },
      }),
      getSubmenuTriggerProps: (_props) => ({
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
          handleClose();

          _props.onMouseLeave?.(event);
        },
      }),
    }),
    [isOpen, menuId, handleOpen, handleClose],
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
