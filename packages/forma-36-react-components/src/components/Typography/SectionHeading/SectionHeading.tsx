import React, { Component } from 'react';
import cn from 'classnames';
import styles from './SectionHeading.css';

import { TypographyContext } from '../Typography/Typography';

export interface SectionHeading {
  extraClassNames?: string;
  children?: React.ReactNode;
  testId?: string;
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export class SectionHeading extends Component<SectionHeading> {
  static defaultProps = {
    element: 'h3',
    testId: 'cf-ui-section-heading',
  };

  render() {
    const {
      extraClassNames,
      children,
      testId,
      element,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['SectionHeading'], extraClassNames);

    const Element = element;

    return (
      <TypographyContext.Consumer>
        {value => {
          return (
            <Element
              className={cn(classNames, [
                value['sectionHeading'] &&
                  `f36-margin-bottom--${value['sectionHeading']['spacing']}`,
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

export default SectionHeading;
