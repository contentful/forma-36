import React, { HTMLProps } from 'react';

export interface TableBodyProps extends HTMLProps<HTMLTableSectionElement> {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  children: React.ReactNode;
}

const defaultProps: Partial<TableBodyProps> = {
  testId: 'cf-ui-table-body',
};

export const TableBody = (props: TableBodyProps) => {
  const { className, children, testId, ...otherProps } = props;

  return (
    <tbody data-test-id={testId} className={className} {...otherProps}>
      {children}
    </tbody>
  );
};

TableBody.defaultProps = defaultProps;

export default TableBody;
