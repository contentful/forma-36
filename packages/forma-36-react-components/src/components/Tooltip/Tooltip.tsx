import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  Component,
  MouseEvent,
  FocusEvent,
} from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
// import ReactTooltip from 'react-tooltip';
import cn from 'classnames';
import InViewport from '../InViewport';
import styles from './Tooltip.css';

interface TooltipContainerProps {
  children: React.ReactNode;
  setRef?: Function;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  containerElement?: any;
  targetWrapperClassName?: string;
  onMouseLeave?: Function;
  onMouseOver?: Function;
  onFocus?: Function;
  onBlur?: Function;
}

const TooltipContainer = forwardRef<HTMLElement, TooltipContainerProps>(
  (props: TooltipContainerProps, ref) => {
    const {
      children,
      setRef,
      containerElement: ContainerElement,
      targetWrapperClassName,
      ...otherProps
    } = props;

    return (
      <ContainerElement
        ref={setRef || ref}
        className={cn(
          styles['Tooltip__target-wrapper'],
          targetWrapperClassName,
        )}
        {...otherProps}
      >
        {children}
      </ContainerElement>
    );
  },
);
TooltipContainer.displayName = 'TooltipContainer';

export type TooltipPlace = 'top' | 'bottom' | 'right' | 'left';

export interface TooltipProps {
  children: React.ReactNode;
  place?: TooltipPlace;
  containerElement?: React.ReactNode;
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
}

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
  place: TooltipPlace;
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

export class TooltipOLD extends Component<TooltipProps, TooltipState> {
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

export const Tooltip = ({ content, children }: TooltipProps) => {
  const [inHover, setHover] = useState(false);
  const [arrowPosition, setArrowPosition] = useState<{
    top: string;
    left: string;
  }>(getArrowPosition('bottom'));

  const elementRef = useRef(null);
  const popperRef = useRef(null);
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);
  const { styles: popperStyles, attributes } = usePopper(
    elementRef.current,
    popperRef.current,
    {
      modifiers: [
        { name: 'arrow', options: { element: arrowRef } },
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    },
  );

  useEffect(() => {
    if (attributes.popper) {
      const newPosition = getArrowPosition(
        attributes.popper['data-popper-placement'],
      );
      setArrowPosition(newPosition);
    }
  }, [attributes.popper]);

  const arrowStyles = {
    ...popperStyles.arrow,
    ...arrowPosition,
    transform: 'rotate(45deg)',
  };

  return (
    <>
      <span
        ref={elementRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </span>

      <div
        ref={popperRef}
        style={{ ...popperStyles.popper }}
        aria-hidden={inHover ? 'true' : 'false'}
        className={cn(styles['Tooltip'], {
          [styles['Tooltip--hidden']]: !inHover,
        })}
        {...attributes.popper}
      >
        {content}
        <div
          ref={setArrowRef}
          style={arrowStyles}
          className={styles.Tooltip__arrow}
        />
      </div>
    </>
  );
};

function getArrowPosition(popperPlacement: string) {
  // the arrow is 10x10, that's why we need the -5px to correct its center
  switch (popperPlacement) {
    case 'top':
      return { top: 'calc(100% - 5px)', left: 'calc(50% - 5px)' }; // arrow will be V
    case 'right':
      return { top: 'calc(50% - 5px)', left: '-5px' }; // arrow will be <
    case 'left':
      return { top: 'calc(50% - 5px)', left: 'calc(100% - 5px)' }; // arrow will be >
    default:
      return { top: '-5px', left: 'calc(50% - 5px)' }; // arrow will be ^
  }
}

export default Tooltip;
