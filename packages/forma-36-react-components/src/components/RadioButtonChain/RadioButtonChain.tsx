import React, { Children, Component } from 'react';
import cn from 'classnames';
import { RadioButtonFieldProps } from '../RadioButtonField/RadioButtonField';

const styles = require('./RadioButtonChain.css');

export type RadioButtonChainProps = {
  className?: string;
  children: React.ReactElement<RadioButtonFieldProps>;
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-radio-chain',
};

export class RadioButtonChain extends Component<RadioButtonChainProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    return (
      <div
        className={cn(styles.RadioButtonChain, className)}
        data-test-id={testId}
        {...otherProps}
      >
        {Children.map(
          children,
          (child: React.ReactElement<RadioButtonFieldProps>) =>
            React.cloneElement(child, {
              className: cn(
                child.props.className,
                styles.RadioButtonChain__item,
              ),
            }),
        )}
      </div>
    );
  }
}

export default RadioButtonChain;
