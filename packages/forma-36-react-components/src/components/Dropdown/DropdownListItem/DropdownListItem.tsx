import React, {
  forwardRef,
  MouseEventHandler,
  FocusEventHandler,
  useCallback,
} from 'react';
import cn from 'classnames';

import TabFocusTrap from '../../TabFocusTrap/TabFocusTrap';
import styles from './DropdownListItem.css';

export interface DropdownListItemProps
  extends React.HTMLAttributes<HTMLElement> {
  isDisabled?: boolean;
  listItemRef?: React.MutableRefObject<HTMLLIElement | null>;
  isActive?: boolean;
  isTitle?: boolean;
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
  submenuToggleLabel?: string;
  href?: string;
  onFocus?: FocusEventHandler;
  onLeave?: MouseEventHandler;
  onEnter?: MouseEventHandler;
  className?: string;
  testId?: string;
}

export const DropdownListItem = forwardRef<HTMLElement, DropdownListItemProps>(
  function DropdownListItem(
    {
      isActive,
      isDisabled,
      isTitle,
      onClick,
      submenuToggleLabel,
      testId,
      ...props
    },
    refCallback,
  ) {
    // We're not dealing with React RefObjects but with useState (because we
    // want to re-render on all changes)
    const setReference = refCallback as React.Dispatch<
      React.SetStateAction<HTMLLIElement | null>
    >;

    const renderSubmenuToggle = useCallback(() => {
      const { onEnter, onLeave, onFocus, children, ...otherProps } = props;

      return (
        <React.Fragment>
          <button
            type="button"
            data-test-id="cf-ui-dropdown-submenu-toggle"
            className={styles['DropdownListItem__button']}
            onClick={onClick}
            onMouseEnter={onEnter}
            onFocus={onFocus}
            onMouseLeave={onLeave}
            {...otherProps}
          >
            <TabFocusTrap
              className={styles['DropdownListItem__button__inner-wrapper']}
            >
              {submenuToggleLabel}
            </TabFocusTrap>
          </button>
          {children}
        </React.Fragment>
      );
    }, [onClick, props, submenuToggleLabel]);

    const renderListItem = useCallback(() => {
      const { onMouseDown, href, children, listItemRef, ...otherProps } = props;

      const isClickable = onClick || onMouseDown || href;

      if (isClickable) {
        const Element = href ? 'a' : 'button';

        const buttonProps = {
          disabled: isDisabled,
          'aria-disabled': isDisabled,
        };

        const linkProps = {
          href,
        };

        return (
          <Element
            onClick={!isDisabled && onClick !== undefined ? onClick : undefined}
            onMouseDown={
              !isDisabled && onMouseDown !== undefined ? onMouseDown : undefined
            }
            type="button"
            {...(href ? linkProps : buttonProps)}
            {...otherProps}
            className={styles['DropdownListItem__button']}
            data-test-id="cf-ui-dropdown-list-item-button"
          >
            <TabFocusTrap
              className={styles['DropdownListItem__button__inner-wrapper']}
            >
              {children}
            </TabFocusTrap>
          </Element>
        );
      }

      return children;
    }, [isDisabled, onClick, props]);

    const { className, listItemRef, onMouseDown, href } = props;

    const classNames = cn(styles['DropdownListItem'], className, {
      [styles['DropdownListItem__submenu-toggle']]:
        submenuToggleLabel || onClick || onMouseDown || href,
      [styles['DropdownListItem--disabled']]: isDisabled,
      [styles['DropdownListItem--active']]: isActive,
      [styles['DropdownListItem--title']]: isTitle,
    });

    return (
      <li
        className={classNames}
        data-test-id={testId}
        role="menuitem"
        ref={(node) => {
          if (setReference) {
            setReference(node);
          }

          if (listItemRef) {
            listItemRef.current = node;
          }
        }}
      >
        {submenuToggleLabel ? renderSubmenuToggle() : renderListItem()}
      </li>
    );
  },
);

DropdownListItem.displayName = 'DropdownListItem';

DropdownListItem.defaultProps = {
  testId: 'cf-ui-dropdown-list-item',
  isDisabled: false,
  isActive: false,
  isTitle: false,
};

export default DropdownListItem;
