import React, { FC } from 'react';
import cn from 'classnames';
import { Subheading } from '@contentful/f36-typography';
import type { HeadingElement } from '@contentful/f36-typography';
import { ChevronDownTrimmed } from '@contentful/f36-icons';

import styles from '../Accordion.css';

export interface AccordionHeaderProps {
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * The function that will be called once the user clicks on the accordion title
   */
  handleClick: VoidFunction;
  /**
   * A boolean that tells if the accordion should be expanded or collapsed
   */
  isExpanded: boolean;
  /**
   * An unique id that is necessary for the aria roles and properties
   */
  ariaId: number | null;
  /**
   * The heading element that will be used by the Subheading component
   */
  element?: HeadingElement;
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({
  children,
  handleClick,
  isExpanded = false,
  ariaId,
  element = 'h2',
}: AccordionHeaderProps) => {
  const classNames = cn(styles.AccordionHeader, {
    [styles['AccordionHeader--expanded']]: isExpanded,
  });

  return (
    <Subheading as={element}>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={`accordion-panel--${ariaId}`}
        id={`accordion--${ariaId}`}
        className={classNames}
        onClick={handleClick}
      >
        <ChevronDownTrimmed
          className={styles.AccordionHeader__icon}
          variant="secondary"
        />
        {children}
      </button>
    </Subheading>
  );
};
