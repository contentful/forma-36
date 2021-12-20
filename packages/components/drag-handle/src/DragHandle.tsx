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
  /**
   * Set type button for div element
   */
  type?: string;
};

export type DragHandleProps = PropsWithHTMLElement<
  DragHandleInternalProps,
  'div'
>;

export const DragHandle = forwardRef<
  HTMLDivElement,
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

    const handleFocus = useCallback<FocusEventHandler<HTMLDivElement>>(
      (event) => {
        setisFocused(true);

        if (onFocus) {
          onFocus(event);
        }
      },
      [onFocus],
    );

    const handleBlur = useCallback<FocusEventHandler<HTMLDivElement>>(
      (event) => {
        setisFocused(false);

        if (onBlur) {
          onBlur(event);
        }
      },
      [onBlur],
    );

    const handleMouseEnter = useCallback<MouseEventHandler<HTMLDivElement>>(
      (event) => {
        setisHovered(true);

        if (onMouseEnter) {
          onMouseEnter(event);
        }
      },
      [onMouseEnter],
    );

    const handleMouseLeave = useCallback<MouseEventHandler<HTMLDivElement>>(
      (event) => {
        setisHovered(false);

        if (onMouseLeave) {
          onMouseLeave(event);
        }
      },
      [onMouseLeave],
    );

    return (
      // We had to change it to div becouse of the issue in library used by field editors
      // https://github.com/clauderic/react-sortable-hoc/blob/d94ba3cc67cfc7d6d460b585e7723bdb50015e53/src/SortableContainer/defaultShouldCancelStart.js
      <div
        role="button"
        tabIndex={0}
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
      </div>
    );
  },
);

DragHandle.displayName = 'DragHandle';
