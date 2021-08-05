import React, {
  forwardRef,
  useCallback,
  useState,
  FocusEventHandler,
  MouseEventHandler,
} from 'react';
import { cx } from 'emotion';
import { usePrimitive } from '@contentful/f36-core';
import type {
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
  PolymorphicComponent,
} from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';
import { Drag } from '@contentful/f36-icons';
import { getStyles } from './DragHandle.styles';

const DEFAULT_TAG = 'button';

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

export type DragHandleProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, DragHandleInternalProps>;

const _DragHandle: PolymorphicComponentWithRef<
  DragHandleInternalProps,
  typeof DEFAULT_TAG
> = (
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
    ...otherProps
  },
  forwardedRef,
) => {
  const styles = getStyles();
  const { primitiveProps: commonProps, Element } = usePrimitive(otherProps);
  const [isFocused, setisFocused] = useState(isFocusedProp);
  const [isHovered, setisHovered] = useState(isHoveredProp);

  const handleFocus = useCallback<FocusEventHandler>(
    (event) => {
      setisFocused(true);

      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback<FocusEventHandler>(
    (event) => {
      setisFocused(false);

      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur],
  );

  const handleMouseEnter = useCallback<MouseEventHandler>(
    (event) => {
      setisHovered(true);

      if (onMouseEnter) {
        onMouseEnter(event);
      }
    },
    [onMouseEnter],
  );

  const handleMouseLeave = useCallback<MouseEventHandler>(
    (event) => {
      setisHovered(false);

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    },
    [onMouseLeave],
  );

  return (
    <Element
      as={DEFAULT_TAG}
      {...commonProps}
      className={cx(styles.root({ isActive, isFocused, isHovered }), className)}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      testId={testId}
      ref={forwardedRef}
    >
      <Drag variant="muted" />
      <span className={styles.label}>{label}</span>
    </Element>
  );
};

export const DragHandle: PolymorphicComponent<
  DragHandleInternalProps,
  typeof DEFAULT_TAG
> = forwardRef(_DragHandle);
