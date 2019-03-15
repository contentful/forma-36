import React, {
  Component,
  MouseEventHandler,
  MouseEvent as ReactMouseEvent,
} from 'react';
import cn from 'classnames';
const styles = require('./Card.css');

export type CardPropTypes = {
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  padding?: 'default' | 'large' | 'none';
  selected?: boolean;
  title?: string;
  style?: React.CSSProperties;
  extraClassNames?: string;
  testId?: string;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
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
    return React.createElement(
      Element,
      {
        href,
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
