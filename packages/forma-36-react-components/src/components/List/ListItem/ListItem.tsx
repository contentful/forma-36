import React, { Component } from 'react';
import cn from 'classnames';

import styles from './ListItem.css';
import List from '../List/List';

export type ListItemProps = {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-list-item',
};

export class ListItem extends Component<ListItemProps> {
  static defaultProps = defaultProps;

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles['ListItem'], extraClassNames, {
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
