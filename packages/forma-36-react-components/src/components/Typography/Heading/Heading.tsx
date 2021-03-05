import React from 'react';
import cn from 'classnames';
import styles from './Heading.css';

import { TypographyContext } from '../Typography/Typography';

export interface HeadingProps {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  testId?: string;
}

export function Heading({
  className,
  children,
  testId = 'cf-ui-heading',
  element = 'h1',
  ...otherProps
}: HeadingProps): React.ReactElement {
  const classNames = cn(styles['Heading'], className);

  const Element = element!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

  return (
    <TypographyContext.Consumer>
      {(value) => {
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
