import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './TableRow.css';

export default class TableRow extends React.Component {
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
      <tr className={cn(styles.TableRow, extraClassNames)} {...otherProps}>
        {children}
      </tr>
    );
  }
}
