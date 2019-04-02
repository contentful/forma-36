import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Heading.css';

import { TypographyContext } from '../Typography/Typography';

export type HeadingProps = {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  element: 'h1',
  testId: 'cf-ui-heading',
};

export class Heading extends Component<HeadingProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, element, ...otherProps } = this.props;

    const classNames = cn(styles['Heading'], className);

    const Element = element;

    return (
      <TypographyContext.Consumer>
        {value => {
          return (
            <Element
              className={cn(classNames, [
                value['heading'] &&
                  `f36-margin-bottom--${value['heading']['spacing']}`,
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

export default Heading;
