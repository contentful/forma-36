import React, { forwardRef } from 'react';
import cn from 'classnames';

import styles from './EntityList.css';

export interface EntityListProps {
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
}

export const EntityList = forwardRef<HTMLUListElement, EntityListProps>(
  (props: EntityListProps, ref) => {
    const { className, children, testId, ...otherProps } = props;
    const classNames = cn(styles.EntityList, className);

    return (
      <ul
        ref={ref}
        className={classNames}
        data-test-id={testId}
        {...otherProps}
      >
        {children}
      </ul>
    );
  },
);
EntityList.displayName = 'EntityList';
EntityList.defaultProps = {
  testId: 'cf-ui-entity-list',
};

export default EntityList;
