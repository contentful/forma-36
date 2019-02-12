import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
const styles = require('./Card.css');

interface CardPropTypes {
  extraClassNames?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: (
    e: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>,
  ) => void;
  testId?: string;
  padding?: 'default' | 'large' | 'none';
  selected?: boolean;
  title?: string;
}

export class Card extends Component<CardPropTypes> {
  static defaultProps = {
    extraClassNames: undefined,
    href: undefined,
    onClick: undefined,
    padding: 'default',
    testId: 'cf-ui-card',
    selected: false,
  };

  handleClick = event => {
    if (!this.props.onClick) return;

    this.props.onClick(event);
  };

  render() {
    const {
      extraClassNames,
      testId,
      children,
      href,
      onClick,
      padding,
      selected,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Card, extraClassNames, {
      [styles[`Card--padding-${padding}`]]: padding,
      [styles['Card--is-interactive']]: onClick || href,
      [styles['Card--is-selected']]: selected,
    });

    const Element: React.ReactType = href ? 'a' : 'div';
    return React.createElement(Element, {
      href,
      className: classNames,
      onClick: this.handleClick,
      'data-test-id': testId,
      ...otherProps,
      children,
    });
  }
}

export default Card;
