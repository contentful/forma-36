import React, { FC } from 'react';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import { Collapse } from '@contentful/f36-collapse';

import { getAccordionPanelStyles } from './AccordionPanel.styles';

export interface AccordionPanelProps extends CommonProps {
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * A boolean that tells if the accordion should be expanded or collapsed
   */
  isExpanded: boolean;
  /**
   * An unique id that is necessary for the aria roles and properties
   */
  ariaId: string;
}

export const AccordionPanel: FC<ExpandProps<AccordionPanelProps>> = ({
  children,
  isExpanded = false,
  ariaId,
  testId = 'cf-ui-accordion-panel',
  ...otherProps
}: AccordionPanelProps) => {
  const styles = getAccordionPanelStyles();

  return (
    <Collapse
      testId={testId}
      aria-labelledby={`accordion--${ariaId}`}
      isExpanded={isExpanded}
      {...otherProps}
    >
      <div className={styles.accordionPanelContent}>{children}</div>
    </Collapse>
  );
};

AccordionPanel.displayName = 'AccordionPanel';
