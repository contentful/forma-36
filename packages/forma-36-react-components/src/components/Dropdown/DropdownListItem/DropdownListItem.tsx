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
      children,
      className,
      href,
      isActive,
      isDisabled,
      isTitle,
      listItemRef,
      onClick,
      onEnter,
      onFocus,
      onLeave,
      onMouseDown,
      style,
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
    const classNames = cn(styles['DropdownListItem'], className, {
      [styles['DropdownListItem__submenu-toggle']]:
        submenuToggleLabel || onClick || onMouseDown || href,
      [styles['DropdownListItem--disabled']]: isDisabled,
      [styles['DropdownListItem--active']]: isActive,
      [styles['DropdownListItem--title']]: isTitle,
    });

    const renderListItem = useCallback(() => {
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
            onClick={(e: ReactMouseEvent) => {
              if (!isDisabled && onClick) {
                onClick(e);
              }
            }}
            onMouseDown={(e: ReactMouseEvent) => {
              if (!isDisabled && onMouseDown) {
                onMouseDown(e);
              }
            }}
            type="button"
            {...(href ? linkProps : buttonProps)}
            {...props}
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

      return <span {...props}>{children}</span>;
    }, [children, href, isDisabled, onClick, onMouseDown, props]);

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
        style={style}
      >
        {submenuToggleLabel ? (
          <React.Fragment>
            <button
              onClick={onClick}
              onFocus={onFocus}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              type="button"
              {...props}
              className={styles['DropdownListItem__button']}
              data-test-id="cf-ui-dropdown-submenu-toggle"
            >
              <TabFocusTrap
                className={styles['DropdownListItem__button__inner-wrapper']}
              >
                {submenuToggleLabel}
              </TabFocusTrap>
            </button>
            {children}
          </React.Fragment>
        ) : (
          renderListItem()
        )}
      </li>
    );
  },
);

DropdownListItem.defaultProps = {
  testId: 'cf-ui-dropdown-list-item',
  isDisabled: false,
  isActive: false,
  isTitle: false,
};

export default DropdownListItem;
