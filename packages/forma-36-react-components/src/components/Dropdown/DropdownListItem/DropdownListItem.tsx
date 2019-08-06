import React, {
  Component,
  MouseEventHandler,
  FocusEventHandler,
  MouseEvent as ReactMouseEvent,
} from 'react';
import cn from 'classnames';
import TabFocusTrap from '../../TabFocusTrap/TabFocusTrap';
import styles from './DropdownListItem.css';

export type DropdownListItemProps = {
  isDisabled: boolean;
  isActive: boolean;
  isTitle: boolean;
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
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-dropdown-list-item',
  isDisabled: false,
  isActive: false,
  isTitle: false,
};

export class DropdownListItem extends Component<DropdownListItemProps> {
  static defaultProps = defaultProps;

  renderSubmenuToggle = () => {
    const { onClick, onEnter, onLeave, onFocus, ...otherProps } = this.props;
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
            {this.props.submenuToggleLabel}
          </TabFocusTrap>
        </button>
        {this.props.children}
      </React.Fragment>
    );
  };

  renderListItem = () => {
    const {
      onClick,
      onMouseDown,
      href,
      isDisabled,
      children,
      isTitle,
      isActive,
      testId,
      ...otherProps
    } = this.props;

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
          type="button"
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
          {...(href ? linkProps : buttonProps)}
          {...otherProps}
          data-test-id="cf-ui-dropdown-list-item-button"
          className={styles['DropdownListItem__button']}
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
  };

  render() {
    const {
      className,
      isDisabled,
      testId,
      isActive,
      onClick,
      onMouseDown,
      href,
      submenuToggleLabel,
      isTitle,
    } = this.props;

    const classNames = cn(styles['DropdownListItem'], className, {
      [styles['DropdownListItem__submenu-toggle']]:
        submenuToggleLabel || onClick || onMouseDown || href,
      [styles['DropdownListItem--disabled']]: isDisabled,
      [styles['DropdownListItem--active']]: isActive,
      [styles['DropdownListItem--title']]: isTitle,
    });

    return (
      <li className={classNames} data-test-id={testId}>
        {submenuToggleLabel
          ? this.renderSubmenuToggle()
          : this.renderListItem()}
      </li>
    );
  }
}

export default DropdownListItem;
