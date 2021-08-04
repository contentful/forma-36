import React from 'react';
import { Box } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

import { getAccordionStyles } from './Accordion.styles';

export interface AccordionProps extends CommonProps {
  /**
   * Specify the alignment of the chevron inside the accordion header
   * @default end
   */
  align?: 'start' | 'end';
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
}

const _Accordion = (
  {
    align = 'end',
    children,
    className,
    testId = 'cf-ui-accordion',
    ...otherProps
  }: AccordionProps,
  ref: React.Ref<HTMLUListElement>,
) => {
  const styles = getAccordionStyles({ className });
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
