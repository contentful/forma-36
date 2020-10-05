import React, { Component } from 'react';
import cn from 'classnames';
import styles from './SectionHeading.css';

import { TypographyContext } from '../Typography';

export interface SectionHeadingProps {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children?: React.ReactNode | string;
  testId?: string;
  style?: React.CSSProperties;
}

const defaultProps: Partial<SectionHeadingProps> = {
  element: 'h3',
  testId: 'cf-ui-section-heading',
};

export class SectionHeading extends Component<SectionHeadingProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, element, ...otherProps } = this.props;

    const classNames = cn(styles['SectionHeading'], className);

    const Element = element!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    return (
      <TypographyContext.Consumer>
        {(value) => {
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
