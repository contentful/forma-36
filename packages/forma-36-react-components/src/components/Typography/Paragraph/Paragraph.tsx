import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Paragraph.css';

import { TypographyContext } from '../Typography';

export type ParagraphProps = {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children?: React.ReactNode;
  testId?: string;
  style?: React.CSSProperties;
} & Partial<typeof defaultProps>;

const defaultProps = {
  element: 'p',
  testId: 'cf-ui-paragraph',
};

export class Paragraph extends Component<ParagraphProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, element, ...otherProps } = this.props;

    const classNames = cn(styles['Paragraph'], className);

    const Element = element;

    return (
      <TypographyContext.Consumer>
        {(value) => {
          return (
            <Element
              className={cn(classNames, [
                value['paragraph'] &&
                  `f36-margin-bottom--${value['paragraph']['spacing']}`,
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

export default Paragraph;
