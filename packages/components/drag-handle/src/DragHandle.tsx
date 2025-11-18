import React, {
  useCallback,
  useState,
  type ElementType,
  type FocusEventHandler,
  type MouseEventHandler,
  type Ref,
} from 'react';
import { cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type {
  PolymorphicComponent,
  PolymorphicProps,
  CommonProps,
  ExpandProps,
} from '@contentful/f36-core';
import { DotsSixVerticalIcon } from '@contentful/f36-icons';

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

  /**
   * Determines style variation
   * @default secondary
   */
  variant?: 'secondary' | 'transparent';
}

export type DragHandleProps<
  E extends ElementType = typeof DRAG_HANDLE_DEFAULT_TAG,
> = PolymorphicProps<DragHandleInternalProps, E>;

function _DragHandle<E extends ElementType = typeof DRAG_HANDLE_DEFAULT_TAG>(
  props: DragHandleProps<E>,
  ref: Ref<any>,
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
    variant = 'secondary',
    ...otherProps
  } = props;
  const [isFocused, setisFocused] = useState(isFocusedProp);
  const [isHovered, setisHovered] = useState(isHoveredProp);

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

  const commonProps = {
    className: cx(
      styles.root({ isActive, isFocused, isHovered, variant }),
      className,
    ),
    'data-test-id': testId,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref,
    style,
  };

  if (as === 'div') {
    return (
      <div {...otherProps} {...commonProps} role="button" tabIndex={0}>
        <DotsSixVerticalIcon color={tokens.gray600} />
        <span className={styles.label}>{label}</span>
      </div>
    );
  }

  return (
    <button {...otherProps} {...commonProps} type="button">
      <DotsSixVerticalIcon color={tokens.gray600} />
      <span className={styles.label}>{label}</span>
    </button>
  );
}

export const DragHandle: PolymorphicComponent<
  ExpandProps<DragHandleInternalProps>,
  typeof DRAG_HANDLE_DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_DragHandle);
