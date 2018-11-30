import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DropdownListItem from '../DropdownListItem/DropdownListItem';
import isBrowser from '../../../utils/isBrowser';
import InViewport from '../../InViewport';
import styles from './Dropdown.css';

class Dropdown extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    toggleElement: PropTypes.node,
    testId: PropTypes.string,
    submenuToggleLabel: PropTypes.string,
    position: PropTypes.oneOf([
      'top',
      'right',
      'left',
      'bottom-left',
      'bottom-right',
      'top-right',
      'top-left',
    ]),
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    extraClassNames: undefined,
    submenuToggleLabel: undefined,
    testId: 'cf-ui-dropdown',
    toggleElement: undefined,
    position: 'bottom-left',
    isOpen: false,
    onClose: undefined,
  };

  state = {
    isOpen: this.props.isOpen,
    position: this.props.position,
  };

  componentDidMount() {
    if (!isBrowser) {
      return;
    }

    if (this.state.isOpen) {
      document.addEventListener('click', this.trackOutsideClick, true);
      document.addEventListener('keydown', this.handleEscapeKey, true);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      isOpen: newProps.isOpen,
    });
  }

  componentDidUpdate() {
    if (!isBrowser) {
      return;
    }

    if (this.state.isOpen) {
      document.addEventListener('click', this.trackOutsideClick, true);
      document.addEventListener('keydown', this.handleEscapeKey, true);
    } else {
      document.removeEventListener('click', this.trackOutsideClick, true);
      document.removeEventListener('keydown', this.handleEscapeKey, true);
    }
  }

  componentWillUnmount() {
    if (!isBrowser) {
      return;
    }

    document.removeEventListener('click', this.trackOutsideClick, true);
    document.removeEventListener('keydown', this.handleEscapeKey, true);
  }

  lastPosition = null;

  openMenu = isOpen => {
    this.setState({ isOpen });
  };

  handleEscapeKey = event => {
    const ESCAPE_KEYCODE = 27;

    if (event.keyCode === ESCAPE_KEYCODE) {
      event.stopPropagation();

      this.setState({
        isOpen: false,
      });

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  };

  openSubmenu = isOpen => {
    if (this.props.submenuToggleLabel) {
      this.openMenu(isOpen);
    }
  };

  trackOutsideClick = e => {
    if (
      this.dropdown &&
      !this.dropdown.contains(e.target) &&
      this.state.isOpen
    ) {
      this.setState({
        isOpen: false,
      });

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  };

  handleHorizontalOverflow = horizontalPostition => {
    if (this.lastPosition !== horizontalPostition) {
      const oppositePosition =
        horizontalPostition === 'left' ? 'right' : 'left';
      this.setState(
        {
          position: this.state.position.replace(
            oppositePosition,
            horizontalPostition,
          ),
        },
        () => {
          this.lastPosition = horizontalPostition;
        },
      );
    }
  };

  renderDropdown = () => {
    const classNames = cn(
      styles.Dropdown__container,
      styles[`Dropdown__container-position--${this.state.position}`],
    );

    return (
      <div
        className={classNames}
        onMouseEnter={() => this.openSubmenu(true)}
        onFocus={() => this.openSubmenu(true)}
        onMouseLeave={() => this.openSubmenu(false)}
      >
        <InViewport
          onOverflowLeft={() => this.handleHorizontalOverflow('left')}
          onOverflowRight={() => this.handleHorizontalOverflow('right')}
        >
          {this.props.children}
        </InViewport>
      </div>
    );
  };

  render() {
    const {
      extraClassNames,
      toggleElement,
      testId,
      submenuToggleLabel,
      children,
      isOpen,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Dropdown, extraClassNames);

    return submenuToggleLabel ? (
      <DropdownListItem
        testId={testId}
        submenuToggleLabel={submenuToggleLabel}
        onEnter={() => this.openMenu(true)}
        onLeave={() => this.openMenu(false)}
        {...otherProps}
      >
        {toggleElement}
        {this.state.isOpen && this.renderDropdown()}
      </DropdownListItem>
    ) : (
      <div
        data-test-id={testId}
        className={classNames}
        ref={ref => {
          if (!submenuToggleLabel) {
            this.dropdown = ref;
          }
        }}
        {...otherProps}
      >
        {toggleElement}
        {this.state.isOpen && this.renderDropdown()}
      </div>
    );
  }
}

export default Dropdown;
