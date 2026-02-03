import React from 'react';
import tokens from '@contentful/f36-tokens';
import { Subheading, type HeadingElement } from '@contentful/f36-typography';
import { CaretDownIcon } from '@contentful/f36-icons';
import type { CommonProps } from '@contentful/f36-core';

import { getAccordionHeaderStyles } from './AccordionHeader.styles';
import { useAccordionContext } from '../AccordionContext';

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
}

export const AccordionHeader = ({
  children,
  onClick,
  isExpanded = false,
  ariaId,
  element = 'h2',
  testId = 'cf-ui-accordion-header',
  ...rest
}: AccordionHeaderProps) => {
  const { align } = useAccordionContext();
  const styles = getAccordionHeaderStyles({ align, isExpanded });

  return (
    <Subheading testId={testId} {...rest} marginBottom="none" as={element}>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={`accordion-panel--${ariaId}`}
        id={`accordion--${ariaId}`}
        className={styles.accordionHeader}
        onClick={onClick}
      >
        <CaretDownIcon
          size="tiny"
          className={styles.accordionHeaderIcon}
          color={tokens.gray900}
        />
        {children}
      </button>
    </Subheading>
  );
};

AccordionHeader.displayName = 'AccordionHeader';
