import React from 'react';
import PropTypes from 'prop-types';

import { TableCellContext, contextOptions } from '../TableCell';

export default class TableHead extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    extraClassNames: '',
  };

  render() {
    const { extraClassNames, children } = this.props;
    return (
      <TableCellContext.Provider value={contextOptions.head}>
        <thead className={extraClassNames}>{children}</thead>
      </TableCellContext.Provider>
    );
  }
}
