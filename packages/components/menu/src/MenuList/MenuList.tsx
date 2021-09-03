import React from 'react';
import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';
import { useMenuContext } from '../MenuContext';
import { Popover } from '@contentful/f36-popover';

interface MenuListInternalProps extends CommonProps {
  children?: React.ReactNode;
}

export type MenuListProps = PropsWithHTMLElement<MenuListInternalProps, 'div'>;

const _MenuList = (props: MenuListProps, ref: React.Ref<HTMLDivElement>) => {
  const { children, testId = 'cf-ui-menu-list', ...otherProps } = props;

  const { getMenuListProps } = useMenuContext();

  return (
    <Popover.Content
      {...getMenuListProps(otherProps, ref)}
      data-test-id={testId}
      role="menu"
    >
      {children}
    </Popover.Content>
  );
};

export const MenuList = React.forwardRef(_MenuList);
