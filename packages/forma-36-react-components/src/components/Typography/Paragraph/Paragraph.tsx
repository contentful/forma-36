import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Paragraph.css';

import { TypographyContext } from '../Typography/Typography';

export interface ParagraphProps extends HTMLAttributes<HTMLElement> {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  testId?: string;
}

export function Paragraph({
  className,
  children,
  testId = 'cf-ui-paragraph',
  element = 'p',
  ...otherProps
}: ParagraphProps): React.ReactElement {
  const classNames = cn(styles['Paragraph'], className);

  const Element = element!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

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
