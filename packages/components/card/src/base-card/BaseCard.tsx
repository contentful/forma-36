import { cx } from 'emotion';
import React, { forwardRef, useCallback, useState } from 'react';
import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
} from 'react';
import { Box } from '@contentful/f36-core';
import type {
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';

import { DragHandle } from '@contentful/f36-drag-handle';

import { getBaseCardStyles } from './BaseCard.styles';

import {
  SkeletonBodyText,
  SkeletonContainer,
  SkeletonDisplayText,
} from '@contentful/f36-skeleton';

import { DefaultCardHeader } from './DefaultCardHeader';
import type { BaseCardInternalProps } from './BaseCard.types';

export const BASE_CARD_DEFAULT_TAG = 'article';

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
      <DefaultCardHeader
        type={type}
        icon={icon}
        badge={badge}
        actions={actions}
        actionsButtonProps={actionsButtonProps}
      />
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
