import React, { useCallback, useState } from 'react';
import type { FocusEventHandler, MouseEventHandler } from 'react';
import { cx } from 'emotion';
import type {
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import { DragIcon } from '@contentful/f36-icons';
import { getStyles } from './DragHandle.styles';

// We use div instead of a button because react-sortable-hoc lib cancels sorting if the event target is button.
//
// The other alternative way to fix it was to pass a custom `shouldCancelStart` callback,
// in every place where we use this component with react-sortable-hoc.
// (the custom callback with all the logic from default callback, but without button event cancelation).
// So we decided that just changing it to the div, as it was in v3, is a better fix.
//
// default shouldCancelStart callback:
// https://github.com/clauderic/react-sortable-hoc/blob/d94ba3cc67cfc7d6d460b585e7723bdb50015e53/src/SortableContainer/defaultShouldCancelStart.js
const DRAG_HANDLE_DEFAULT_TAG = 'div';

export interface DragHandleInternalProps extends CommonProps {
  /**
   * The element used for the root node
   * @default div
   */
  as?: 'button' | 'div';
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
}

export type DragHandleProps<
  E extends React.ElementType = typeof DRAG_HANDLE_DEFAULT_TAG
> = PolymorphicProps<DragHandleInternalProps, E>;

function _DragHandle<
  E extends React.ElementType = typeof DRAG_HANDLE_DEFAULT_TAG
>(
  props: DragHandleProps<E>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forwardedRef: React.Ref<any>,
) {
  const styles = getStyles();
  const {
    as = DRAG_HANDLE_DEFAULT_TAG,
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
  } = props;
  const [isFocused, setisFocused] = useState(isFocusedProp);
  const [isHovered, setisHovered] = useState(isHoveredProp);

  const handleFocus = useCallback<FocusEventHandler<E>>(
    (event) => {
      setisFocused(true);

      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback<FocusEventHandler<E>>(
    (event) => {
      setisFocused(false);

      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur],
  );

  const handleMouseEnter = useCallback<MouseEventHandler<E>>(
    (event) => {
      setisHovered(true);

      if (onMouseEnter) {
        onMouseEnter(event);
      }
    },
    [onMouseEnter],
  );

  const handleMouseLeave = useCallback<MouseEventHandler<E>>(
    (event) => {
      setisHovered(false);

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    },
    [onMouseLeave],
  );

  const Element: React.ElementType = as;

  return (
    <Element
      role="button"
      tabIndex={0}
      {...otherProps}
      className={cx(styles.root({ isActive, isFocused, isHovered }), className)}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-test-id={testId}
      ref={forwardedRef}
      style={style}
      type={as === 'button' ? 'button' : undefined}
    >
      <DragIcon variant="muted" />
      <span className={styles.label}>{label}</span>
    </Element>
  );
}

export const DragHandle: PolymorphicComponent<
  ExpandProps<DragHandleInternalProps>,
  typeof DRAG_HANDLE_DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_DragHandle);
