// import { cx, css } from 'emotion';
// import tokens from '@contentful/f36-tokens';

import React from 'react';

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

// const statusTagTypeMap = {
//   published: 'positive',
//   draft: 'warning',
//   archived: 'negative',
//   changed: 'primary',
//   deleted: 'negative',
//   new: 'primary-filled',
// };

export interface TagProps {
  tagType?: TagType;
  style?: React.CSSProperties;
  className?: string;
  testId?: string;
  children: React.ReactNode;
  entityStatusType?: Status;
}

function Tag(props: TagProps, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    children,
    // tagType = 'primary' as TagType,
    entityStatusType,
    testId = 'cf-ui-tag',
    ...otherProps
  } = props;

  // const classNames = cn(styles.Tag, className, {
  //   [styles[
  //     `Tag--${
  //       entityStatusType
  //         ? statusTagTypeMap[entityStatusType as Status]
  //         : tagType
  //     }`
  //   ]]: entityStatusType
  //     ? statusTagTypeMap[entityStatusType as Status]
  //     : tagType,
  // });

  return (
    <div className={''} ref={ref} data-test-id={testId} {...otherProps}>
      {children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
const _Tag = React.forwardRef(Tag);
export { _Tag as Tag };
