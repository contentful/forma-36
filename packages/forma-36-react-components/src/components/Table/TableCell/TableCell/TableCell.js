import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { TableCellContext } from './TableCellContext';

import styles from './TableCell.css';

export const sortingDirections = {
  asc: 'asc',
  desc: 'desc',
};

export default class TableCell extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node,
    sorting: PropTypes.oneOf([false, ...Object.keys(sortingDirections)]),
    align: PropTypes.oneOf(['center', 'left', 'right']),
  };

  static defaultProps = {
    children: null,
    extraClassNames: '',
    sorting: false,
    align: 'left',
  };

  render() {
    const {
      extraClassNames,
      children,
      sorting,
      align,
      ...otherProps
    } = this.props;

    return (
      <TableCellContext.Consumer>
        {({ name: context, element: Element }) => (
          <Element
            className={cn(styles.TableCell, extraClassNames, {
              [styles['TableCell--head']]: context === 'head',
              [styles['TableCell--head__sorting']]: sorting,
            })}
            align={align}
            {...otherProps}
          >
            {children}
          </Element>
        )}
      </TableCellContext.Consumer>
    );
  }
}
