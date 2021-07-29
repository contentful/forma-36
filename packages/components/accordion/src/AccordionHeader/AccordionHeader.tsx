import React, { FC } from 'react';
import { cx } from 'emotion';
import { Subheading } from '@contentful/f36-typography';
import type { HeadingElement } from '@contentful/f36-typography';
import { ChevronDownTrimmed } from '@contentful/f36-icons';
import type { CommonProps } from '@contentful/f36-core';

import getStyles from '../Accordion.styles';

export interface AccordionHeaderProps extends CommonProps {
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * The function that will be called once the user clicks on the accordion title
   */
  handleOnClick: VoidFunction;
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

export const AccordionHeader: FC<AccordionHeaderProps> = ({
  children,
  handleOnClick,
  isExpanded = false,
  ariaId,
  element = 'h2',
  align = 'end',
}: AccordionHeaderProps) => {
  const styles = getStyles();
  const chevronStyles = cx(styles.accordionHeaderIcon, {
    [styles.accordionHeaderIconExpanded]: isExpanded,
  });
  const headerStyles = cx(styles.accordionHeader, {
    [styles.alignHeaderEnd]: align === 'end',
    [styles.alignHeaderStart]: align === 'start',
  });

  return (
    <Subheading as={element}>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={`accordion-panel--${ariaId}`}
        id={`accordion--${ariaId}`}
        className={headerStyles}
        onClick={handleOnClick}
      >
        <ChevronDownTrimmed className={chevronStyles} variant="secondary" />
        {children}
      </button>
    </Subheading>
  );
};
