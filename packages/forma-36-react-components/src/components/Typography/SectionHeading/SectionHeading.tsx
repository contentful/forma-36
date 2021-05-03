import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './SectionHeading.css';

import { TypographyContext } from '../Typography/Typography';

export interface SectionHeadingProps extends HTMLAttributes<HTMLElement> {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  testId?: string;
}

export function SectionHeading({
  className,
  children,
  testId = 'cf-ui-section-heading',
  element = 'h3',
  ...otherProps
}: SectionHeadingProps): React.ReactElement {
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
