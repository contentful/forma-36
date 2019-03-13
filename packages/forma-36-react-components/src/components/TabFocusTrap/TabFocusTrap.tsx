import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./TabFocusTrap.css');

export interface TabFocusTrapProps {
  extraClassNames?: string;
  children: React.ReactNode;
}

export class TabFocusTrap extends Component<TabFocusTrapProps> {
  render() {
    const { extraClassNames, children, ...otherProps } = this.props;

    const classNames = cn(styles.TabFocusTrap, extraClassNames);

    return (
      <span tabIndex={-1} className={classNames} {...otherProps}>
        {children}
      </span>
    );
  }
}

export default TabFocusTrap;
