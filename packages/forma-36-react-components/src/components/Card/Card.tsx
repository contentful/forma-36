import React, {
  Component,
  MouseEventHandler,
  MouseEvent as ReactMouseEvent,
} from 'react';
import cn from 'classnames';
import styles from './Card.css';

export interface BaseCardProps {
  /**
   * Used to make the decision of either rendering the card as a link tag or as a div tag
   */
  href?: string;
  /**
   * Used with href to specify target attribute value
   */
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  /**
   * Applies selected styles to the element
   */
  selected?: boolean;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
}

interface CardPropTypes extends BaseCardProps {
  /**
   * The action to be performed on click of the Card component
   */
  onClick?: MouseEventHandler<HTMLElement>;
  /**
   * Applies padding styles of different sizes
   */
  padding?: 'default' | 'large' | 'none';
  /**
   * The title of the entry
   */
  title?: string;
  /**
   * Any additional styles that are being applied
   */
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const defaultProps: Partial<CardPropTypes> = {
  padding: 'default',
  testId: 'cf-ui-card',
  selected: false,
};

export class Card extends Component<CardPropTypes> {
  static defaultProps = defaultProps;

  handleClick = (event: ReactMouseEvent<HTMLElement>) => {
    if (!this.props.onClick) return;

    this.props.onClick(event);
  };

  render() {
    const {
      className,
      testId,
      children,
      href,
      target,
      onClick,
      padding,
      selected,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Card, className, {
      [styles[`Card--padding-${padding}`]]: padding,
      [styles['Card--is-interactive']]: onClick || href,
      [styles['Card--is-selected']]: selected,
    });

    const Element: React.ReactType = href ? 'a' : 'div';
    return React.createElement(
      Element,
      {
        href,
        target: href && target,
        className: classNames,
        onClick: this.handleClick,
        'data-test-id': testId,
        ...otherProps,
      },
      children,
    );
  }
}

export default Card;
