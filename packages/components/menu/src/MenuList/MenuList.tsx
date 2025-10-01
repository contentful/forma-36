import React from 'react';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import { useMenuContext } from '../MenuContext';

import { cx } from '@emotion/css';
import { getMenuListStyles } from './MenuList.styles';
import { MenuListHeader } from './MenuListHeader';
import { MenuListFooter } from './MenuListFooter';
import {
  FloatingList,
  FloatingPortal,
  FloatingFocusManager,
  useMergeRefs,
} from '@floating-ui/react';

interface MenuListInternalProps extends CommonProps {
  children?: React.ReactNode;
}

function assertChild(child: any): child is { type: { displayName: string } } {
  return Boolean(child?.type?.displayName);
}

export type MenuListProps = PropsWithHTMLElement<MenuListInternalProps, 'div'>;

const MenuListBase = (props: ExpandProps<MenuListProps>, forwardedRef) => {
  const {
    children,
    testId = 'cf-ui-menu-list',
    className,
    style,
    ...otherProps
  } = props;

  const menu = useMenuContext();
  let header: React.ReactElement | null = null;
  let footer: React.ReactElement | null = null;
  const items: React.ReactElement[] = [];

  const refs = useMergeRefs([menu.refs.setFloating, forwardedRef]);

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
    isOpen: menu.isOpen,
  });

  if (menu.renderOnlyWhenOpen && !menu.isOpen) {
    return null;
  }

  const content = (
    <div
      role="menu"
      style={{ ...style, ...menu.floatingStyles }}
      className={cx(styles.container, className)}
      data-test-id={testId}
      ref={refs}
      {...otherProps}
      {...menu.getFloatingProps()}
    >
      {header}
      {items}
      {footer}
    </div>
  );

  const maybeWrapWithFocusManager = (node: React.ReactElement) =>
    menu.autoFocus === false ? (
      node
    ) : (
      <FloatingFocusManager
        context={menu.context}
        modal={false}
        initialFocus={menu.isNested ? -1 : 0}
        returnFocus={!menu.isNested}
      >
        {node}
      </FloatingFocusManager>
    );

  return (
    <FloatingList elementsRef={menu.elementsRef} labelsRef={menu.labelsRef}>
      {menu.usePortal ? (
        <FloatingPortal>
          {maybeWrapWithFocusManager(content as React.ReactElement)}
        </FloatingPortal>
      ) : (
        maybeWrapWithFocusManager(content as React.ReactElement)
      )}
    </FloatingList>
  );
};

MenuListBase.displayName = 'MenuList';
export const MenuList = React.forwardRef(MenuListBase);
