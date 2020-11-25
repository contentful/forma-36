import React, { HTMLProps } from 'react';
import cn from 'classnames';

import styles from './TableRow.css';

export interface TableRowProps extends HTMLProps<HTMLTableRowElement> {
  className?: string;
  testId?: string;
  children: React.ReactNode;
}

const defaultProps: Partial<TableRowProps> = {
  testId: 'cf-ui-table-row',
};

const TableRow = (props: TableRowProps) => {
  const { className, children, testId, ...otherProps } = props;

  return (
    <tr
      className={cn(styles['TableRow'], className)}
      data-test-id={testId}
      {...otherProps}
    >
      {children}
    </tr>
  );
};

TableRow.defaultProps = defaultProps;

export default TableRow;
