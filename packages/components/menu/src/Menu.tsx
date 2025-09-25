import React from 'react';
import { useFloatingParentNodeId } from '@floating-ui/react';

export interface MenuProps {
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

export function Menu(props: MenuProps, ref) {
  const parentId = useFloatingParentNodeId();

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent {...props} ref={ref} />
      </FloatingTree>
    );
  }

  return <MenuComponent {...props} ref={ref} />;
}
