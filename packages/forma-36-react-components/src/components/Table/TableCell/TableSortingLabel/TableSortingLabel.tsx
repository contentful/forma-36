import React from 'react';
import cn from 'classnames';
import type { ButtonHTMLAttributes } from 'react';

import Icon from '../../../Icon/Icon';
import { sortingDirections } from '../TableCell/TableCell';
import TabFocusTrap from '../../../TabFocusTrap/TabFocusTrap';
import styles from './TableSortingLabel.css';

export interface TableSortingLabelProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  direction: keyof typeof sortingDirections;
  active: boolean;
  className?: string;
  testId?: string;
}

export const TableSortingLabel = ({
  active,
  children,
  className,
  direction,
  testId = 'cf-ui-table-sorting-label',
  ...otherProps
}: TableSortingLabelProps) => {
  const renderIcon = () => {
    const classNames = cn(
      styles['TableSortingLabel__icon'],
      styles[`TableSortingLabel__icon--${direction as string}`],
    );

    return <Icon className={classNames} icon="ArrowUp" color="muted" />;
  };

  return (
    <button
      type="button"
      className={cn(styles['TableSortingLabel__button'], className)}
      data-test-id={testId}
      {...otherProps}
    >
      <TabFocusTrap className={styles['TableSortingLabel__button__text']}>
        {children}
        {active && renderIcon()}
      </TabFocusTrap>
    </button>
  );
};

export default TableSortingLabel;
