import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Accordion.css';

export interface AccordionProps {
  /**
   * Class names to be appended to the className prop of the Accordion wrapper
   */
  className?: string;
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
}

const defaultProps = {
  testId: 'cf-ui-accordion',
};

export const Accordion: FC<AccordionProps> = ({
  className,
  children,
  testId,
  ...otherProps
}: AccordionProps) => {
  const classNames = cn(styles.Accordion, className);

  return (
    <ul className={classNames} data-test-id={testId} {...otherProps}>
      {children}
    </ul>
  );
};
Accordion.defaultProps = defaultProps;

export default Accordion;
