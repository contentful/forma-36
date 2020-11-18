import React, { MouseEventHandler, MouseEvent } from 'react';
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
   * The action to be performed when user clicks on the Card
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
}

const defaultProps: Partial<CardPropTypes> = {
  padding: 'default',
  testId: 'cf-ui-card',
  selected: false,
};

export const Card: React.FC<CardPropTypes> = ({
  className,
  testId,
  children,
  href,
  target,
  onClick,
  padding,
  selected,
  ...otherProps
}) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (!onClick) return;

    onClick(event);
  };

  const classNames = cn(styles.Card, className, {
    [styles[`Card--padding-${padding}`]]: padding,
    [styles['Card--is-interactive']]: onClick || href,
    [styles['Card--is-selected']]: selected,
  });

  const Element: React.ElementType = href ? 'a' : 'div';

  return React.createElement(
    Element,
    {
      href,
      target: href && target,
      'data-test-id': testId,
      className: classNames,
      ...(!!onClick && { onClick: handleClick }),
      ...otherProps,
    },
    children,
  );
};
Card.defaultProps = defaultProps;

export default Card;
