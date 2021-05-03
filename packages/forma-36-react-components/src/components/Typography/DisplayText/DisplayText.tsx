import React from 'react';
import cn from 'classnames';
import styles from './DisplayText.css';

import { TypographyContext } from '../Typography/Typography';

export interface DisplayTextProps {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: 'default' | 'large' | 'huge';
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
  title?: string;
}

export function DisplayText({
  className,
  children,
  testId = 'cf-ui-display-text',
  element = 'h1',
  size = 'default',
  ...otherProps
}: DisplayTextProps): React.ReactElement {
  const classNames = cn(styles['DisplayText'], className, {
    [styles[`DisplayText--${size}`]]: size,
  });

  const Element = element!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

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
