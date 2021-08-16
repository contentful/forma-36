import { cx } from 'emotion';
import React from 'react';
import { CommonProps } from '@contentful/f36-core';
import { styles } from './DateTime.styles'

export interface DateTimeProps extends CommonProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
};

function DateTime(props: DateTimeProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(
        styles.dateTime,
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
const _DateTime = React.forwardRef(DateTime);
export { _DateTime as DateTime};
