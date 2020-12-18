import React from 'react';
import cn from 'classnames';
import styles from './Subheading.css';

import { TypographyContext } from '../Typography';

export interface SubheadingProps {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children?: React.ReactNode;
  testId?: string;
  style?: React.CSSProperties;
}

export function Subheading({
  className,
  children,
  testId,
  element,
  ...otherProps
}: SubheadingProps): React.ReactElement {
  const classNames = cn(styles['Subheading'], className);

  const Element = element!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

  return (
    <TypographyContext.Consumer>
      {(value) => {
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

Subheading.defaultProps = {
  element: 'h2',
  testId: 'cf-ui-subheading',
};

export default Subheading;
