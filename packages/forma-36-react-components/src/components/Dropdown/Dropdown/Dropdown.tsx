import React, { Component } from 'react';
import cn from 'classnames';
import DropdownListItem from '../DropdownListItem/DropdownListItem';
import DropdownContainer from '../DropdownContainer';
import isBrowser from '../../../utils/isBrowser';
import styles from './Dropdown.css';

export type positionType =
  | 'top'
  | 'right'
  | 'left'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-right'
  | 'top-left';

export type DropdownProps = {
  toggleElement?: React.ReactNode;
  submenuToggleLabel?: string;
  position: positionType;
  isOpen: boolean;
  onClose?: Function;
  testId?: string;
  dropdownContainerClassName?: string;
  getContainerRef?: (ref: HTMLElement | null) => void;
  className?: string;
  children: React.ReactNode;
} & typeof defaultProps;

export interface AnchorDimensionsAndPositonType {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface DropdownState {
  isOpen: boolean;
  position: positionType;
  anchorDimensionsAndPositon?: AnchorDimensionsAndPositonType;
}

const defaultProps = {
  testId: 'cf-ui-dropdown',
  position: 'bottom-left',
  isOpen: false,
  getContainerRef: () => {},
};

export class Dropdown extends Component<DropdownProps, DropdownState> {
  static defaultProps = defaultProps;

  state = {
    isOpen: this.props.isOpen,
    position: this.props.position,
    anchorDimensionsAndPositon: {
      top: 0,
      left: 0,
      height: 0,
      width: 0,
    },
  };

  dropdownAnchor: HTMLDivElement | null = null;

  componentDidMount() {
    if (!isBrowser) {
      return;
    }
    this.setAnchorDimensions();
    this.bindEventListeners();
  }

  setAnchorDimensions = () => {
    if (this.dropdownAnchor) {
      const dropdownAnchorRect = this.dropdownAnchor.getBoundingClientRect();
      this.setState({
        anchorDimensionsAndPositon: {
          top: dropdownAnchorRect.top,
          left: dropdownAnchorRect.left,
          width: dropdownAnchorRect.width,
          height: dropdownAnchorRect.height,
        },
      });
    }
  };

  componentWillReceiveProps(newProps: DropdownProps) {
    this.setState({
      isOpen: newProps.isOpen,
    });
  }

  componentDidUpdate(prevProps: DropdownProps) {
    if (!isBrowser) {
      return;
    }

    if (prevProps.isOpen !== this.props.isOpen) {
      this.setAnchorDimensions();
    }

    this.bindEventListeners();
  }

  bindEventListeners = () => {
    if (this.state.isOpen) {
      document.addEventListener('keydown', this.handleEscapeKey, true);
      window.addEventListener('resize', this.setAnchorDimensions, true);
      document.addEventListener('scroll', this.setAnchorDimensions, true);
    } else {
      document.removeEventListener('keydown', this.handleEscapeKey, true);
      window.removeEventListener('resize', this.setAnchorDimensions, true);
      document.removeEventListener('scroll', this.setAnchorDimensions, true);
    }
  };

  componentWillUnmount() {
    if (!isBrowser) {
      return;
    }

    document.removeEventListener('keydown', this.handleEscapeKey, true);
    window.removeEventListener('resize', this.setAnchorDimensions, true);
    document.removeEventListener('scroll', this.setAnchorDimensions, true);
  }

  openMenu = (isOpen: boolean) => {
    this.setState({ isOpen });
  };

  handleEscapeKey = (event: KeyboardEvent) => {
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

  openSubmenu = (isOpen: boolean) => {
    if (this.props.submenuToggleLabel) {
      this.openMenu(isOpen);
    }
  };

  render() {
    const {
      className,
      toggleElement,
      testId,
      submenuToggleLabel,
      getContainerRef,
      dropdownContainerClassName,
      children,
      isOpen,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['Dropdown'], className);

    return submenuToggleLabel ? (
      <DropdownListItem
        testId={testId}
        submenuToggleLabel={submenuToggleLabel}
        onEnter={() => this.openMenu(true)}
        onLeave={() => this.openMenu(false)}
        {...otherProps}
      >
        {toggleElement}
        {this.state.isOpen && (
          <DropdownContainer
            anchorDimensionsAndPositon={this.state.anchorDimensionsAndPositon}
            position={this.props.position}
            className={dropdownContainerClassName}
            getRef={getContainerRef}
            dropdownAnchor={this.dropdownAnchor}
            onClose={this.props.onClose}
            openSubmenu={this.openSubmenu}
            submenu
          >
            {this.props.children}
          </DropdownContainer>
        )}
      </DropdownListItem>
    ) : (
      <div
        data-test-id={testId}
        className={classNames}
        ref={ref => {
          if (!submenuToggleLabel) {
            this.dropdownAnchor = ref;
          }
        }}
        {...otherProps}
      >
        {toggleElement}
        {this.state.isOpen && (
          <DropdownContainer
            className={dropdownContainerClassName}
            getRef={getContainerRef}
            submenu={false}
            dropdownAnchor={this.dropdownAnchor}
            anchorDimensionsAndPositon={this.state.anchorDimensionsAndPositon}
            onClose={this.props.onClose}
            openSubmenu={this.openSubmenu}
            position={this.props.position}
          >
            {this.props.children}
          </DropdownContainer>
        )}
      </div>
    );
  }
}

export default Dropdown;
