import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./Typography.css');

export type TypographyProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
} & typeof defaultProps;

const defaultConfiguration = {
  displayText: { spacing: 'l' },
  displayTextLarge: { spacing: 'xl' },
  heading: { spacing: 'm' },
  paragraph: { spacing: 'm' },
  sectionHeading: { spacing: 'l' },
  subheading: { spacing: 'm' },
};

const defaultProps = {
  testId: 'cf-ui-text-container',
};

export const TypographyContext = React.createContext({});

export class Typography extends Component<TypographyProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;
    const classNames = cn(styles.Typography, className);

    return (
      <TypographyContext.Provider value={defaultConfiguration}>
        <div {...otherProps} className={classNames} data-test-id={testId}>
          {children}
        </div>
      </TypographyContext.Provider>
    );
  }
}

export default Typography;
