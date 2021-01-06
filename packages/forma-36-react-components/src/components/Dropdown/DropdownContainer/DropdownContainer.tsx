import React, { forwardRef, useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import cn from 'classnames';

import { useOnClickOutside } from '../../../utils/useOnClickOutside';
import { positionType } from '../Dropdown';
import styles from './DropdownContainer.css';
import Portal from '../../Portal';

export interface DropdownContainerProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  getRef?: (ref: HTMLElement | null) => void;
  nonClosingRefs?: RefObject<HTMLElement>[];
  isOpen: boolean;
  onClose?: Function;
  openSubmenu?: (value: boolean) => void;
  position?: positionType;
  submenu?: boolean;
  testId?: string;
  usePortal?: boolean;
}

export const DropdownContainer = forwardRef<
  HTMLElement,
  DropdownContainerProps
>(function DropdownContainer(
  {
    children,
    className,
    getRef,
    isOpen,
    onClose,
    openSubmenu,
    // position = 'bottom-left' as positionType,
    style,
    submenu = false,
    testId = 'cf-ui-dropdown-portal',
    usePortal = true,
    nonClosingRefs,
    ...props
  },
  refCallback,
) {
  // We're not dealing with React RefObjects but with useState (because we
  // want to re-render on all changes)
  const setReference = refCallback as React.Dispatch<
    React.SetStateAction<HTMLElement | null>
  >;
  const dropdown = useRef<HTMLDivElement | null>(null);
  const classNames = cn(className, styles['DropdownContainer']);
  const clickableRefs = [dropdown, ...(nonClosingRefs || [])];

  useOnClickOutside(clickableRefs, (event) => {
    if (isOpen && onClose) {
      event.stopImmediatePropagation();

      onClose(event);
    }
  });

  useEffect(() => {
    if (getRef && dropdown.current) {
      getRef(dropdown.current);
    }
  }, [getRef]);

  const dropdownComponent = (
    <div
      {...props}
      className={classNames}
      data-test-id={testId}
      onMouseEnter={() => {
        if (openSubmenu) {
          openSubmenu(true);
        }
      }}
      onFocus={() => {
        if (openSubmenu) {
          openSubmenu(true);
        }
      }}
      onMouseLeave={() => {
        if (openSubmenu) {
          openSubmenu(false);
        }
      }}
      ref={(node) => {
        setReference(node);
        dropdown.current = node;
      }}
      style={style}
    >
      {children}
    </div>
  );

  return submenu || usePortal === false ? (
    dropdownComponent
  ) : (
    <Portal>{dropdownComponent}</Portal>
  );
});

DropdownContainer.displayName = 'DropdownContainer';

export default DropdownContainer;
