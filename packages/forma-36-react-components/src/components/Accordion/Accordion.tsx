import React from 'react';
import cn from 'classnames';

import styles from './Accordion.css';

export interface AccordionProps {
  /**
   * Specify the alignment of the chevron inside the accordion header
   */
  align?: 'start' | 'end';
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

export const Accordion = ({
  align = 'end',
  children,
  className,
  testId = 'cf-ui-accordion',
  ...otherProps
}: AccordionProps) => {
  const classNames = cn(styles.Accordion, className, {
    [styles[`Accordion--${align}`]]: align,
  });

  return (
    <ul className={classNames} data-test-id={testId} {...otherProps}>
      {children}
    </ul>
  );
};

export default Accordion;
