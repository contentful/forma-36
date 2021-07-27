import React from 'react';
import { styles } from './Accordion.styles';

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
  return (
    <ul className={styles.accordion} data-test-id={testId} {...otherProps}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { align });
        }
        return child;
      })}
    </ul>
  );
};
