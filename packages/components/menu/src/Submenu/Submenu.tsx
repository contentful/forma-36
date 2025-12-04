import React from 'react';
import { Menu, type MenuProps } from '../Menu';

/**
 * @deprecated Submenu is deprecated. Use Menu component instead.
 * This component will be removed in a future version.
 *
 * Migration guide:
 * Replace `<Submenu>` with `<Menu>` - the API is identical.
 */
export const Submenu = (props: MenuProps) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      '[Submenu] This component is deprecated. Use Menu component instead. ' +
        'Replace <Submenu> with <Menu> - the API is identical.',
    );
  }

  return <Menu {...props} />;
};

Submenu.displayName = 'Submenu';

/**
 * @deprecated Use MenuProps instead.
 */
export type SubmenuProps = MenuProps;
