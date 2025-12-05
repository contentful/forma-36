import { cx } from '@emotion/css';
import React, {
  useCallback,
  useState,
  type FocusEventHandler,
  type KeyboardEventHandler,
  type MouseEvent,
  type MouseEventHandler,
} from 'react';
import {
  Box,
  type PolymorphicComponent,
  type PolymorphicProps,
} from '@contentful/f36-core';
import { DragHandle } from '@contentful/f36-drag-handle';
import { Skeleton } from '@contentful/f36-skeleton';

import { getBaseCardStyles, getRootStyles } from './BaseCard.styles';

import { DefaultCardHeader, stopEvents } from './DefaultCardHeader';
import type { BaseCardInternalProps, CardElement } from './BaseCard.types';

type CardInnerProps = {
  withDragHandle?: boolean;
  dragHandleRender?: BaseCardInternalProps['dragHandleRender'];
  drag: React.ReactElement;
  isDragging: boolean;
  header?: React.ReactNode;
  defaultHeader: React.ReactNode;
  children: React.ReactNode;
  styles: { wrapper: string; contentBody: string };
};

const CardInner = ({
  children,
  defaultHeader,
  drag,
  dragHandleRender,
  header,
  isDragging,
  styles,
  withDragHandle,
}: CardInnerProps) => (
  <>
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
  </>
);

CardInner.displayName = 'CardInner';

export const BASE_CARD_DEFAULT_TAG = 'article';

export type BaseCardProps<
  E extends React.ElementType = typeof BASE_CARD_DEFAULT_TAG,
> = PolymorphicProps<BaseCardInternalProps, E>;

function BaseCardBase<
  E extends React.ElementType = typeof BASE_CARD_DEFAULT_TAG,
>(
  {
    actions,
    actionsButtonProps,
    ariaLabel,
    badge,
    children,
    className,
    customActionButton,
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
    as,
    ...otherProps
  }: BaseCardProps<E>,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const styles = getBaseCardStyles();
  const [isHovered, setIsHovered] = useState(isHoveredProp ?? false);
  const isInteractive = Boolean(onClick || href || withDragHandle);
  const hasHeader = Boolean(header);
  const defaultHeader =
    type || icon || badge || actions || customActionButton ? (
      <DefaultCardHeader
        type={type}
        icon={icon}
        badge={badge}
        actions={actions}
        customActionButton={customActionButton}
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
      <Skeleton.Container className={styles.skeleton} svgHeight="5.6rem">
        <Skeleton.DisplayText numberOfLines={1} />
        <Skeleton.BodyText numberOfLines={1} offsetTop={35} />
      </Skeleton.Container>
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

  const Element = as || BASE_CARD_DEFAULT_TAG;

  /** Seperate the Props based on the Element Type */

  const rootStyles = getRootStyles(hasHeader, isHovered, isSelected);

  const baseProps = {
    testId,
    className: cx(rootStyles.root, className),
    'aria-label': title || ariaLabel,
    title,
  };

  // anchor exclusive properties
  const anchorProps = {
    href,
    target,
    rel: rel ?? 'noreferrer',
  } as Pick<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'rel' | 'target'
  >;

  if (Element === 'a') {
    return (
      <Box
        as="a"
        {...anchorProps}
        {...baseProps}
        ref={forwardedRef as React.Ref<HTMLAnchorElement>}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={
          typeof isHoveredProp === 'undefined' ? handleMouseEnter : undefined
        }
        onMouseLeave={
          typeof isHoveredProp === 'undefined' ? handleMouseLeave : undefined
        }
        {...otherProps}
      >
        <CardInner
          children={children}
          defaultHeader={defaultHeader}
          drag={drag}
          dragHandleRender={dragHandleRender}
          header={header}
          isDragging={isDragging}
          styles={styles}
          withDragHandle={withDragHandle}
        />
      </Box>
    );
  }

  // Narrow the element type after early-return anchor case to exclude 'a'
  const nonAnchorElement = Element as Exclude<CardElement, 'a'>;

  if (isInteractive) {
    return (
      <Box
        as={nonAnchorElement}
        {...baseProps}
        aria-pressed={nonAnchorElement === 'button' ? !!isSelected : undefined}
        onBlur={handleBlur}
        onClick={handleClick}
        onFocus={handleFocus}
        onMouseEnter={
          typeof isHoveredProp === 'undefined' ? handleMouseEnter : undefined
        }
        onMouseLeave={
          typeof isHoveredProp === 'undefined' ? handleMouseLeave : undefined
        }
        onKeyDown={handleKeyDown}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        ref={forwardedRef}
        {...otherProps}
      >
        <CardInner
          children={children}
          defaultHeader={defaultHeader}
          drag={drag}
          dragHandleRender={dragHandleRender}
          header={header}
          isDragging={isDragging}
          styles={styles}
          withDragHandle={withDragHandle}
        />
      </Box>
    );
  }
  return (
    <Box
      as={nonAnchorElement}
      {...baseProps}
      {...otherProps}
      ref={forwardedRef}
    >
      <CardInner
        children={children}
        defaultHeader={defaultHeader}
        drag={drag}
        dragHandleRender={dragHandleRender}
        header={header}
        isDragging={isDragging}
        styles={styles}
        withDragHandle={withDragHandle}
      />
    </Box>
  );
}

BaseCardBase.displayName = 'BaseCard';

export const BaseCard = React.forwardRef(BaseCardBase) as PolymorphicComponent<
  BaseCardInternalProps,
  typeof BASE_CARD_DEFAULT_TAG
>;
