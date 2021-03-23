import { cx, css } from 'emotion';
import React from 'react';
import tokens from '@contentful/f36-tokens';

export type HeadingProps = {
  testId?: string;
  className?: string;
  children: React.ReactNode;
};

function Heading(props: HeadingProps, ref: React.Ref<HTMLDivElement>) {
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
const _Heading = React.forwardRef(Heading);
export { _Heading as Heading };
