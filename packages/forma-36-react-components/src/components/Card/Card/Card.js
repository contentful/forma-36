import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Card.css';

class Card extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
    testId: PropTypes.string,
    padding: PropTypes.oneOf(['default', 'large', 'none']),
  };

  static defaultProps = {
    extraClassNames: undefined,
    href: undefined,
    onClick: undefined,
    padding: 'default',
    testId: 'cf-ui-card',
  };

  state = {
    selected: false,
  };

  handleClick = event => {
    if (!this.props.onClick) return;

    this.setState({ selected: !this.state.selected });
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
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Card, extraClassNames, {
      [styles[`Card--padding-${padding}`]]: padding,
      [styles['Card--is-interactive']]: onClick || href,
      [styles['Card--is-selected']]: this.state.selected,
    });

    const Element = href ? 'a' : 'div';

    return (
      <Element
        className={classNames}
        onClick={this.handleClick}
        onBlur={() => {
          this.setState({ selected: false });
        }}
        data-test-id={testId}
        href={href}
        {...otherProps}
      >
        {children}
      </Element>
    );
  }
}

export default Card;
