import { cx } from 'emotion';
import React from 'react';
import { CommonProps } from '@contentful/f36-core';
import { styles } from './TextLink.styles';

export interface TextLinkProps extends CommonProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
}

function TextLink(props: TextLinkProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.textLink, props.className)}
    >
      {props.children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
const _TextLink = React.forwardRef(TextLink);
export { _TextLink as TextLink };
