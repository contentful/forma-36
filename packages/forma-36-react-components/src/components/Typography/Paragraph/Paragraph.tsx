import React from 'react';
import cn from 'classnames';
import styles from './Paragraph.css';

import { TypographyContext } from '../Typography';

export interface ParagraphProps {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children?: React.ReactNode;
  testId?: string;
  style?: React.CSSProperties;
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

export default Paragraph;
