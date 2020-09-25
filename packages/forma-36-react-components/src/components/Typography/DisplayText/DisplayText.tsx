import React, { Component } from 'react';
import cn from 'classnames';
import styles from './DisplayText.css';

import { TypographyContext } from '../Typography';

export type DisplayTextProps = {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size: 'default' | 'large';
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  element: 'h1',
  testId: 'cf-ui-display-text',
  size: 'default',
};

export class DisplayText extends Component<DisplayTextProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      children,
      testId,
      element,
      size,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['DisplayText'], className, {
      [styles[`DisplayText--${size}`]]: size,
    });

    const Element = element;

    return (
      <TypographyContext.Consumer>
        {(value) => {
          const contextSize =
            size === 'large' ? value['displayTextLarge'] : value['displayText'];

          return (
            <Element
              className={cn(classNames, [
                contextSize && `f36-margin-bottom--${contextSize.spacing}`,
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

export default DisplayText;
