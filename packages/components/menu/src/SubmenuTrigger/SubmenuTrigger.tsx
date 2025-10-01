import React from 'react';
import { MenuTrigger } from '../MenuTrigger/MenuTrigger';
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem';
import { useMenuContext } from '../MenuContext';
import { CaretRightIcon } from '@contentful/f36-icons';
import type { ExpandProps } from '@contentful/f36-core';
import { cx } from '@emotion/css';
import { getSubmenuTriggerStyles } from './SubmenuTrigger.styles';

export type SubmenuTriggerProps = Omit<
  MenuItemProps<'button'>,
  'isInitiallyFocused' | 'as'
>;

const SubmenuTriggerBase = (
  props: ExpandProps<SubmenuTriggerProps>,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const { className, children } = props;

  const styles = getSubmenuTriggerStyles();
  const { isOpen } = useMenuContext();

  return (
    <MenuTrigger>
      <MenuItem
        {...props}
        testId="submenu-trigger"
        ref={ref}
        className={cx(styles.root({ isActive: isOpen }), className)}
      >
        <span className={styles.content}>{children}</span>
        <CaretRightIcon className={styles.icon} />
      </MenuItem>
    </MenuTrigger>
  );
};

export const SubmenuTrigger = React.forwardRef(SubmenuTriggerBase);
