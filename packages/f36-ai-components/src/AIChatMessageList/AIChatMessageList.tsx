import { Flex, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, { forwardRef, Ref } from 'react';
import { getStyles } from './AIChatMessageList.styles';

export interface AIChatMessageListProps extends CommonProps {
  /**
   * Child nodes to be rendered in the message list
   */
  children?: React.ReactNode;
}

function _AIChatMessageList(
  props: AIChatMessageListProps,
  ref: Ref<HTMLDivElement>,
) {
  const {
    className,
    testId = 'cf-ui-ai-chat-message-list',
    children,
    ...otherProps
  } = props;

  const styles = getStyles();

  return (
    <Flex
      ref={ref}
      testId={testId}
      flexDirection="column"
      fullWidth
      fullHeight
      className={cx(styles.messageList, className)}
      {...otherProps}
    >
      {children}
    </Flex>
  );
}

/**
 * A container component for displaying a list of AI chat messages in a scrollable area.
 * The ref can be used to control scrolling behavior externally.
 */
export const AIChatMessageList = forwardRef(_AIChatMessageList);
AIChatMessageList.displayName = 'AIChatMessageList';
