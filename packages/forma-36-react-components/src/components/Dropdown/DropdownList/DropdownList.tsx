import React from 'react';
import cn from 'classnames';
import type * as CSS from 'csstype';

import cssStyles from './DropdownList.css';

export interface DropdownListProps {
  children: React.ReactNode;
  listRef?: React.RefObject<HTMLUListElement>;
  className?: string;
  testId?: string;
  border?: 'top' | 'bottom';
  maxHeight?: number | CSS.Property.MaxHeight;
  styles?: object;
}

export const DropdownList = ({
  className,
  border,
  maxHeight,
  testId,
  children,
  listRef,
  styles,
  ...otherProps
}: DropdownListProps) => {
  const classNames = cn(cssStyles['DropdownList'], className, {
    [cssStyles[`DropdownList--border-${border}`]]: border,
  });

  return (
    <ul
      ref={listRef}
      data-test-id={testId}
      role="menu"
      style={{
        maxHeight: maxHeight || 'auto',
        overflowY: maxHeight ? 'auto' : 'visible',
        ...styles,
      }}
      className={classNames}
      {...otherProps}
    >
      {children}
    </ul>
  );
};

DropdownList.defaultProps = {
  testId: 'cf-ui-dropdown-list',
};

export default DropdownList;
