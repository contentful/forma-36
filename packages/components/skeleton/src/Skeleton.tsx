import { cx } from 'emotion';
import React from 'react';
import { CommonProps } from '@contentful/f36-core';
import { styles } from './Skeleton.styles';

export interface SkeletonProps extends CommonProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
}

function Skeleton(props: SkeletonProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.skeleton, props.className)}
    >
      {props.children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
const _Skeleton = React.forwardRef(Skeleton);
export { _Skeleton as Skeleton };
