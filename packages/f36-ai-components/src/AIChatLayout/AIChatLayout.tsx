import { type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React from 'react';
import { getStyles } from './AIChatLayout.styles';

export interface AIChatLayoutProps extends CommonProps {
  children: React.ReactNode;
}

function _AIChatLayout(
  props: AIChatLayoutProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const styles = getStyles();

  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.aIChatLayout, props.className)}
    >
      {props.children}
    </div>
  );
}

/**
 * A layout component that provides a container for a conversational interface.
 */
export const AIChatLayout = React.forwardRef(_AIChatLayout);
