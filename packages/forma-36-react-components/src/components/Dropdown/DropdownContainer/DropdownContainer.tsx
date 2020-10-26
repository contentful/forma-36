import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
import cn from 'classnames';
import ReactDOM from 'react-dom';

import { positionType } from '../Dropdown';
import styles from './DropdownContainer.css';

export interface DropdownContainerProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  getRef?: (ref: HTMLElement | null) => void;
  isOpen: boolean;
  onClose?: Function;
  openSubmenu?: (value: boolean) => void;
  position?: positionType;
  submenu?: boolean;
  testId?: string;
}

export const DropdownContainer = forwardRef<
  HTMLElement,
  DropdownContainerProps
>(
  (
    {
      children,
      className,
      getRef,
      isOpen,
      onClose,
      openSubmenu,
      position,
      style,
      submenu,
      testId,
      ...props
    },
    refCallback,
  ) => {
    // We're not dealing with React RefObjects but with useState (because we
    // want to re-render on all changes)
    const setReference = refCallback as React.Dispatch<
      React.SetStateAction<HTMLElement | null>
    >;
    const dropdown = useRef<HTMLDivElement | null>(null);
    const portalTarget = useRef<HTMLDivElement>(document.createElement('div'));
    const classNames = cn(className, styles['DropdownContainer']);

    const trackOutsideClick = useCallback(
      (event: MouseEvent) => {
        if (
          isOpen &&
          onClose &&
          dropdown.current &&
          !dropdown.current.contains(event.target as Node)
        ) {
          onClose();
        }
      },
      [isOpen, onClose, dropdown.current],
    );

    useEffect(() => {
      if (isOpen) {
        document.body.appendChild(portalTarget.current);
        document.addEventListener('click', trackOutsideClick, {
          passive: true,
        });
      } else {
        document.body.removeChild(portalTarget.current);
        document.removeEventListener('click', trackOutsideClick, {});
      }

      return () => {
        document.body.removeChild(portalTarget.current);
        document.removeEventListener('click', trackOutsideClick, {});
      };
    }, [isOpen]);

    useEffect(() => {
      if (getRef && dropdown.current) {
        getRef(dropdown.current);
      }
    }, [dropdown.current]);

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

    return submenu
      ? dropdownComponent
      : ReactDOM.createPortal(dropdownComponent, portalTarget.current);
  },
);

DropdownContainer.displayName = 'DropdownContainer';

DropdownContainer.defaultProps = {
  testId: 'cf-ui-dropdown-portal',
  position: 'bottom-left' as positionType,
  submenu: false,
};

export default DropdownContainer;
