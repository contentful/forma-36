import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import AnimateHeight from 'react-animate-height';
import Card from '../Card';
import Spinner from '../../Spinner';
import styles from './CardLoading.css';

class CardLoading extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    title: 'Untitled',
    testId: 'cf-ui-embedded-card',
    isLoading: undefined,
    onClick: undefined,
    extraClassNames: undefined,
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
      children,
      testId,
      isLoading,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.CardLoading, extraClassNames, {
      [styles['CardLoading--is-loading']]: isLoading,
    });

    return (
      <AnimateHeight
        height={isLoading ? 120 : 'auto'}
        duration={100}
        easing="ease-in-out"
      >
        <Card
          extraClassNames={classNames}
          testId={testId}
          onClick={!isLoading && (event => this.handleClick(event))}
          selected={this.state.selected}
          {...otherProps}
        >
          <CSSTransition
            timeout={100}
            in={isLoading}
            classNames={{
              enter: styles['CardLoading--enter'],
              enterActive: styles['CardLoading__spinner--enter-active'],
              exit: styles['CardLoading__spinner--exit'],
              exitActive: styles['CardLoading__spinner--exit-active'],
            }}
            mountOnEnter
            unmountOnExit
          >
            <Spinner extraClassNames={styles.CardLoading__spinner} />
          </CSSTransition>
          <CSSTransition
            timeout={100}
            in={!isLoading}
            classNames={{
              enter: styles['CardLoading__wrapper--enter'],
              enterActive: styles['CardLoading__wrapper--enter-active'],
              exit: styles['CardLoading__wrapper--exit'],
              exitActive: styles['CardLoading__wrapper--exit-active'],
            }}
            mountOnEnter
            unmountOnExit
          >
            <React.Fragment>{children}</React.Fragment>
          </CSSTransition>
        </Card>
      </AnimateHeight>
    );
  }
}

export default CardLoading;
