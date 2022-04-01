import { cx } from 'emotion';
import React, { forwardRef, useCallback, useState } from 'react';
import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
} from 'react';
import { Box, useTheme } from '@contentful/f36-core';
import type {
  PolymorphicComponent,
  PolymorphicProps,
  Theme,
} from '@contentful/f36-core';

import { DragHandle } from '@contentful/f36-drag-handle';

import { getBaseCardStyles } from './BaseCard.styles';

import {
  SkeletonBodyText,
  SkeletonContainer,
  SkeletonDisplayText,
} from '@contentful/f36-skeleton';

import { DefaultCardHeader, stopEvents } from './DefaultCardHeader';
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
    header,
    href,
    icon,
    isDragging = false,
    isHovered: isHoveredProp,
    isSelected = false,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    target,
    rel,
    testId = 'cf-ui-base-card',
    title,
    type,
    withDragHandle,
    dragHandleRender,
    isLoading,
    ...otherProps
  }: BaseCardProps<E>,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const theme: Theme = useTheme();
  const styles = getBaseCardStyles({ theme });
  const [isHovered, setIsHovered] = useState(isHoveredProp ?? false);
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
      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback<FocusEventHandler<HTMLElement>>(
    (event) => {
      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur],
  );

  const handleMouseEnter = useCallback<MouseEventHandler<HTMLElement>>(
    (event) => {
      setIsHovered(true);

      if (onMouseEnter) {
        onMouseEnter(event);
      }
    },
    [onMouseEnter],
  );

  const handleMouseLeave = useCallback<MouseEventHandler<HTMLElement>>(
    (event) => {
      setIsHovered(false);

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
      if (onKeyDown) {
        onKeyDown(event);
      }
    },
    [onKeyDown],
  );

  if (isLoading) {
    return (
      <SkeletonContainer className={styles.skeleton} svgHeight="5.6rem">
        <SkeletonDisplayText numberOfLines={1} />
        <SkeletonBodyText numberOfLines={1} offsetTop={35} />
      </SkeletonContainer>
    );
  }

  const drag = (
    <DragHandle
      className={styles.dragHandle}
      isActive={isDragging}
      label="Reorder entry"
      onClick={stopEvents}
    />
  );

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
      rel={href && (rel || 'noreferrer')}
      role={onClick && !href ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      target={target}
      {...otherProps}
      ref={forwardedRef}
      testId={testId}
      title={title}
    >
      {withDragHandle
        ? dragHandleRender
          ? dragHandleRender({ drag, isDragging })
          : drag
        : null}
      <div className={styles.wrapper} data-card-part="wrapper">
        {header ?? defaultHeader}
        <div className={styles.contentBody} data-card-part="content">
          {children}
        </div>
      </div>
    </Box>
  );
}

_BaseCard.displayName = 'BaseCard';

export const BaseCard: PolymorphicComponent<
  BaseCardInternalProps,
  typeof BASE_CARD_DEFAULT_TAG
> = forwardRef(_BaseCard);
