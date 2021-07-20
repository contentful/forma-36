import React, { forwardRef, useCallback, useState } from 'react';
import { css, cx } from 'emotion';
import { usePrimitive } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';
import { Drag } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

import { styles } from './DragHandle.styles';

const generateStyles = ({ isActive, isFocused, isHovered }) => {
  if (isActive || isFocused || isHovered) {
    return css({
      backgroundColor: tokens.colorElementLight,
      cursor: isActive ? 'grabbing' : 'grab',
    });
  }
};

export type DragHandleInternalProps = {
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

export type DragHandleProps = CommonProps & DragHandleInternalProps;

export const DragHandle = forwardRef<HTMLDivElement, DragHandleProps>(
  function DragHandle(
    {
      className,
      isActive,
      isFocused: isFocusedProp,
      isHovered: isHoveredProp,
      label,
      testId = 'cf-ui-drag-handle',
      ...otherProps
    },
    forwardedRef,
  ) {
    const { primitiveProps: commonProps, Element } = usePrimitive(otherProps);
    const [isFocused, setisFocused] = useState(isFocusedProp);
    const [isHovered, setisHovered] = useState(isHoveredProp);

    const handleFocus = useCallback(() => {
      setisFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
      setisFocused(false);
    }, []);

    const handleMouseEnter = useCallback(() => {
      setisHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setisHovered(false);
    }, []);

    return (
      <Element
        as="div"
        {...commonProps}
        className={cx(
          styles.root,
          generateStyles({ isActive, isFocused, isHovered }),
          className,
        )}
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
  },
);
