import { cx, css } from 'emotion';
import React, { forwardRef, useCallback, useState } from 'react';
import type {
  AnchorHTMLAttributes,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';
import tokens from '@contentful/f36-tokens';
import { Box, Flex } from '@contentful/f36-core';
import type {
  BoxProps,
  PolymorphicComponent,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import { Icon, IconComponent } from '@contentful/f36-icon';
import type { ButtonProps } from '@contentful/f36-button';
import { DragHandle } from '@contentful/f36-drag-handle';
import type { ObjectInterpolation } from '@emotion/serialize';

import { styles } from './BaseCard.styles';
import { CardActions } from './CardActions';

export const DEFAULT_TAG = 'article';

const generateCardStyles = ({
  hasHeader,
  isFocused,
  isHovered,
  isSelected,
}: {
  hasHeader: boolean;
  isFocused: boolean;
  isHovered: boolean;
  isSelected: boolean;
}) => {
  const styles: ObjectInterpolation<undefined> = {};

  if (!hasHeader) {
    styles.paddingTop = tokens.spacingM;
  }

  if (isHovered) {
    styles.borderColor = tokens.colorPrimary;
    styles.cursor = 'pointer';
    // outline: 'none',
  }

  if (isFocused) {
    styles.borderColor = tokens.colorPrimary;
    styles.boxShadow = tokens.glowPrimary;
    styles.outline = 0;
  }

  if (isSelected) {
    styles.backgroundColor = tokens.colorBlueLightest;
    styles.borderColor = tokens.colorPrimary;
    styles.boxShadow = tokens.glowPrimary;
  }

  return css(styles);
};

export type CardElement = 'a' | 'article' | 'button' | 'div';

type AnchorProps =
  | {
      href?: undefined;
      rel?: never;
      target?: never;
    }
  | {
      /**
       * Used to make the decision of either rendering the card as an anchor or as an article
       */
      href?: string;
      rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
      /**
       * Used with href to specify target attribute value
       */
      target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    };

export type BaseCardInternalProps = Omit<
  BoxProps<typeof DEFAULT_TAG>,
  'ref' | 'padding'
> &
  AnchorProps & {
    /**
     * The DropdownList elements used to render an actions dropdown
     */
    actions?: ReactElement | ReactElement[];
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
    header?: ReactElement;
    /**
     * Props to pass to the header element
     */
    // headerProps?: { as?: ElementType; className?: string };
    // headerItemProps?: { className?: string };
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
  };

export type BaseCardProps = BaseCardInternalProps &
  Omit<BoxProps<typeof DEFAULT_TAG>, 'as' | 'ref'>;

export const _BaseCard: PolymorphicComponentWithRef<
  BaseCardInternalProps,
  typeof DEFAULT_TAG
> = (
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
    ...otherProps
  },
  forwardedRef,
) => {
  const [isFocused, setisFocused] = useState(isFocusedProp ?? false);
  const [isHovered, setisHovered] = useState(isHoveredProp ?? false);
  const isInteractive = Boolean(onClick || href || withDragHandle);
  const hasHeader = Boolean(header);
  const defaultHeader =
    type || icon || badge || actions ? (
      <Flex className={cx(styles.header, actions && styles.headerWithActions)}>
        <Flex as="footer" flexGrow={1}>
          {type}
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

  return (
    <Box
      aria-label={title || ariaLabel}
      aria-pressed={onClick ? (isSelected ? 'true' : 'false') : undefined}
      as={href ? 'a' : DEFAULT_TAG}
      className={cx(
        styles.root,
        generateCardStyles({
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
};

export const BaseCard: PolymorphicComponent<
  BaseCardInternalProps,
  typeof DEFAULT_TAG
> = forwardRef(_BaseCard);
