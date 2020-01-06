import React, { Children, Component } from 'react';
import cn from 'classnames';
import { RadioButtonFieldProps } from '../RadioButtonField/RadioButtonField';

const styles = require('./RadioButtonChain.css');

export type RadioButtonChainProps = {
  className?: string;
  children: React.ReactElement<RadioButtonFieldProps>[];
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-radio-chain',
};

export class RadioButtonChain extends Component<RadioButtonChainProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    const chainClassName = cn(
      styles.RadioButtonChain,
      children.length <= 2 ? styles.RadioButtonChain__relative : null,
      className,
    );

    return (
      <div className={chainClassName} data-test-id={testId} {...otherProps}>
        {Children.map(
          children,
          (child: React.ReactElement<RadioButtonFieldProps>) =>
            React.cloneElement(child, {
              className: cn(
                child.props.className,
                // make radiobutton vertically aligned
                styles.RadioButtonChain__item,
                // if more than 2 items, we set flex-grow on 1st and last item to 0, while all in the middle are flex-grow: 1
                // to ensure that the chain is fluid and it starts and ends on the opposite edges of the container block
                children.length > 2
                  ? styles.RadioButtonChain__item__relative
                  : null,
                // if 1 child, it will be just rendered as a standard radiobutton field
                // otherwise - it will spread it's wings to it's neighbour to the right
                children.length > 1
                  ? styles.RadioButtonChain__item__link
                  : null,
              ),
            }),
        )}
      </div>
    );
  }
}

export default RadioButtonChain;
