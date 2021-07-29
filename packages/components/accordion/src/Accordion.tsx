import React from 'react';
import { Box } from '@contentful/f36-core';
import getStyles from './Accordion.styles';

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

const _Accordion = (
  {
    align = 'end',
    children,
    className,
    testId = 'cf-ui-accordion',
    ...otherProps
  }: AccordionProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const styles = getStyles();
  return (
    <Box
      as="ul"
      className={styles.accordion}
      testId={testId}
      {...otherProps}
      ref={ref}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            align,
          });
        }
        return child;
      })}
    </Box>
  );
};

export const Accordion = React.forwardRef(_Accordion);
