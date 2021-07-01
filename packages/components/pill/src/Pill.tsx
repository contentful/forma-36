import { cx, css } from 'emotion';
import React from 'react';
import tokens from '@contentful/f36-tokens';

export type PillProps = {
  testId?: string;
  className?: string;
  children: React.ReactNode;
};

function Pill(props: PillProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(
        css({
          color: tokens.colorRedBase,
        }),
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
const _Pill = React.forwardRef(Pill);
export { _Pill as Pill };
