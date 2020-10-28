import React, { Component } from 'react';
import cn from 'classnames';

import styles from './ListItem.css';
import List from '../List';

export interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  testId?: string;
}

const defaultProps: Partial<ListItemProps> = {
  testId: 'cf-ui-list-item',
};

export class ListItem extends Component<ListItemProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles['ListItem'], className, {
      [styles['ListItem--nested-list']]:
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (this.props.children as any).type === List,
    });

    return (
      <li className={classNames} data-test-id={testId} {...otherProps}>
        {children}
      </li>
    );
  }
}

export default ListItem;
