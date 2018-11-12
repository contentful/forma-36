import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './TabFocusTrap.css';

class TabFocusTrap extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
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
