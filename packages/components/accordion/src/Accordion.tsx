import React, { useMemo } from 'react';
import { Box, type CommonProps, type ExpandProps } from '@contentful/f36-core';
import {
  AccordionContextProvider,
  AccordionContextType,
} from './AccordionContext';
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

const AccordionBase = (
  {
    align = 'end',
    children,
    className,
    testId = 'cf-ui-accordion',
    ...otherProps
  }: ExpandProps<AccordionProps>,
  ref: React.Ref<HTMLUListElement>,
) => {
  const styles = getAccordionStyles({ className });

  const contextValue: AccordionContextType = useMemo(
    () => ({
      align,
    }),
    [align],
  );

  return (
    <AccordionContextProvider value={contextValue}>
      <Box
        as="ul"
        className={styles.accordion}
        testId={testId}
        {...otherProps}
        ref={ref}
      >
        {children}
      </Box>
    </AccordionContextProvider>
  );
};

export const Accordion = React.forwardRef(AccordionBase);
