import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './TableHead.css';

import { TableCellContext, contextOptions } from '../TableCell';

export default class TableHead extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    isSticky: PropTypes.bool,
    offsetTop: PropTypes.string,
  };

  static defaultProps = {
    extraClassNames: '',
    isSticky: false,
    offsetTop: undefined,
  };

  render() {
    const { extraClassNames, offsetTop, isSticky, children } = this.props;

    const classNames = cn(extraClassNames, {
      [styles[`TableHead--sticky`]]: isSticky,
    });
    return (
      <TableCellContext.Provider value={{ ...contextOptions.head, offsetTop }}>
        <thead className={classNames}>{children}</thead>
      </TableCellContext.Provider>
    );
  }
}
