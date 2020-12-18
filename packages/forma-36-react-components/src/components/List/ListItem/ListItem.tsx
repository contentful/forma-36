import React from 'react';
import cn from 'classnames';

import styles from './ListItem.css';
import List from '../List';

export interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  testId?: string;
}

export function ListItem({
  className,
  children,
  testId,
  ...otherProps
}: ListItemProps): React.ReactElement {
  const classNames = cn(styles['ListItem'], className, {
    [styles['ListItem--nested-list']]:
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (children as any).type === List,
  });

  return (
    <li className={classNames} data-test-id={testId} {...otherProps}>
      {children}
    </li>
  );
}

ListItem.defaultProps = {
  testId: 'cf-ui-list-item',
};

export default ListItem;
