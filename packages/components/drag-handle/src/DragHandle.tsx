import React, {
  forwardRef,
  useCallback,
  useState,
  FocusEventHandler,
  MouseEventHandler,
} from 'react';
import { cx } from 'emotion';
import type { PropsWithHTMLElement } from '@contentful/f36-core';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import { DragIcon } from '@contentful/f36-icons';
import { getStyles } from './DragHandle.styles';

export type DragHandleInternalProps = CommonProps & {
  /**
   * Applies styling for when the component is actively being dragged by
   * the user
   */
  isActive?: boolean;
  /**
   * Applies focus styling
   */
  isFocused?: boolean;
  /**
   * Applies hover styling
   */
  isHovered?: boolean;
  /**
   * Label rendered in DragHandle - not visible on screen as its purpose
   * is for screen readers only
   */
  label: string;
};

export type DragHandleProps = PropsWithHTMLElement<
  DragHandleInternalProps,
  'button'
>;

export const DragHandle = forwardRef<
  HTMLButtonElement,
  ExpandProps<DragHandleProps>
>(
  (
    {
      className,
      isActive,
      isFocused: isFocusedProp,
      isHovered: isHoveredProp,
      label,
      onBlur,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      testId = 'cf-ui-drag-handle',
      style,
      ...otherProps
    },
    forwardedRef,
  ) => {
    const styles = getStyles();
    const [isFocused, setisFocused] = useState(isFocusedProp);
    const [isHovered, setisHovered] = useState(isHoveredProp);

    const handleFocus = useCallback<FocusEventHandler<HTMLButtonElement>>(
      (event) => {
        setisFocused(true);

        if (onFocus) {
          onFocus(event);
        }
      },
      [onFocus],
    );

    const handleBlur = useCallback<FocusEventHandler<HTMLButtonElement>>(
      (event) => {
        setisFocused(false);

        if (onBlur) {
          onBlur(event);
        }
      },
      [onBlur],
    );

    const handleMouseEnter = useCallback<MouseEventHandler<HTMLButtonElement>>(
      (event) => {
        setisHovered(true);

        if (onMouseEnter) {
          onMouseEnter(event);
        }
      },
      [onMouseEnter],
    );

    const handleMouseLeave = useCallback<MouseEventHandler<HTMLButtonElement>>(
      (event) => {
        setisHovered(false);

        if (onMouseLeave) {
          onMouseLeave(event);
        }
      },
      [onMouseLeave],
    );

    return (
      <button
        type="button"
        {...otherProps}
        className={cx(
          styles.root({ isActive, isFocused, isHovered }),
          className,
        )}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-test-id={testId}
        ref={forwardedRef}
        style={style}
      >
        <DragIcon variant="muted" />
        <span className={styles.label}>{label}</span>
      </button>
    );
  },
);

DragHandle.displayName = 'DragHandle';
