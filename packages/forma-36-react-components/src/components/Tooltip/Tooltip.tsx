import React, { Component, MouseEvent, FocusEvent } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import InViewport from '../InViewport';
import styles from './Tooltip.css';

interface TooltipContainerProps {
  children: React.ReactNode;
  setRef: Function;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  containerElement: any;
  targetWrapperClassName?: string;
  onMouseLeave: Function;
  onMouseOver: Function;
  onFocus: Function;
  onBlur: Function;
}

const TooltipContainer: React.StatelessComponent<TooltipContainerProps> = (
  props: TooltipContainerProps,
) => {
  const {
    children,
    setRef,
    containerElement,
    targetWrapperClassName,
    ...otherProps
  } = props;
  const ContainerElement = containerElement;
  return (
    <ContainerElement
      ref={setRef}
      className={cn(styles['Tooltip__target-wrapper'], targetWrapperClassName)}
      {...otherProps}
    >
      {children}
    </ContainerElement>
  );
};

export type TooltipPlace = 'top' | 'bottom' | 'right' | 'left';

export type TooltipProps = {
  children: React.ReactNode;
  containerElement?: React.ReactNode;
  place?: TooltipPlace;
  isVisible?: boolean;
  maxWidth?: number | string;
  testId?: string;
  id?: string;
  className?: string;
  content?: React.ReactNode;
  targetWrapperClassName?: string;
  onMouseOver?: Function;
  onMouseLeave?: Function;
  onFocus?: Function;
  onBlur?: Function;
} & typeof defaultProps;

interface TooltipState {
  isVisible?: boolean;
}

const defaultProps = {
  containerElement: 'span',
  isVisible: false,
  testId: 'cf-ui-tooltip',
  place: 'top',
  maxWidth: 360,
};

interface TooltipWrapperProps {
  children: React.ReactNode;
  containerDomNode?: HTMLElement;
  place?: TooltipPlace;
  isVisible?: boolean;
  id?: string;
  maxWidth?: number | string;
  className?: string;
  testId?: string;
  setPlace: Function;
}

class TooltipWrapper extends Component<TooltipWrapperProps> {
  tooltipDomNode?: HTMLDivElement;
  containerDomNode?: HTMLSpanElement;

  state = {
    calculatedPosition: { top: undefined, left: undefined },
  };

  componentDidMount() {
    this.setState({
      calculatedPosition: this.calculatePosition(),
    });
  }

  calculatePosition = () => {
    const { containerDomNode, place } = this.props;
    if (!containerDomNode || !this.tooltipDomNode) {
      return { top: undefined, left: undefined };
    }
    let calculatedPosition = {};
    const containerRect = containerDomNode.getBoundingClientRect();
    const tooltipRect = this.tooltipDomNode.getBoundingClientRect();
    const carretVerticalOffset = 20;
    const carretHorizontalOffset = 12;
    switch (place) {
      case 'top':
        calculatedPosition = {
          left:
            containerRect.left +
            (containerRect.width / 2 - tooltipRect.width / 2),
          top: containerRect.top - (tooltipRect.height + carretVerticalOffset),
        };
        break;
      case 'bottom':
        calculatedPosition = {
          left:
            containerRect.left +
            (containerRect.width / 2 - tooltipRect.width / 2),
          top: containerRect.top + containerRect.height,
        };
        break;
      case 'left':
        calculatedPosition = {
          left:
            containerRect.left - (tooltipRect.width + carretHorizontalOffset),
          top:
            containerRect.top +
            containerRect.height / 2 -
            tooltipRect.height / 2 -
            10, // Tooltip margin
        };
        break;
      case 'right':
        calculatedPosition = {
          left:
            containerRect.left + (containerRect.width + carretHorizontalOffset),
          top:
            containerRect.top +
            containerRect.height / 2 -
            tooltipRect.height / 2 -
            10, // Tooltip margin
        };
        break;
      default:
        calculatedPosition = {};
    }
    return calculatedPosition;
  };

