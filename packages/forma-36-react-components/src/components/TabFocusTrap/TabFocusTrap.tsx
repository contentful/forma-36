import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const styles = require('./TabFocusTrap.css');

export interface TabFocusTrapProps {
  extraClassNames?: string;
  children: React.ReactNode;
}

class TabFocusTrap extends React.Component<TabFocusTrapProps> {
  static defaultProps: Partial<TabFocusTrapProps> = {
    extraClassNames: undefined,
  };

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
