import React from 'react';
import type { HTMLProps } from 'react';

export interface TableBodyProps extends HTMLProps<HTMLTableSectionElement> {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  children: React.ReactNode;
}

export const TableBody = ({
  className,
  children,
  testId = 'cf-ui-table-body',
  ...otherProps
}: TableBodyProps) => {
  return (
    <tbody data-test-id={testId} className={className} {...otherProps}>
      {children}
    </tbody>
  );
};

export default TableBody;
