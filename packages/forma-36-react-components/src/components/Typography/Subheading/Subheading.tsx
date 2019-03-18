import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Subheading.css';

import { TypographyContext } from '../Typography/Typography';

export type SubheadingProps = {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children?: React.ReactNode;
  testId?: string;
  style?: React.CSSProperties;
} & typeof defaultProps;

const defaultProps = {
  element: 'h2',
  testId: 'cf-ui-subheading',
};

export class Subheading extends Component<SubheadingProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, element, ...otherProps } = this.props;

    const classNames = cn(styles['Subheading'], className);

    const Element = element;

    return (
      <TypographyContext.Consumer>
        {value => {
          return (
            <Element
              className={cn(classNames, [
                value['subheading'] &&
                  `f36-margin-bottom--${value['subheading']['spacing']}`,
              ])}
              data-test-id={testId}
              {...otherProps}
            >
              {children}
            </Element>
          );
        }}
      </TypographyContext.Consumer>
    );
  }
}

export default Subheading;