  render() {
    const {
      isVisible,
      id,
      maxWidth,
      className,
      testId,
      setPlace,
      children,
    } = this.props;
    return (
      <div
        role="tooltip"
        id={id}
        aria-hidden={isVisible ? 'false' : 'true'}
        style={{
          ...this.state.calculatedPosition,
          maxWidth: maxWidth,
        }}
        ref={(ref: HTMLDivElement) => {
          this.tooltipDomNode = ref;
        }}
        contentEditable={false}
        onFocus={() => {
          this.setState({ isVisible: false });
        }}
        onMouseOver={() => {
          this.setState({ isVisible: false });
        }}
        className={className}
        data-test-id={testId}
      >
        <InViewport
          onOverflowTop={() => setPlace('bottom')}
          onOverflowLeft={() => setPlace('right')}
          onOverflowBottom={() => setPlace('top')}
          onOverflowRight={() => setPlace('left')}
        >
          {children}
        </InViewport>
      </div>
    );
  }
}

export class Tooltip extends Component<TooltipProps, TooltipState> {
  static defaultProps = defaultProps;
  portalTarget: HTMLDivElement | null = null;
  place: TooltipPlace = 'top';
  containerDomNode?: HTMLSpanElement;
  tooltipDomNode?: HTMLDivElement;
  state: Partial<TooltipState> = {
    isVisible: this.props.isVisible,
  };

  constructor(props: TooltipProps) {
    super(props);
    this.place = props.place;
  }

  componentWillMount() {
    if (typeof window !== `undefined`) {
      this.portalTarget = window.document.createElement('div');
      window.document.body.appendChild(this.portalTarget);
    }
  }

  componentDidMount() {
    if (this.props.isVisible) {
      this.setState({ isVisible: true });
    }
  }

  componentDidUpdate(prevProps: TooltipProps) {
    if (prevProps.content !== this.props.content) {
      this.forceUpdate();
    }
  }

  componentWillUnmount() {
    if (this.portalTarget) {
      window.document.body.removeChild(this.portalTarget);
    }
  }

  setPlace = (place: TooltipPlace) => {
    if (this.state.isVisible) {
      this.place = place;
      this.forceUpdate();
    }
  };

  renderTooltip = (content: React.ReactNode) => {
    if (!this.portalTarget) {
      return null;
    }
    const placeClass = `Tooltip--place-${this.place}`;
    const classNames = cn(
      styles['Tooltip'],
      styles[placeClass],
      this.props.className,
      {
        [styles['Tooltip--hidden']]: !this.state.isVisible,
      },
    );
    return ReactDOM.createPortal(
      <TooltipWrapper
        containerDomNode={this.containerDomNode}
        place={this.place}
        isVisible={this.state.isVisible}
        id={this.props.id}
        maxWidth={this.props.maxWidth}
        className={classNames}
        testId={this.props.testId}
        setPlace={this.setPlace}
      >
        {content}
      </TooltipWrapper>,
      this.portalTarget as Element,
    );
  };

  render() {
    const {
      className,
      targetWrapperClassName,
      content,
      onMouseLeave,
      onMouseOver,
      onFocus,
      containerElement,
      onBlur,
      children,
      place,
      isVisible,
      testId,
      maxWidth,
      ...otherProps
    } = this.props;
    return (
      <TooltipContainer
        containerElement={containerElement}
        onMouseOver={(e: MouseEvent) => {
          this.setState({ isVisible: true });
          if (onMouseOver) {
            onMouseOver(e);
          }
        }}
        onMouseLeave={(e: MouseEvent) => {
          this.setState({ isVisible: false });
          if (onMouseLeave) {
            onMouseLeave(e);
          }
        }}
        onFocus={(e: FocusEvent) => {
          this.setState({ isVisible: true });
          if (onFocus) {
            onFocus(e);
          }
        }}
        onBlur={(e: FocusEvent) => {
          this.setState({ isVisible: false });
          if (onBlur) {
            onBlur(e);
          }
        }}
        setRef={(ref: HTMLElement) => {
          this.containerDomNode = ref;
        }}
        targetWrapperClassName={targetWrapperClassName}
        aria-describedby={this.props.id}
        {...otherProps}
      >
        <React.Fragment>
          {children}
          {content && this.state.isVisible && this.renderTooltip(content)}
        </React.Fragment>
      </TooltipContainer>
    );
  }
}

export default Tooltip;
