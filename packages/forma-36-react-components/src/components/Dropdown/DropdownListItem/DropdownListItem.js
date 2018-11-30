import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import TabFocusTrap from '../../TabFocusTrap/TabFocusTrap';
import styles from './DropdownListItem.css';

class DropdownListItem extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    testId: PropTypes.string,
    onMouseDown: PropTypes.func,
    submenuToggleLabel: PropTypes.string,
    onFocus: PropTypes.func,
    onLeave: PropTypes.func,
    onEnter: PropTypes.func,
    isDisabled: PropTypes.bool,
    isActive: PropTypes.bool,
    isTitle: PropTypes.bool,
  };

  static defaultProps = {
    extraClassNames: undefined,
    submenuToggleLabel: undefined,
    onClick: undefined,
    testId: 'cf-ui-dropdown-list-item',
    onMouseDown: undefined,
    onFocus: undefined,
    onLeave: () => {},
    onEnter: () => {},
    isDisabled: false,
    isActive: false,
    isTitle: false,
  };

  renderSubmenuToggle = () => (
    <React.Fragment>
      <button
        data-test-id="cf-ui-dropdown-submenu-toggle"
        className={styles['DropdownListItem__toggle-button']}
        onClick={this.props.onClick}
        onMouseEnter={this.props.onEnter}
        onFocus={this.props.onEnter}
        onMouseLeave={this.props.onLeave}
        {...this.otherProps}
      >
        <TabFocusTrap
          extraClassNames={
            styles['DropdownListItem__toggle-button__inner-wrapper']
          }
        >
          {this.props.submenuToggleLabel}
        </TabFocusTrap>
      </button>
      {this.props.children}
    </React.Fragment>
  );

  renderListItem = () =>
    this.props.onClick || this.props.onMouseDown ? (
      <button
        data-test-id="cf-ui-dropdown-list-item-button"
        className={styles['DropdownListItem__toggle-button']}
        onClick={e => {
          if (!this.props.isDisabled && this.props.onClick) {
            this.props.onClick(e);
          }
        }}
        onMouseDown={e => {
          if (!this.props.isDisabled && this.props.onMouseDown) {
            this.props.onMouseDown(e);
          }
        }}
      >
        <TabFocusTrap
          extraClassNames={
            styles['DropdownListItem__toggle-button__inner-wrapper']
          }
        >
          {this.props.children}
        </TabFocusTrap>
      </button>
    ) : (
      this.props.children
    );

  render() {
    const {
      extraClassNames,
      isDisabled,
      testId,
      isActive,
      onClick,
      onMouseDown,
      submenuToggleLabel,
      isTitle,
    } = this.props;

    const classNames = cn(styles.DropdownListItem, extraClassNames, {
      [styles['DropdownListItem__submenu-toggle']]:
        submenuToggleLabel || onClick || onMouseDown,
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
