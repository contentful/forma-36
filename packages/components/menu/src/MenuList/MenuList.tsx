import React from 'react';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import { useMenuContext } from '../MenuContext';
import { useSubmenuContext } from '../SubmenuContext';
import { Popover } from '@contentful/f36-popover';
import { cx } from 'emotion';
import { getMenuListStyles } from './MenuList.styles';
import { MenuListHeader } from './MenuListHeader';
import { MenuListFooter } from './MenuListFooter';

interface MenuListInternalProps extends CommonProps {
  children?: React.ReactNode;
}

function assertChild(child: any): child is { type: { displayName: string } } {
  return Boolean(child?.type?.displayName);
}

export type MenuListProps = PropsWithHTMLElement<MenuListInternalProps, 'div'>;

const _MenuList = (
  props: ExpandProps<MenuListProps>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    children,
    testId = 'cf-ui-menu-list',
    className,
    ...otherProps
  } = props;

  const { getMenuListProps } = useMenuContext();
  const submenuContext = useSubmenuContext();

  let header: React.ReactElement | null = null;
  let footer: React.ReactElement | null = null;
  const items: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    let appendChild = true;
    if (assertChild(child)) {
      if (child.type.displayName === MenuListHeader.displayName) {
        header = child as unknown as React.ReactElement;
        appendChild = false;
      } else if (child.type.displayName === MenuListFooter.displayName) {
        footer = child as unknown as React.ReactElement;
        appendChild = false;
      }
    }
    if (appendChild) {
      items.push(child as unknown as React.ReactElement);
    }
  });

  const styles = getMenuListStyles({
    hasStickyHeader: Boolean(header),
    hasStickyFooter: Boolean(footer),
  });

  const extendedOtherProps = submenuContext
    ? submenuContext.getSubmenuListProps(otherProps)
    : otherProps;

  return (
    <Popover.Content
      role="menu"
      {...extendedOtherProps}
      {...getMenuListProps(extendedOtherProps, ref)}
      className={cx(styles.container, className)}
      testId={testId}
    >
      {header}
      {items}
      {footer}
    </Popover.Content>
  );
};

export const MenuList = React.forwardRef(_MenuList);
