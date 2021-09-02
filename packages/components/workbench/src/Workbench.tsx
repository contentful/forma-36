import React from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';
import { styles } from './Workbench.styles';

export interface WorkbenchProps extends CommonProps {
  children: React.ReactNode;
}

function _Workbench(props: WorkbenchProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.workbench, props.className)}
    >
      {props.children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
export const Workbench = React.forwardRef(_Workbench);
