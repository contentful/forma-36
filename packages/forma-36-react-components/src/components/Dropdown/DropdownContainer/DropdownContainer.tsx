import React, { Component } from 'react';
import cn from 'classnames';
import ReactDOM from 'react-dom';
import InViewport from '../../InViewport';
import {
  positionType,
  AnchorDimensionsAndPositonType,
} from '../Dropdown/Dropdown';

const styles = require('./DropdownContainer.css');

export type DropdownContainerProps = {
  onClose?: Function;
  dropdownAnchor?: HTMLElement | null;
  extraClassNames?: string;
  children?: React.ReactNode;
  testId?: string;
  openSubmenu?: (value: boolean) => void;
  anchorDimensionsAndPositon?: AnchorDimensionsAndPositonType;
  position: positionType;
  submenu?: boolean;
} & typeof defaultProps;

export interface DropdownState {
  dropdownDimensions: {
    width: number;
    height: number;
  };
  position: positionType;
}

const defaultProps = {
  testId: 'cf-ui-dropdown-portal',
  position: 'bottom-left',
  submenu: false,
};

class DropdownContainer extends Component<
  DropdownContainerProps,
  DropdownState
> {
  static defaultProps = defaultProps;

  portalTarget = document.createElement('div');
  dropdown: HTMLElement | null = null;
  lastOverflowAt: string | null = null;

  state = {
    position: this.props.position,
    dropdownDimensions: {
      width: 0,
      height: 0,
    },
  };

  componentDidMount() {
    document.body.appendChild(this.portalTarget);
    if (this.dropdown) {
      const dropdownRect = this.dropdown.getBoundingClientRect();
      this.setState({
        dropdownDimensions: {
          width: dropdownRect.width,
          height: dropdownRect.height,
        },
      });
    }
    document.addEventListener('mousedown', this.trackOutsideClick, true);
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalTarget);
    document.removeEventListener('mousedown', this.trackOutsideClick, true);
  }

  trackOutsideClick = (e: MouseEvent) => {
    if (
      this.dropdown &&
      !this.dropdown.contains(e.target as Node) &&
      (this.props.dropdownAnchor &&
        !this.props.dropdownAnchor.contains(e.target as Node))
    ) {
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  };

  handleOverflow = (overflowAt: string) => {
    if (overflowAt === this.lastOverflowAt) {
      return;
    }

    const resolutions = {
      right: {
        'bottom-left': 'bottom-right',
        'top-left': 'top-right',
        right: 'left',
      },
      left: {
        'bottom-right': 'bottom-left',
        'top-right': 'top-left',
        left: 'right',
      },
      top: {
        'top-left': 'bottom-left',
        'top-right': 'bottom-right',
      },
      bottom: {
        'bottom-left': 'top-left',
        'bottom-right': 'top-right',
      },
    };
    const currentPosition = this.state.position;
    this.setState(
      {
        position: resolutions[overflowAt][currentPosition],
      },
      () => {
        this.lastOverflowAt = overflowAt;
      },
    );
  };

  calculatePosition = () => {
    const { anchorDimensionsAndPositon } = this.props;
    const { dropdownDimensions, position } = this.state;

    if (!anchorDimensionsAndPositon || !dropdownDimensions) {
      return false;
    }

    switch (position) {
      case 'bottom-left':
        return {
          top:
            anchorDimensionsAndPositon.top + anchorDimensionsAndPositon.height,
          left: anchorDimensionsAndPositon.left,
        };
      case 'top-left':
        return {
          top: anchorDimensionsAndPositon.top - dropdownDimensions.height,
          left: anchorDimensionsAndPositon.left,
        };
      case 'bottom-right':
        return {
          top:
            anchorDimensionsAndPositon.top + anchorDimensionsAndPositon.height,
          left:
            anchorDimensionsAndPositon.left -
            (dropdownDimensions.width - anchorDimensionsAndPositon.width),
        };
      case 'top-right':
        return {
          top: anchorDimensionsAndPositon.top - dropdownDimensions.height,
          left:
            anchorDimensionsAndPositon.left -
            (dropdownDimensions.width - anchorDimensionsAndPositon.width),
        };
    }
  };

  getSubmenuClassNames = () =>
    cn(
      styles['DropdownContainer__submenu'],
      styles[`DropdownContainer__container-position--${this.state.position}`],
    );

  render() {
    const { submenu } = this.props;

    const classNames = cn(
      styles['DropdownContainer'],
      submenu ? this.getSubmenuClassNames() : '',
    );

    const dropdown = (
      <div
        ref={ref => {
          this.dropdown = ref;
        }}
        style={{
          ...(!submenu && this.calculatePosition()),
        }}
        className={classNames}
        onMouseEnter={() => {
          if (this.props.openSubmenu) {
            this.props.openSubmenu(true);
          }
        }}
        onFocus={() => {
          if (this.props.openSubmenu) {
            this.props.openSubmenu(true);
          }
        }}
        onMouseLeave={() => {
          if (this.props.openSubmenu) {
            this.props.openSubmenu(false);
          }
        }}
      >
        <InViewport
          onOverflowLeft={() => this.handleOverflow('left')}
          onOverflowRight={() => this.handleOverflow('right')}
          onOverflowTop={() => this.handleOverflow('top')}
          onOverflowBottom={() => this.handleOverflow('bottom')}
        >
          {this.props.children}
        </InViewport>
      </div>
    );

    return submenu
      ? dropdown
      : ReactDOM.createPortal(dropdown, this.portalTarget);
  }
}

export default DropdownContainer;
