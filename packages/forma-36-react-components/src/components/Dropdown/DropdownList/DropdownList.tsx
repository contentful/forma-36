import React, { Component } from 'react';
import cn from 'classnames';
import cssStyles from './DropdownList.css';
import * as CSS from 'csstype';

export interface DropdownListProps {
  children: React.ReactNode;
  listRef?: React.RefObject<HTMLUListElement>;
  className?: string;
  testId?: string;
  border?: 'top' | 'bottom';
  maxHeight?: number | CSS.MaxHeightProperty<string>;
  styles?: object;
}

const defaultProps: Partial<DropdownListProps> = {
  testId: 'cf-ui-dropdown-list',
};

export class DropdownList extends Component<DropdownListProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      border,
      maxHeight,
      testId,
      children,
      listRef,
      styles,
      ...otherProps
    } = this.props;

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
  }
}

export default DropdownList;
