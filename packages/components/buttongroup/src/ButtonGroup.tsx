import { cx } from 'emotion';
import React from 'react';
import { CommonProps } from '@contentful/f36-core';
import { styles } from './ButtonGroup.styles';

export interface ButtonGroupProps extends CommonProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
}

function ButtonGroup(props: ButtonGroupProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.buttonGroup, props.className)}
    >
      {props.children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
const _ButtonGroup = React.forwardRef(ButtonGroup);
export { _ButtonGroup as ButtonGroup };
