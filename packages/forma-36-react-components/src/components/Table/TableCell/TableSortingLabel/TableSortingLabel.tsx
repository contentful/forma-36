import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

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

const defaultProps: Partial<TableSortingLabelProps> = {
  testId: 'cf-ui-table-sorting-label',
};

const TableSortingLabel = (props: TableSortingLabelProps) => {
  const { className, children, active, testId, ...otherProps } = props;

  const renderIcon = () => {
    const { direction } = props;
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

TableSortingLabel.defaultProps = defaultProps;

export default TableSortingLabel;
