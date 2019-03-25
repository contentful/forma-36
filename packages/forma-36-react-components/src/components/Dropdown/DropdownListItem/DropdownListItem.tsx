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
    const isClickable =
      this.props.onClick || this.props.onMouseDown || this.props.href;

    if (isClickable) {
      const Element = this.props.href ? 'a' : 'button';

      return (
        <Element
          type="button"
          href={this.props.href}
          data-test-id="cf-ui-dropdown-list-item-button"
          className={styles['DropdownListItem__button']}
          onClick={(e: ReactMouseEvent) => {
            if (!this.props.isDisabled && this.props.onClick) {
              this.props.onClick(e);
            }
          }}
          onMouseDown={(e: ReactMouseEvent) => {
            if (!this.props.isDisabled && this.props.onMouseDown) {
              this.props.onMouseDown(e);
            }
          }}
        >
          <TabFocusTrap
            className={styles['DropdownListItem__button__inner-wrapper']}
          >
            {this.props.children}
          </TabFocusTrap>
        </Element>
      );
    }

    return this.props.children;
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
