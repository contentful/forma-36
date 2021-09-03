import React from 'react';
import { Popover } from '@contentful/f36-popover';
import { useMenuContext } from '../MenuContext';

export interface MenuTriggerProps {
  children: React.ReactNode;
}

export const MenuTrigger = (props: MenuTriggerProps) => {
  const child = React.Children.only(props.children) as any;
  const { getTriggerProps } = useMenuContext();

  return (
    <Popover.Trigger>
      {React.cloneElement(child, {
        ...getTriggerProps(child.props, child.ref),
        ['aria-haspopup']: 'menu',
      })}
    </Popover.Trigger>
  );
};
