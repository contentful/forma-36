import React from 'react';
import { Subheading } from '@contentful/f36-typography';
import type { HeadingElement } from '@contentful/f36-typography';
import { ChevronDownTrimmed } from '@contentful/f36-icons';
import type { CommonProps } from '@contentful/f36-core';

import { getAccordionHeaderStyles } from './AccordionHeader.styles';

export interface AccordionHeaderProps extends CommonProps {
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * The function that will be called once the user clicks on the accordion title
   */
  onClick: VoidFunction;
  /**
   * A boolean that tells if the accordion should be expanded or collapsed
   */
  isExpanded: boolean;
  /**
   * An unique id that is necessary for the aria roles and properties
   */
  ariaId: string;
  /**
   * The heading element that will be used by the Subheading component
   */
  element?: HeadingElement;
  /**
   * Specify the alignment of the chevron inside the accordion header
   */
  align?: 'start' | 'end';
}

export const AccordionHeader = ({
  children,
  onClick,
  isExpanded = false,
  ariaId,
  element = 'h2',
  align = 'end',
  testId = 'cf-ui-accordion-header',
  ...rest
}: AccordionHeaderProps) => {
  const styles = getAccordionHeaderStyles({ align, isExpanded });

  return (
    <Subheading {...rest} testId={testId} marginBottom="none" as={element}>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={`accordion-panel--${ariaId}`}
        id={`accordion--${ariaId}`}
        className={styles.accordionHeader}
        onClick={onClick}
      >
        <ChevronDownTrimmed
          className={styles.accordionHeaderIcon}
          variant="secondary"
        />
        {children}
      </button>
    </Subheading>
  );
};
