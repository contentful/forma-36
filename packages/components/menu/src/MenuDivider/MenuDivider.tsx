import React from 'react';
import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';
import { cx } from 'emotion';
import { getMenuDividerStyles } from './MenuDivider.styles';

export type MenuDividerProps = PropsWithHTMLElement<CommonProps, 'hr'>;

export const MenuDivider = (props: MenuDividerProps) => {
  const {
    children,
    testId = 'cf-ui-menu-divider',
    className,
    ...otherProps
  } = props;

  const styles = getMenuDividerStyles();

  return (
    <hr
      aria-orientation="horizontal"
      data-test-id={testId}
      className={cx(styles, className)}
      {...otherProps}
    />
  );
};
