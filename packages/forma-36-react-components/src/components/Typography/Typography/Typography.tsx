import React, { Component } from 'react';
import cn from 'classnames';

import styles from './Typography.css';

export interface TypographyProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
}

const defaultConfiguration: Partial<TypographyProps> = {};

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
