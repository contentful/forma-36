import React from 'react';
import { useFloatingParentNodeId, FloatingTree } from '@floating-ui/react';
import { MenuComponent } from './MenuComponent';

type BaseMenuProps = {
  /**
   * By default, the Menu is uncontrolled (manage it's expanded state by itself)
   * But you can make it controlled by providing boolean (true/false)
   */
  // isOpen appears only in controlled variant below

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
  /**
   * Menu compound children (Trigger, List, Item, etc.)
   */
  children?: React.ReactNode;
};

// Uncontrolled: no isOpen prop
interface UncontrolledMenuProps extends BaseMenuProps {
  isOpen?: undefined;
}

// Controlled: isOpen present AND at least one of onOpen/onClose must be provided.
// We encode this by creating two branches and unioning them; supplying neither will error.
interface ControlledMenuPropsWithOnOpen extends BaseMenuProps {
  isOpen: boolean;
  onOpen: () => void; // required
  onClose?: () => void; // optional here
}
interface ControlledMenuPropsWithOnClose extends BaseMenuProps {
  isOpen: boolean;
  onOpen?: () => void; // optional here
  onClose: () => void; // required
}
interface FullyControlledMenuProps extends BaseMenuProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export type MenuProps =
  | UncontrolledMenuProps
  | ControlledMenuPropsWithOnOpen
  | ControlledMenuPropsWithOnClose
  | FullyControlledMenuProps;

export const Menu = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<MenuProps>
>(function Menu(props, ref) {
  const { children, ...otherProps } = props;
  const parentId = useFloatingParentNodeId();

  const content = (
    <MenuComponent {...otherProps} ref={ref}>
      {children}
    </MenuComponent>
  );

  if (parentId === null) {
    return <FloatingTree>{content}</FloatingTree>;
  }

  return content;
});

Menu.displayName = 'Menu';
