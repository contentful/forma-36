import React, { Component } from 'react';
import cn from 'classnames';

import Icon from '../../../Icon/Icon';
import { sortingDirections } from '../TableCell/TableCell';
import TabFocusTrap from '../../../TabFocusTrap/TabFocusTrap';
import styles from './TableSortingLabel.css';

export type TableSortingLabelProps = {
  children: React.ReactNode;
  direction: keyof typeof sortingDirections;
  active: boolean;
  className?: string;
  testId?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  testId: 'cf-ui-table-sorting-label',
};

export class TableSortingLabel extends Component<TableSortingLabelProps> {
  static defaultProps = defaultProps;

  renderIcon() {
    const { direction } = this.props;
    const classNames = cn(
      styles['TableSortingLabel__icon'],
      styles[`TableSortingLabel__icon--${direction as string}`],
    );

    return <Icon className={classNames} icon="ArrowUp" color="muted" />;
  }

  render() {
    const { className, children, active, testId, ...otherProps } = this.props;

    return (
      <button
        type="button"
        className={cn(styles['TableSortingLabel__button'], className)}
        data-test-id={testId}
        {...otherProps}
      >
        <TabFocusTrap className={styles['TableSortingLabel__button__text']}>
          {children}
          {active && this.renderIcon()}
        </TabFocusTrap>
      </button>
    );
  }
}

export default TableSortingLabel;
