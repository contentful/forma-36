import React, { ReactNode, MouseEvent, KeyboardEvent } from 'react';
import cn from 'classnames';

import styles from './Card.css';

export interface BaseCardProps {
  /**
   * Used to make the decision of either rendering the card as a link tag or as a div tag
   */
  href?: string;
  /**
   * Used with href to define a relationship between a linked resource and the current document
   */
  rel?: string;
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
  /**
   * Child nodes to be rendered in the component
   */
  children?: ReactNode;
}

export interface CardProps extends BaseCardProps {
  /**
   * The action to be performed when user clicks on the Card
   */
  onClick?: (e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
  /**
   * Applies padding styles of different sizes
   */
  padding?: 'default' | 'large' | 'none';
  /**
   * The title of the entry. It will also be used as aria-label
   */
  title?: string;
  /**
   * Any additional styles that are being applied
   */
  style?: React.CSSProperties;
  /**
   * If the card is selectable and has no title, it will need a aria-label to help screen readers identify it
   */
  ariaLabel?: string;
}

export const Card = ({
  className,
  testId = 'cf-ui-card',
  children,
  href,
  rel = 'noreferrer',
  target,
  onClick,
  padding = 'default',
  selected = false,
  ariaLabel,
  ...otherProps
}: CardProps) => {
  const classNames = cn(styles.Card, className, {
    [styles[`Card--padding-${padding}`]]: padding,
    [styles['Card--is-interactive']]: onClick || href,
    [styles['Card--is-selected']]: selected,
  });

  const Element: React.ElementType = href ? 'a' : 'div';

  const handleClick = onClick
    ? (event: MouseEvent<HTMLElement>) => onClick(event)
    : undefined;

  const handleKeyDown = onClick
    ? (event: KeyboardEvent<HTMLElement>) => {
        if (
          event.nativeEvent.code === 'Enter' ||
          event.nativeEvent.code === 'Space'
        ) {
          onClick(event);
          event.currentTarget.focus();
        }
      }
    : undefined;

  return (
    <Element
      className={classNames}
      href={href}
      rel={rel}
      target={target}
      data-test-id={testId}
      aria-label={otherProps.title || ariaLabel}
      aria-pressed={onClick ? (selected ? 'true' : 'false') : undefined}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...otherProps}
    >
      {children}
    </Element>
  );
};
