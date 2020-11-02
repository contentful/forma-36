import React, {
  forwardRef,
  MouseEventHandler,
  FocusEventHandler,
  MouseEvent as ReactMouseEvent,
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
  (
    {
      children,
      isActive,
      isDisabled,
      isTitle,
      onClick,
      onEnter,
      onFocus,
      onLeave,
      style,
      submenuToggleLabel,
      testId,
      ...props
    },
    refCallback,
  ) => {
    const { className, href, listItemRef, onMouseDown, ...otherProps } = props;
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
      const { onMouseDown, href, listItemRef, ...otherProps } = props;

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
            className={styles['DropdownListItem__button']}
            data-test-id="cf-ui-dropdown-list-item-button"
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
            {...otherProps}
          >
            <TabFocusTrap
              className={styles['DropdownListItem__button__inner-wrapper']}
            >
              {children}
            </TabFocusTrap>
          </Element>
        );
      }

      return <span {...otherProps}>{children}</span>;
    }, [children, isDisabled, onClick, props]);

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
              className={styles['DropdownListItem__button']}
              data-test-id="cf-ui-dropdown-submenu-toggle"
              onClick={onClick}
              onFocus={onFocus}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              type="button"
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
