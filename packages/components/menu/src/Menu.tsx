import React from 'react';
import {
  useFloatingParentNodeId,
  FloatingTree,
  type Placement,
  type OffsetOptions,
} from '@floating-ui/react';
import { MenuComponent } from './MenuComponent';

type BaseMenuProps = {
  /**
   * Boolean to determine if the Popover should be the same width as
   * the trigger element
   *
   * @default false
   */
  isFullWidth?: boolean;

  /**
   * If `true`, the Menu will be initially opened. This property has no influence on the uncontrolled status of the Menu
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
   * Determines the preferred position of where the MenuList opens. This position is not
   * guaranteed, as the MenuList might be moved to fit the viewport.
   *
   * @default bottom-start OR right-start
   */
  placement?: Placement | 'auto';

  /**
   * Boolean to control if popover is allowed to change its placement automatically
   * based on available space in the viewport.
   *
   * For example:
   * If you set placement prop to bottom, but there isn't enough space to position the popover in that direction,
   * it will change the popper placement to top. As soon as enough space is detected, the placement will be reverted to the defined one.
   *
   * If you want the popover to strictly follow the placement prop you should set this prop to false.
   *
   * @default true
   */
  isAutoalignmentEnabled?: boolean;

  /**
   * Single number as short hand for `mainAxis`
   *  Or object which can contain `mainAxis`, `crossAxis` or `alignmentAxis`
   *
   * @default 0
   */
  offset?: OffsetOptions;

  /**
   * Defines if the menu list content should be rendered in the DOM only when it's open
   * or all the time (after the component has been mounted)
   *
   * @default true
   */
  renderOnlyWhenOpen?: boolean;

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
   * Boolean to control whether or not to render the Menu in a React Portal.
   * Rendering content inside a Portal allows the Menu to escape the bounds
   * of its parent while still being positioned correctly. Using a Portal is
   * necessary if an ancestor of the Menu hides overflow.
   *
   * @default true
   */
  usePortal?: boolean;

  /**
   * If true, the Menu will be focused after opening
   *
   * @default true
   */
  autoFocus?: boolean;

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
type ControlledProps = BaseMenuProps & {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
} & (
    | { onOpen: () => void }
    | { onClose: () => void }
    | { onOpen: () => void; onClose: () => void }
  );

export type MenuProps = UncontrolledMenuProps | ControlledProps;

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
