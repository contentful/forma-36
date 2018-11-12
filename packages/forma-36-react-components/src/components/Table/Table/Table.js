import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Table.css';

export default class Table extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    extraClassNames: '',
  };

  render() {
    const { extraClassNames, children, ...otherProps } = this.props;

    return (
      <table
        className={cn(extraClassNames, styles.Table)}
        cellPadding="0"
        cellSpacing="0"
        {...otherProps}
      >
        {children}
      </table>
    );
  }
}
