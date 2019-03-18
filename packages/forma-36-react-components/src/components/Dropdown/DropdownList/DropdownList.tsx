import React, { Component } from 'react';
import cn from 'classnames';
import styles from './DropdownList.css';

export type DropdownListProps = {
  children: React.ReactNode;
  extraClassNames?: string;
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
      extraClassNames,
      border,
      maxHeight,
      testId,
      children,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['DropdownList'], extraClassNames, {
      [styles[`DropdownList--border-${border}`]]: border,
    });

    return (
      <ul
        data-test-id={testId}
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
