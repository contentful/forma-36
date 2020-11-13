import React, { FormEventHandler, FormEvent } from 'react';
import cn from 'classnames';

import styles from './Form.css';

export interface FormProps {
  onSubmit?: FormEventHandler;
  spacing?: 'condensed' | 'default';
  testId?: string;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactChild | React.ReactNodeArray;
}

const defaultProps: Partial<FormProps> = {
  spacing: 'default',
  testId: 'cf-ui-form',
};

export const Form = (props: FormProps) => {
  const {
    className,
    children,
    testId,
    onSubmit,
    spacing,
    ...otherProps
  } = props;

  const classNames = cn(styles.Form, className);

  const formItemClassNames = cn(
    styles.Form__item,
    styles[`Form__item--${spacing}`],
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form
      className={classNames}
      data-test-id={testId}
      onSubmit={handleSubmit}
      {...otherProps}
    >
      {React.Children.map(children, (child) => {
        if (child) {
          return <div className={formItemClassNames}>{child}</div>;
        }
        return null;
      })}
    </form>
  );
};

Form.defaultProps = defaultProps;

export default Form;
