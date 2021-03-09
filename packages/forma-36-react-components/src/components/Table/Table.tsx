import React from 'react';
import cn from 'classnames';
import type { HTMLProps } from 'react';

import styles from './Table.css';

export interface TableProps extends HTMLProps<HTMLTableElement> {
  testId?: string;
  className?: string;
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
  layout?: 'inline' | 'embedded';
}

export const Table = ({
  className,
  children,
  layout = 'inline',
  testId = 'cf-ui-table',
  ...otherProps
}: TableProps) => {
  return (
    <table
      className={cn(className, styles['Table'], {
        [styles['Table--inline']]: layout === 'inline',
      })}
      cellPadding="0"
      cellSpacing="0"
      data-test-id={testId}
      {...otherProps}
    >
      {children}
    </table>
  );
};
