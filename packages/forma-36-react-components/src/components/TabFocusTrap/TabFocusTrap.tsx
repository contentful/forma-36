import React, { Component } from 'react';
import cn from 'classnames';

import styles from './TabFocusTrap.css';

export interface TabFocusTrapProps {
  className?: string;
  children: React.ReactNode;
}

export class TabFocusTrap extends Component<TabFocusTrapProps> {
  render() {
    const { className, children, ...otherProps } = this.props;

    const classNames = cn(styles.TabFocusTrap, className);

    return (
      <span tabIndex={-1} className={classNames} {...otherProps}>
        {children}
      </span>
    );
  }
}

export default TabFocusTrap;
