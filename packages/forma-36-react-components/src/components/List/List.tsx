import React from 'react';
import cn from 'classnames';

import styles from './List.css';

type ListType = 'ul' | 'ol';

export interface ListProps {
  element?: ListType;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
}

export function List({
  element: Tag = 'ul',
  className,
  children,
  testId = 'cf-ui-list',
  ...otherProps
}: ListProps): React.ReactElement {
  const classNames = cn(
    styles['List'],
    { [styles['List--unordered']]: Tag === 'ul' },
    className,
  );

  return (
    <Tag {...otherProps} className={classNames} data-test-id={testId}>
      {children}
    </Tag>
  );
}

export default List;
