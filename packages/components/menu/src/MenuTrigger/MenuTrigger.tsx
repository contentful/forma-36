import React from 'react';
import { Popover } from '@contentful/f36-popover';
import { useMenuContext } from '../MenuContext';
import type { ExpandProps } from '@contentful/f36-core';

export interface MenuTriggerProps {
  children: React.ReactNode;
}

export const MenuTrigger = (props: ExpandProps<MenuTriggerProps>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const child = React.Children.only(props.children) as any;
  const { getTriggerProps } = useMenuContext();
  const triggerProps = getTriggerProps(child.props, child.ref);

  return (
    <Popover.Trigger {...triggerProps}>
      {React.cloneElement(child, {
        ['aria-haspopup']: 'menu',
      })}
    </Popover.Trigger>
  );
};
