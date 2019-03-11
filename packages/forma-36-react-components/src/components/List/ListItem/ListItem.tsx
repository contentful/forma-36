import React, { Component } from 'react';
import cn from 'classnames';

import styles from './ListItem.css';
import List from '../List/List';

export interface ListItemProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
}

export class ListItem extends Component<ListItemProps> {
  static defaultProps = {
    testId: 'cf-ui-list-item',
  };

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles['ListItem'], extraClassNames, {
      [styles['ListItem--nested-list']]:
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
