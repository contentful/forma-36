import React from 'react';
import { cx } from 'emotion';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';

import { getMenuHeaderStyles } from './MenuList.styles';

export type MenuListHeaderProps = PropsWithHTMLElement<CommonProps, 'div'>;

export const MenuListHeader: React.FC<ExpandProps<MenuListHeaderProps>> = (
  props,
) => {
  const {
    children,
    testId = 'cf-ui-menu-list-header',
    className,
    ...otherProps
  } = props;

  const styles = getMenuHeaderStyles();

  return (
    <div
      data-test-id={testId}
      className={cx(styles, className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

MenuListHeader.displayName = 'MenuListHeader';
