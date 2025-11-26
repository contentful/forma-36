import { Flex, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { getStyles } from './AIChatMessageList.styles';

export interface AIChatMessageListProps extends CommonProps {
  /**
   * Child nodes to be rendered in the message list
   */
  children?: React.ReactNode;

  /**
   * Defines the scroll behavior of the message list.
   * If set to 'none', no automatic scrolling will occur.
   * If an object is provided, the `onScrollHeightChange` callback will be invoked
   * whenever the scroll height changes. The callback receives a boolean indicating
   * whether the user is near the bottom of the message list, and should return
   * a boolean indicating whether to scroll to the bottom.
   * @default { onScrollHeightChange: () => true }
   */
  scrollBehavior?:
    | {
        /**
         * Callback invoked when the scroll height changes.
         * @param isNearTheBottom - Indicates if the user is near the bottom of the message list.
         * @returns A boolean indicating whether to scroll to the bottom.
         */
        onScrollHeightChange: (isNearTheBottom: boolean) => boolean;
      }
    | 'none';
}

export interface AIChatMessageListRef extends HTMLDivElement {
  scrollToBottom: () => void;
}

function _AIChatMessageList(
  props: AIChatMessageListProps,
  ref: Ref<AIChatMessageListRef>,
) {
  const {
    className,
    testId = 'cf-ui-ai-chat-message-list',
    children,
    scrollBehavior = { onScrollHeightChange: () => true },
    ...otherProps
  } = props;

  const styles = getStyles();

  const innerRef = useRef<AIChatMessageListRef | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      ...innerRef.current,
      scrollToBottom: scrollMessageListToBottom,
    }),
    [],
  );

  const scrollMessageListToBottom = () => {
    requestAnimationFrame(() => {
      if (!innerRef.current) return;
      innerRef.current.scrollTo({
        top: innerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  useEffect(() => {
    if (scrollBehavior === 'none' || !innerRef.current) return;

    const isNearTheBottom =
      innerRef.current.scrollHeight -
        innerRef.current.scrollTop -
        innerRef.current.clientHeight <=
      100;

    if (scrollBehavior.onScrollHeightChange(isNearTheBottom)) {
      scrollMessageListToBottom();
    }
  }, [scrollBehavior, innerRef.current?.scrollHeight]);

  return (
    <Flex
      ref={innerRef}
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
export const AIChatMessageList = forwardRef<
  AIChatMessageListRef,
  AIChatMessageListProps
>(_AIChatMessageList);
