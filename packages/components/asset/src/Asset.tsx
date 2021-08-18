import { cx } from 'emotion';
import React from 'react';
import { CommonProps } from '@contentful/f36-core';
import { styles } from './Asset.styles';

export interface AssetProps extends CommonProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
}

function Asset(props: AssetProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.asset, props.className)}
    >
      {props.children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
const _Asset = React.forwardRef(Asset);
export { _Asset as Asset };
