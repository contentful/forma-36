import React from 'react';
import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';
import { useMenuContext } from '../MenuContext';
import { Popover } from '@contentful/f36-popover';
import { cx } from 'emotion';
import { getMenuListStyles } from './MenuList.styles';

interface MenuListInternalProps extends CommonProps {
  children?: React.ReactNode;

  /**
   * The item will be sticked to the top of MenuList
   */
  headerItem?: React.ReactElement;

  /**
   * The item will be sticked to the bottom of MenuList
   */
  footerItem?: React.ReactElement;
}

export type MenuListProps = PropsWithHTMLElement<MenuListInternalProps, 'div'>;

const _MenuList = (props: MenuListProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    children,
    testId = 'cf-ui-menu-list',
    className,
    headerItem,
    footerItem,
    ...otherProps
  } = props;

  const { getMenuListProps } = useMenuContext();

  const styles = getMenuListStyles();

  return (
    <Popover.Content
      {...getMenuListProps(otherProps, ref)}
      data-test-id={testId}
      role="menu"
      className={cx(styles.container, className)}
    >
      {headerItem &&
        React.cloneElement(headerItem, {
          className: cx(styles.headerItem, headerItem.props.className),
        })}
      {children}
      {footerItem &&
        React.cloneElement(footerItem, {
          className: cx(styles.footerItem, footerItem.props.className),
        })}
    </Popover.Content>
  );
};

export const MenuList = React.forwardRef(_MenuList);
