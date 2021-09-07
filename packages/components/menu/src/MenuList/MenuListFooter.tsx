import React from 'react';
import { cx } from 'emotion';
import type { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';

import { getMenuFooterStyles } from './MenuList.styles';

export type MenuListFooterProps = PropsWithHTMLElement<CommonProps, 'div'>;

export const MenuListFooter: React.FC<MenuListFooterProps> = (props) => {
  const {
    children,
    testId = 'cf-ui-menu-list-footer',
    className,
    ...otherProps
  } = props;

  const styles = getMenuFooterStyles();

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

MenuListFooter.displayName = 'MenuListFooter';
