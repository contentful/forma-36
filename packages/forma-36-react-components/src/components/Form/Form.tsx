import React, {
  Children,
  useCallback,
  CSSProperties,
  FormEventHandler,
  FormEvent,
  ReactChild,
  ReactNodeArray,
} from 'react';
import cn from 'classnames';

import styles from './Form.css';

export interface FormProps {
  onSubmit?: FormEventHandler;
  spacing?: 'condensed' | 'default';
  testId?: string;
  style?: CSSProperties;
  className?: string;
  children: ReactChild | ReactNodeArray;
}

export const Form = ({
  children,
  className,
  onSubmit,
  spacing = 'default',
  testId = 'cf-ui-form',
  ...otherProps
}: FormProps) => {
  const classNames = cn(styles.Form, className);

  const formItemClassNames = cn(
    styles.Form__item,
    styles[`Form__item--${spacing}`],
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (onSubmit) {
        onSubmit(event);
      }
    },
    [onSubmit],
  );

  return (
    <form
      className={classNames}
      data-test-id={testId}
      onSubmit={handleSubmit}
      {...otherProps}
    >
      {Children.map(children, (child) => {
        if (child) {
          return <div className={formItemClassNames}>{child}</div>;
        }
        return null;
      })}
    </form>
  );
};
