import React from 'react';
import cn from 'classnames';

import styles from './Tag.css';

export type TagType =
  | 'primary'
  | 'primary-filled'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'secondary'
  | 'muted';

type Status =
  | 'published'
  | 'draft'
  | 'archived'
  | 'changed'
  | 'deleted'
  | 'new';

const statusTagTypeMap = {
  published: 'positive',
  draft: 'warning',
  archived: 'negative',
  changed: 'primary',
  deleted: 'negative',
  new: 'primary-filled',
};

export interface TagProps {
  /**
   * prop, used for setting type of the component from
   * TagTypes - primary, primary-filled, positive, negative, warning, secondary, muted */
  tagType?: TagType;
  /**
   * property to set size of the component */
  size?: 'small' | 'default';
  /**
   * style prop, for inline styles */
  style?: React.CSSProperties;
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id) */
  testId?: string;
  /**
   * Child nodes to be rendered in the component */
  children: React.ReactNode;
  /**
   * prop, used for setting status of the component which maps to TagType,
   * it is used more in the context of the status on the page, like published or archived,
   * Status options - published, draft, archived, changed, deleted, new */
  entityStatusType?: Status;
}

export function Tag({
  className,
  children,
  tagType = 'primary' as TagType,
  size = 'default',
  entityStatusType,
  testId = 'cf-ui-tag',
  ...otherProps
}: TagProps): React.ReactElement {
  const classNames = cn(styles.Tag, className, {
    [styles[
      `Tag--${
        entityStatusType
          ? statusTagTypeMap[entityStatusType as Status]
          : tagType
      }`
    ]]: entityStatusType
      ? statusTagTypeMap[entityStatusType as Status]
      : tagType,
    [styles[`Tag--${size}`]]: size !== 'default',
  });

  return (
    <div className={classNames} data-test-id={testId} {...otherProps}>
      {children}
    </div>
  );
}
