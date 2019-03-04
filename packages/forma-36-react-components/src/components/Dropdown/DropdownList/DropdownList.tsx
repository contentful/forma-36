import React, { Component } from 'react';
import cn from 'classnames';
import styles from './DropdownList.css';

interface DropdownListProps {
  extraClassNames: string;
  children: React.ReactNode;
  testId: string;
  border: 'top' | 'bottom';
  maxHeight: number;
}

export class DropdownList extends Component<DropdownListProps> {
  static defaultProps = {
    extraClassNames: undefined,
    testId: 'cf-ui-dropdown-list',
    border: undefined,
    maxHeight: undefined,
  };

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
