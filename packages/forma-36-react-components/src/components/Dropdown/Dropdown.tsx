import React, { RefObject, useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import { usePopper } from 'react-popper';
import { Modifier, Placement, State as PopperState } from '@popperjs/core';

import DropdownListItem from './DropdownListItem/DropdownListItem';
import DropdownContainer from './DropdownContainer';
import styles from './Dropdown.css';

const offestModifier = {
  name: 'offset',
  options: {
    offset: [0, 6],
  },
};

/**
 * Popper.js modifier to give the popper element the full width of the reference
 */
const sameWidth: Modifier<'sameWidth', {}> = {
  name: 'sameWidth',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  fn: ({ state }: { state: PopperState }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }: { state: PopperState }) => {
    const reference = state.elements.reference as HTMLElement;
    state.elements.popper.style.width = `${reference.offsetWidth}px`;

    return () => {};
  },
};

export type positionType =
  | 'top'
  | 'right'
  | 'left'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-right'
  | 'top-left';

/**
 * Helper method to map our current Dropdown position props to Popper.js
 * placements.
 *
 * @todo: Maybe we can use the Popper placements in the next breaking change?
 */
const mapPositionTypeToPlacement = (position: positionType): Placement => {
  switch (position) {
    case 'bottom-left':
      return 'bottom-start';

    case 'bottom-right':
      return 'bottom-end';

    case 'right':
      return 'right-start';

    case 'left':
      return 'left-start';

    case 'top-left':
      return 'top-start';

    case 'top-right':
      return 'top-end';

    default:
      return position;
  }
};

export interface DropdownProps {
  /**
   * Child nodes to be rendered in the component
   */
  children: React.ReactNode;
  /**
   * Class names to be appended to the className prop of the Dropdown wrapper
   */
  className?: string;
  /**
   * Class names to be appended to the className prop of the DropdownContainer
   */
  dropdownContainerClassName?: string;
  getContainerRef?: (ref: HTMLElement | null) => void;
  /**
   * Boolean to disable automatic positioning of the element to fit the
   * available viewport. Instead this forces the element to follow the given
   * or default value of the `position` prop.
   */
  isAutoalignmentEnabled?: boolean;
  /**
   * Boolean to determine if the Dropdown should take the full width of
   * the container
   */
  isFullWidth?: boolean;
  /**
   * Boolean to control whether or not the Dropdown is open
   */
  isOpen?: boolean;
  /**
   * Callback function to run when the Dropdown closes
   */
  onClose?: Function;
  /**
   * Determines the preferred position of the Dropdown. This position is not
   * guaranteed, as the Dropdown might be moved to fit the viewport
   */
  position?: positionType;
  /**
   * A text label to use as the toggle element for the submenu
   */
  submenuToggleLabel?: string;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * React element to use as the toggle, opening and closing the Dropdown
   */
  toggleElement?: React.ReactElement;
  /**
   * Boolean to control whether or not to render the dropdown in a React Portal.
   * Rendering content inside a Portal allows the dropdown to escape the bounds
   * of its parent while still being positioned correctly. Using a Portal is
   * necessary if an ancestor of the dropdown hides overflow.
   *
   * Defaults to `true`
   */
  usePortal?: boolean;
  /**
   * By passing down references from upstream components as part of this array,
   * you will be able to disable automatic closing of the dropdown if you click
   * somewhere else in the document besides the dropdown itself. See the
   * Autocomplete component for an actual example of this usage.
   */
  nonClosingRefs?: RefObject<HTMLElement>[];
}

export function Dropdown({
  children,
  className,
  dropdownContainerClassName,
  getContainerRef = () => {},
  isAutoalignmentEnabled = true,
  isFullWidth,
  isOpen: isOpenProp = false,
  onClose,
  position = 'bottom-left',
  submenuToggleLabel,
  testId = 'cf-ui-dropdown',
  toggleElement,
  usePortal,
  nonClosingRefs,
  ...otherProps
}: DropdownProps) {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(isOpenProp);
  const placement = mapPositionTypeToPlacement(position);
  const { attributes, forceUpdate, styles: popperStyles } = usePopper(
    referenceElement,
    popperElement,
    {
      placement,
      modifiers: [
        offestModifier,
        isFullWidth ? sameWidth : {},
        isAutoalignmentEnabled !== undefined
          ? {
              name: 'preventOverflow',
              options: {
                mainAxis: isAutoalignmentEnabled,
              },
            }
          : {},
        isAutoalignmentEnabled === false
          ? {
              name: 'flip',
              options: {
                fallbackPlacements: [],
              },
            }
          : {},
      ],
    },
  );
  const classNames = cn(styles['Dropdown'], className);
  const containerTestId = testId ? `${testId}-container` : testId;

  useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  useEffect(() => {
    if (forceUpdate) {
      forceUpdate();
    }
  }, [children, forceUpdate]);

  const openSubmenu = (isOpen: boolean) => {
    if (submenuToggleLabel) {
      setIsOpen(isOpen);
    }
  };

  const close = useCallback(() => {
    setIsOpen(false);

    if (onClose) {
      onClose();
    }
  }, [onClose, setIsOpen]);

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        event.stopPropagation();

        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey, true);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey, true);
      };
    }
  }, [handleEscapeKey, isOpen]);

  return submenuToggleLabel ? (
    <DropdownListItem
      testId={testId}
      submenuToggleLabel={submenuToggleLabel}
      onEnter={() => setIsOpen(true)}
      onLeave={() => setIsOpen(false)}
      ref={setReferenceElement}
      {...otherProps}
    >
      {toggleElement &&
        React.cloneElement(toggleElement, {
          'aria-haspopup': 'menu',
          'aria-expanded': isOpen,
        })}
      {isOpen && (
        <DropdownContainer
          nonClosingRefs={nonClosingRefs}
          className={dropdownContainerClassName}
          getRef={getContainerRef}
          isOpen={isOpen}
          onClose={onClose}
          openSubmenu={openSubmenu}
          ref={setPopperElement}
          style={popperStyles.popper}
          submenu
          usePortal={usePortal}
          {...attributes.popper}
        >
          {children}
        </DropdownContainer>
      )}
    </DropdownListItem>
  ) : (
    <div
      data-test-id={testId}
      className={classNames}
      ref={setReferenceElement}
      {...otherProps}
    >
      {toggleElement &&
        React.cloneElement(toggleElement, {
          'aria-haspopup': 'menu',
          'aria-expanded': isOpen,
        })}

      {isOpen && (
        <DropdownContainer
          nonClosingRefs={nonClosingRefs}
          className={dropdownContainerClassName}
          getRef={getContainerRef}
          isOpen={isOpen}
          onClose={onClose}
          openSubmenu={openSubmenu}
          ref={setPopperElement}
          style={popperStyles.popper}
          submenu={false}
          testId={containerTestId}
          usePortal={usePortal}
          {...attributes.popper}
        >
          {children}
        </DropdownContainer>
      )}
    </div>
  );
}

export default Dropdown;
