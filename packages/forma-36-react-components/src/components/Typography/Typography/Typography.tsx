import React from 'react';
import cn from 'classnames';

const styles = require('./Typography.css');

export interface TypographyProps {
  extraClassNames?: string;
  children?: React.ReactNode;
  testId?: string;
}

export const TypographyContext = React.createContext({});

class Typography extends React.Component<TypographyProps> {
  static defaultProps: Partial<TypographyProps> = {
    extraClassNames: undefined,
    testId: 'cf-ui-text-container',
  };

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;
    const classNames = cn(styles.Typography, extraClassNames);

    return (
      <TypographyContext.Provider
        value={{
          displayText: { spacing: 'l' },
          displayTextLarge: { spacing: 'xl' },
          heading: { spacing: 'm' },
          paragraph: { spacing: 'm' },
          sectionHeading: { spacing: 'l' },
          subheading: { spacing: 'm' },
        }}
      >
        <div className={classNames} data-test-id={testId} {...otherProps}>
          {children}
        </div>
      </TypographyContext.Provider>
    );
  }
}

export default Typography;
