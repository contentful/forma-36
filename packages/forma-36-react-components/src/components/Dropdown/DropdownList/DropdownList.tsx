import React, { Component } from 'react';
import cn from 'classnames';
import styles from './DropdownList.css';

export type DropdownListProps = {
  children: React.ReactNode;
  listRef?: React.RefObject<HTMLUListElement>;
  className?: string;
  testId?: string;
  border?: 'top' | 'bottom';
  maxHeight?: number;
} & typeof defaultProps;

const defaultProps = {
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
      ...otherProps
    } = this.props;

    const classNames = cn(styles['DropdownList'], className, {
      [styles[`DropdownList--border-${border}`]]: border,
    });

    return (
      <ul
        ref={listRef}
        data-test-id={testId}
        role="menu"
        style={{
          maxHeight: maxHeight || 'auto',
          overflowY: maxHeight ? 'auto' : 'visible',
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
