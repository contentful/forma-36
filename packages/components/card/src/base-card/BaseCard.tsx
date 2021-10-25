import { cx } from 'emotion';
import React, { forwardRef, useCallback, useState } from 'react';
import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';
import { Box, Flex } from '@contentful/f36-core';
import type {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { Icon, IconComponent } from '@contentful/f36-icon';
import { Text } from '@contentful/f36-typography';
import type { ButtonProps } from '@contentful/f36-button';
import { DragHandle } from '@contentful/f36-drag-handle';

import { getBaseCardStyles } from './BaseCard.styles';
import { CardActions } from './CardActions';

import {
  SkeletonBodyText,
  SkeletonContainer,
  SkeletonDisplayText,
} from '@contentful/f36-skeleton';

export const BASE_CARD_DEFAULT_TAG = 'article';

export type CardElement = 'a' | 'article' | 'button' | 'div';

export type BaseCardInternalProps = CommonProps &
  MarginProps & {
    /**
     * An array of Menu elements used to render an actions menu
     */
    actions?: React.ReactNodeArray;
    /**
     * Handle tag for Card component
     */
    as?: CardElement;
    /**
     * If the card is selectable and has no title, it will need a aria-label to help screen readers identify it
     */
    ariaLabel?: string;
    /**
     * Badge component to show in Card header
     */
    badge?: ReactElement;
    /**
     * Passing href into the Card. You need to also add property as="a" to make it rendered as <a />
     */
    href?: string;
    /**
     * Child nodes to be rendered in the component
     */
    children?: ReactNode;
    /**
     * Props to pass to the content body div
     */
    contentBodyProps?: { className?: string };
    /**
     * Props to pass to the drag handle component
     */
    dragHandleProps?: { className?: string };
    /**
     * Custom header element to render
     */
    header?: ReactElement;
    /**
     * Icon to show in the Card header
     */
    icon?: IconComponent;
    /**
     * Props to pass to the action menu button
     */
    actionsButtonProps?: Partial<ButtonProps<'button'>>;
    /**
     * Applies dragging styles to the card and drag handle
     */
    isDragging?: boolean;
    /**
     * Applies focus styles to the card
     */
    isFocused?: boolean;
    /**
     * Applies hover styles to the card
     */
    isHovered?: boolean;
    /**
     * Applies selected styles to the element
     */
    isSelected?: boolean;
    /**
     * The title of the entry. It will also be used as aria-label
     */
    title?: string;
    /**
     * Type of the entity represented by the card. Shown in the header of the card
     */
    type?: string;
    /**
     * Render the component with a drag handle
     */
    withDragHandle?: boolean;
    /**
     * Loading state for the component - when true will display loading feedback to the user
     */
    isLoading?: boolean;
  };

export type BaseCardProps<
  E extends React.ElementType = typeof BASE_CARD_DEFAULT_TAG
> = PolymorphicProps<BaseCardInternalProps, E>;

function _BaseCard<E extends React.ElementType = typeof BASE_CARD_DEFAULT_TAG>(
  {
    actions,
    actionsButtonProps,
    ariaLabel,
    badge,
    children,
    className,
    contentBodyProps,
    dragHandleProps,
    header,
    href,
    icon,
    isDragging = false,
    isFocused: isFocusedProp,
    isHovered: isHoveredProp,
    isSelected = false,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    rel = 'noreferrer',
    target,
    testId = 'cf-ui-card',
    title,
    type,
    withDragHandle,
    isLoading,
    ...otherProps
  }: BaseCardProps<E>,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const styles = getBaseCardStyles();
  const [isFocused, setisFocused] = useState(isFocusedProp ?? false);
  const [isHovered, setisHovered] = useState(isHoveredProp ?? false);
  const isInteractive = Boolean(onClick || href || withDragHandle);
  const hasHeader = Boolean(header);
  const defaultHeader =
    type || icon || badge || actions ? (
      <Flex className={cx(styles.header, actions && styles.headerWithActions)}>
        <Flex flexGrow={1}>
          <Text fontColor="gray600">{type}</Text>
        </Flex>
        {icon && <Icon as={icon} className={styles.headerItem} />}
        {badge && (
          <Flex alignItems="center" className={styles.headerItem}>
            {badge}
          </Flex>
        )}
        {actions && (
          <CardActions buttonProps={actionsButtonProps}>{actions}</CardActions>
        )}
      </Flex>
    ) : null;

  const handleFocus = useCallback<FocusEventHandler<HTMLElement>>(
    (event) => {
      setisFocused(true);

      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback<FocusEventHandler<HTMLElement>>(
    (event) => {
      setisFocused(false);

      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur],
  );

  const handleMouseEnter = useCallback<MouseEventHandler<HTMLElement>>(
    (event) => {
      setisHovered(true);

      if (onMouseEnter) {
        onMouseEnter(event);
      }
    },
    [onMouseEnter],
  );

  const handleMouseLeave = useCallback<MouseEventHandler<HTMLElement>>(
    (event) => {
      setisHovered(false);

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    },
    [onMouseLeave],
  );

  const handleClick = onClick
    ? (event: MouseEvent<HTMLElement>) => {
        onClick(event);
      }
    : undefined;

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLElement>>(
    (event) => {
      if (
        onClick &&
        (event.nativeEvent.code === 'Enter' ||
          event.nativeEvent.code === 'Space')
      ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore Disable check because of different event types
        onClick(event);
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    },
    [onClick, onKeyDown],
  );

  if (isLoading) {
    return (
      <SkeletonContainer className={styles.skeleton} svgHeight="5.6rem">
        <SkeletonDisplayText numberOfLines={1} />
        <SkeletonBodyText numberOfLines={1} offsetTop={35} />
      </SkeletonContainer>
    );
  }

  return (
    <Box
      aria-label={title || ariaLabel}
      aria-pressed={
        otherProps.as === 'button' ? (isSelected ? 'true' : 'false') : undefined
      }
      as={BASE_CARD_DEFAULT_TAG}
      className={cx(
        styles.root({
          hasHeader,
          isFocused,
          isHovered,
          isSelected,
        }),
        className,
      )}
      href={href}
      onBlur={handleBlur}
      onClick={handleClick}
      onFocus={handleFocus}
      onMouseEnter={
        typeof isHoveredProp === 'undefined' && isInteractive
          ? handleMouseEnter
          : undefined
      }
      onMouseLeave={
        typeof isHoveredProp === 'undefined' && isInteractive
          ? handleMouseLeave
          : undefined
      }
      onKeyDown={handleKeyDown}
      rel={href && rel}
      role={onClick && !href ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      target={target}
      {...otherProps}
      ref={forwardedRef}
      testId={testId}
    >
      {withDragHandle && (
        <DragHandle
          className={
            dragHandleProps?.className
              ? cx(styles.dragHandle, dragHandleProps?.className)
              : styles.dragHandle
          }
          isActive={isDragging}
          label="Reorder entry"
        />
      )}

      {header ?? defaultHeader}

      <div
        className={
          contentBodyProps?.className
            ? cx(styles.contentBody, contentBodyProps.className)
            : styles.contentBody
        }
      >
        {children}
      </div>
    </Box>
  );
}

export const BaseCard: PolymorphicComponent<
  BaseCardInternalProps,
  typeof BASE_CARD_DEFAULT_TAG
> = forwardRef(_BaseCard);
